{% load geojson_tags %}
{% load i18n avatar_tags %}
{% load bootstrap_tags %}
<!--
/*
Esta clase es el js para los Chats de los mapas
*/-->
<script type="text/javascript">
$(document).ready(function(){
	searchLayer();
	var geometric_shape = null;
 	var geo_list = [];
 	var chat_comment_reply = '';

	function show_markers(mapid){
		var redMarker = L.AwesomeMarkers.icon({
			icon: 'ion-chatbubbles',
			markerColor: 'cadetblue',
			//iconColor: '#DF852A'//'#6b1d5c'
		});
		close_layers();
		{% for c in chats %}
			var geo_coordinates = [];
			var geo_obj = {{ c.location|geojsonfeature|safe }};
			var id_chat = "{{ c.id|safe }}";
			var id2 = "{{c.maps.id|safe}}";
			if (mapid==id2) {
				{% if c.parent_chat == None %}
				 		if (geo_obj!=null) {
							marker = new L.marker([geo_obj.geometry.coordinates[1],geo_obj.geometry.coordinates[0]],{
								title : 'Selecciona para ingresa un comentario',
								icon: redMarker,
								options:{
									id_comment: id_chat,
									lat : geo_obj.geometry.coordinates[1],
									lng : geo_obj.geometry.coordinates[0]
								}
							})
							.on('click', markerOnClick)
							//.bindPopup(container[0], customOptions)
							.addTo(map);
						}
				{% endif %}
		}
		{% endfor %}
	}
	// Creates a red marker with the icon
function doMarker(id_new_chat, lat, lng, color){
	var blueMarker = L.AwesomeMarkers.icon({
		icon: 'ion-chatbubbles',
		markerColor: color,
	});
		marker = new L.marker([lat,lng],{
			title : 'Los comentarios que hagas seran para esta ubicación',
			icon: blueMarker,
			options:{
				id_comment: id_new_chat,
				lat : lat,
				lng : lng
			}
		})
		.on('click', markerOnClick)
		//.bindPopup(container[0], customOptions)
		.addTo(map);
}
function remove_color_marker(){
			var indice_die = arr_colors.length-2;
			var marker_before = arr_colors[indice_die];
			removeMarker(marker_before.id_comment);
			doMarker(marker_before.id_comment, marker_before.lat, marker_before.lng, "cadetblue");
}
	function change_color(e){
		$.each(map._layers, function (ml) {
			if (typeof map._layers[ml].options.options != "undefined"){
				if (map._layers[ml].options.options.id_comment==e.target.options.options.id_comment) {
						var id_new_chat = map._layers[ml].options.options.id_comment;
						var lat = map._layers[ml].options.options.lat;
						var lng = map._layers[ml].options.options.lng;
						arr_colors.push(map._layers[ml].options.options);
						var mapid = $("input[name='radiomMapa']:checked").attr('data-mapid');
						if (typeof(mapid) == "undefined") {
								mapid = getCookie("id_map");
						}
						if (typeof(mapid) != "undefined") {
							if (color_temp_index==0) {
									color_temp_index = color_temp_index + 1;
							}else {
									remove_color_marker();
							}
							map.removeLayer(this);
								// Creates a red marker with the coffee icon
								doMarker(id_new_chat, lat, lng, "blue");

						}
				}
				}
		});
	}
	//Show markers
$('.show_markers').click(function(){
	var mapid = $("input[name='radiomMapa']:checked").attr('data-mapid');
	if (typeof(mapid) != "undefined") {
		$(this).hide();
		$('.hide_markers').show();
		clear();
		show_markers(mapid);
	}
});
function checkCookieInitial(id_map, data) {
    var bbx_enbed=getCookie("bbx");//Como parametro le pasamos el nombre de la cookie, en este caso es bbx
    var id_map = getCookie("id_map");
    console.log("checkj");
    console.log(id_map);
    //verificamos si existe la cookie
		if (typeof(id_map) != "undefined"&&typeof(bbx_enbed) != "undefined") {
    if (bbx_enbed != "" && id_map != "") {
        var layers = data.map.layers;
        var x = data.map.center[1];
        var y = data.map.center[0];
        var point = new L.Point(y, x); // Lon/Lat
        var latlng = L.Projection.SphericalMercator.unproject(point);

        console.log("Welcome initial again " + bbx_enbed);
        var bbx_arr = bbx_enbed.split(",")//separamos el embed por comas por que lo traemos como un string
        console.log(bbx_arr);
        console.log(checkboxes);
        console.log(layers);
        console.log("***");
        $.each(layers, function(index, val) {
          if (val.group != 'background'){
            console.log(index);
            console.log(val);
            console.log("capas");
            var dataId = 'i'+index;
            var dataInfo = ""
            if(typeof val.capability != "undefined"){
                dataInfo = '<i title="Descripción" class="fa fa-info" data-container="body" data-trigger="hover" data-toggle="popover" data-placement="left" data-content="'+val.capability.abstract+'"></i>';
            }
            var layerStyle = typeof val.styles != "undefined" ? val.styles : '';
            var theLayer = L.tileLayer.betterWms(data.sources[val.source].url, {
                  layers: val.name,
                  format: val.format,
                  transparent: true,
                  styles: layerStyle
                });

            map.addLayer(theLayer);
            checkboxes.push(theLayer);
          }
          });
        map.fitBounds([
        		[bbx_arr[1], bbx_arr[0]],
        		[bbx_arr[3], bbx_arr[2]]
        ]);
				$('.show_markers').hide();
				$('.hide_markers').show();
				$('.marker-control').show();
				clear();
				show_markers(id_map);
        //map.addLayer(checkboxes[i]);m1cl3i
    }else {
			  console.log("ya murio la galleta");
 				$(".leaflet-left").addClass( "leaflet-control-openmenu" );
    }
	}else {
			console.log("ya murio la galleta");
			$(".leaflet-left").addClass( "leaflet-control-openmenu" );
	}
}
function close_layers(){
	//Cerramos el panel de la izquierda leaflet-control-openmenu
		$(".layerMenu").removeClass( "translateLayerListRight" ).addClass( "translateLayerListLeft" );
		$(".layerMenuNubOpen").removeClass( "layerMenuNubOpen" ).addClass( "layerMenuNubClosed" );
		$(".leaflet-left").removeClass( "leaflet-control-openmenu" );
}
/*Search the mapa of last time*/
function searchLayer(){
  var mapid = getCookie("id_map");
	console.log("searching....");
	console.log(mapid);
	if (typeof(mapid) != "undefined") {
		console.log("no es undefined");
  if (mapid!="") {
    $.ajax({
  			data: {'mapid': mapid },
  			url: '/interactive/maps/ajax/',
  			type: 'GET',
  			success : function(data) {
  				checkCookieInitial(mapid, data);
					close_layers();
  			},
  			error : function(message) {
  							console.log(message);
  					 }
  			});
  }else {
		console.log("ya murio la galleta");
		$(".leaflet-left").addClass( "leaflet-control-openmenu" );
  }
}else {
	console.log("ya murio la galleta");
	$(".leaflet-left").addClass( "leaflet-control-openmenu" );
}
}
function doCookie(){
	var bbx = map.getBounds().toBBoxString();//getting the embed of the map
	var id_map_cook = getCookie("id_map");
	console.log(id_map_cook);
	console.log("wtf");
	if (typeof(id_map_cook) == "undefined") {
			console.log("ya existe una galleta");
	}else {
		var id_map = $("input[name='radiomMapa']:checked").attr('data-mapid');
		console.log(id_map);
		if (typeof(id_map) != "undefined") {
			setingCookie("bbx",bbx);
			setingCookie("id_map",id_map);
		}
	}
}
function markerOnClick(e){
	doCookie();
	open_comments(e);//open the tab of comments
	change_tab(1);//with marameter pass 1 for tab of comments
	change_color(e);//change the color of the marker
	if($( "#layers-tab" ).hasClass( "tab-current" )){
			 $("#layers-tab").removeClass( "tab-current" );
			 $("#comments-tab").addClass( "tab-current" );
	 }
	//var mapid = $("input[name='radiomMapa']:checked").attr('data-mapid');
	var id_chat_original = e.target.options.options.id_comment;
	var geo_list = [];
	var chat_comment_reply = '';
	var user_chats = '';
	var chat_comment = '';
	var chat_image = '';
	var url_chat = '';
	var comment = '';
	var chat_url = '';
	var customPopupPanelIzq = '';
	$('.chat-main').html("");
	$('.comments-chat').html("");
	{% for c in chats %}
	var id2 = {{c.id}};
	var comment = "{{ c.comments|escape|linebreaks }}";

	if (id_chat_original==id2) {
		comment = "{{ c.comments|escape|linebreaks }}";
		user_chat = "{{ c.user_chat|safe }}";
		id_chat = "{{ c.id|safe }}";
		{% if c.parent_chat == None %}
		var count_likes = 0;
		{% for like in likes %}
			{% if like.chat.id == c.id %}
			count_likes = count_likes + 1;
			{% endif %}
		{% endfor %}
			{% if c.image %}
					chat_image = '<img src="{{MEDIA_URL}}{{c.image}}" class="img-chat-main" alt="{{c.id}}" width="360px" height="180px"/>';
					$('.chat-main').html(''+chat_image+'');
			{% endif %}
			user_chats = '<div class="chat_user"><img src="{% avatar_url c.user_chat %}" class="avatar_comment" alt="No avatar" /><span class="user_comments"> {{ c.user_chat }}</span><span class="date_comments"> -{{ c.creation_date|date:"j F" }}</span>';
			$('.chat-main').append(''+user_chats+' ');
			{% if user.is_authenticated %}
				{% if user.is_staff %}
						$('.chat-main').append('<div class="dropdown-option"><span class="window-option"><i class="fa fa-ellipsis-v" title="Opciones" aria-hidden="true"></i></span><div class="dropdown-content-option"><span class="delete_comment_gnr" id="{{c.id}}_remove_chat">  <span class="delete_comments" > Eliminar comentarios</span>  </span></div></div>');
					{% else %}
						{% if user.id == c.user_chat.id %}
							$('.chat-main').append('<div class="dropdown-option"><span class="window-option"><i class="fa fa-ellipsis-v" title="Opciones" aria-hidden="true"></i></span><div class="dropdown-content-option"><span class="delete_comment_gnr" id="{{c.id}}_remove_chat">  <span class="delete_comments" > Eliminar comentarios</span>  </span></div></div>');
						{% else %}
							$('.chat-main').append('<div class="dropdown-option"><span class="window-option"><i class="fa fa-ellipsis-v" title="Opciones" aria-hidden="true"></i></span><div class="dropdown-content-option"><span class="delete_comment_gnr_none" id="{{c.id}}_remove_chat">  <span class="delete_comments" > No puedes eliminar estos comentarios</span>  </span></div></div>');
						{% endif %}
					{% endif %}
					 {% else %}
					       $('.chat-main').append('<div class="dropdown-option"><span class="window-option"><i class="fa fa-ellipsis-v" title="Opciones" aria-hidden="true"></i></span><div class="dropdown-content-option"><span class="delete_comment_gnr" id="{{c.id}}_remove_chat">  <span class="delete_comments" > Eliminar comentario</span>  </span></div></div>');
								//$('.chat-main').append('<div class="dropdown-option"><span class="window-option"><i class="fa fa-ellipsis-v" title="Opciones" aria-hidden="true"></i></span><div class="dropdown-content-option"><span class="delete_comment_gnr_none" id="{{c.id}}_remove_chat">gaga  <span class="delete_comments" > Matalos a todos</span>  </span></div></div>');
					 {% endif %}

			chat_comment = '<div class="body_chats">{{ c.comments|escape|linebreaks }}</div>';
			$('.chat-main').append(''+chat_comment+'');

			{% if c.url %}
					chat_url = '<div class="body_chats"> <i class="fa fa-external-link fa-1x" aria-hidden="true"></i> <a href="{{ c.url|safe }}" target="_blank">{{ c.url|safe }} </a></div>';
					$('.chat-main').append(''+chat_url+'');
			{% endif %}
			$('.chat-main').append('</div><div class="user_chat_comment"> <span class="comment-focus"> <i class="fa fa-reply fa-1x" title="Comentar" aria-hidden="true"></i> <span class="count-chats">{{ c.sorted_chats.count }}</span> </span> <span class="like-chat" id="like_{{c.id}}" data_count_like="'+count_likes+'"><i class="fa fa-heart" title="Me gusta" aria-hidden="true"></i><span class="count-likes">'+count_likes+'</span></span> </div>');
		{% endif %}

	 {% for child in c.sorted_chats.all|dictsort:"id" %}
					var indice = 1;
					var user_fa = "{{ child.user_chat }}";
				{% if child.parent_chat %}
				var count_replys = 0;
				{% for rpl in reply_obj %}
					{% if rpl.chat.id == child.id %}
					count_replys = count_replys + 1;
					{% endif %}
				{% endfor %}
				var count_likes_child = 0;
				{% for like in likes %}
					{% if like.chat.id == child.id %}
					count_likes_child = count_likes_child + 1;
					{% endif %}
				{% endfor %}

						var chat_comment_reply_user = '<div class="body_comments"><img src="{% avatar_url child.user_chat %}" class="avatar_comment_row" alt="No avatar" /><span class="user_comments_row"> {{ child.user_chat }}</span><span class="date_comments"> -{{ c.creation_date|date:"j F" }}</span>';
						$('.comments-chat').append(''+chat_comment_reply_user+'');

						var first_reply = '<div class="user_chat_comment_rply"> <span class="comment-parentchat" id="modal_response_{{child.id}}"> <i class="fa fa-reply fa-1x" title="Comentar" aria-hidden="true"></i> <span class="count-chats">'+count_replys+'</span> </span>';
						var chat_comment_reply_responselike = first_reply+'<span  class="like-chat-child"  id="like_child_{{child.id}}" data_count_like_child="'+count_likes_child+'"><i class="fa fa-heart" title="Me gusta" aria-hidden="true"></i><span class="count-likes-child">'+count_likes_child+'</span></span></div>';
						//$('.comments-chat').append(''+chat_comment_reply_responselike+'');

						{% if  child.url %}
							var chat_comment_reply_url = '<div class="body_url_response"><i class="fa fa-external-link fa-1x" aria-hidden="true"></i><a href="{{ child.url|safe }}" target="_blank">{{ child.url|safe }}</a></div>';
							//$('.comments-chat').append(''+chat_comment_reply_url+'');
							{% else %}
							var chat_comment_reply_url = '';
						{% endif %}

						{% if  child.image %}

							var chat_comment_reply_img =  '<img src="{{MEDIA_URL}}{{child.image}}" class="img-response" alt="{{child.id}}" width="140px" height="140px"/><span class="span-comment">{{ child.comments|safe|linebreaks }}</span>'+chat_comment_reply_url+''+chat_comment_reply_responselike;
							//$('.comments-chat').append(''+chat_comment_reply_img+'');
							var chat_comment_re_div = '<div class="body_img_response">';
						{% else %}
							var chat_comment_reply_img = '{{ child.comments|escape|linebreaks }}'+chat_comment_reply_url+''+chat_comment_reply_responselike;
							var chat_comment_re_div = '<div class="body_response" id="body_res_{{child.id}}">';
							//$('.comments-chat').append(''+chat_comment_reply_comment+'');
						{% endif %}


					 {% if user.is_authenticated %}
							{% if user.is_staff %}
									$('.comments-chat').append(chat_comment_re_div+'<div class="dropdown-option-response"><span class="window-option-response"><i class="fa fa-ellipsis-v" title="Opciones" aria-hidden="true"></i></span><div class="dropdown-content-option-response"><span class="delete_comment_gnr" id="{{child.id}}_remove_chat">  <span class="delete_comments" > Eliminar comentarios</span>  </span></div></div>'+chat_comment_reply_img);
							{% else %}
										{% if user.id == child.user_chat.id %}
												$('.comments-chat').append(chat_comment_re_div+'<div class="dropdown-option-response"><span class="window-option-response"><i class="fa fa-ellipsis-v" title="Opciones" aria-hidden="true"></i></span><div class="dropdown-content-option-response"><span class="delete_comment_gnr" id="{{child.id}}_remove_chat">  <span class="delete_comments" > Eliminar comentarios</span>  </span></div></div>'+chat_comment_reply_img);
										{% else %}
												$('.comments-chat').append(chat_comment_re_div+'<div class="dropdown-option-response"><span class="window-option-response"><i class="fa fa-ellipsis-v" title="Opciones" aria-hidden="true"></i></span><div class="dropdown-content-option-response"><span class="delete_comment_gnr_none" id="{{child.id}}_remove_chat">  <span class="delete_comments" >  No puedes eliminar este comentario</span>  </span></div></div>'+chat_comment_reply_img);
										{% endif %}
							{% endif %}
						{% else %}
									$('.comments-chat').append(chat_comment_re_div+'<div class="dropdown-option-response"><span class="window-option-response"><i class="fa fa-ellipsis-v" title="Opciones" aria-hidden="true"></i></span><div class="dropdown-content-option-response"><span class="delete_comment_gnr" id="{{child.id}}_remove_chat">  <span class="delete_comments" > Eliminar comentario</span>  </span></div></div>'+chat_comment_reply_img);
						{% endif %}
						$('.comments-chat').append('</div>');


						$('.comments-chat').append('</div>');
						var chat_comment_reply_response = '<div class="reply_response2" id="{{child.id}}_rply"></div>';
						$('.comments-chat').append(''+chat_comment_reply_response+'');
					$('.comments-chat').append('</div>');
					$('.comments-chat').append('<div class="responnses_c">');
					{% for rpl in reply_obj %}
						{% if rpl.chat.id == child.id %}
						 indice += indice;
						 if (indice>2) {
							var chat_comment_response_user = '<div class="body_comments_reply_hide" id="{{rpl.id}}hide_dlu"><img src="{% avatar_url rpl.user_reply %}" class="avatar_comment_reply_row" alt="No avatar" /><span class="user_comments_row"> {{ rpl.user_reply }}</span><span class="date_comments"> -{{ rpl.creation_date|date:"j F" }}</span>';
								{% if user.is_authenticated %}
								{% if user.is_staff %}
										$('.comments-chat').append(''+chat_comment_response_user+'<span class="img_delete_comments_row" id="{{rpl.id}}dlt"><img src="{{STATIC_URL}}idegeo/style_adesur/img/delete30.png" title="Eliminar comentario" class="img_delete_comments_gnr_row"/></span>');
										{% else %}
											{% if user.id == rpl.user_reply.id %}
												$('.comments-chat').append(''+chat_comment_response_user+'<span class="img_delete_comments_row" id="{{rpl.id}}dlt"><img src="{{STATIC_URL}}idegeo/style_adesur/img/delete30.png" title="Eliminar comentario" class="img_delete_comments_gnr_row"/></span>');
											{% else %}
												$('.comments-chat').append(''+chat_comment_response_user+'');
											{% endif %}
										{% endif %}
										{% else %}
													$('.comments-chat').append(''+chat_comment_response_user+'<span class="img_delete_comments_row" id="{{rpl.id}}dlt"><img src="{{STATIC_URL}}idegeo/style_adesur/img/delete30.png" title="Eliminar comentario" class="img_delete_comments_gnr_row"/></span>');
									{% endif %}

								var chat_comment_response_comment = '<span class="response_rply_hide" id="{{rpl.id}}hide_dlc">{{ rpl.comments|escape|linebreaks }}</span>';
								$('.comments-chat').append(''+chat_comment_response_comment+'');

								$('.comments-chat').append('</div>');
						 }
						 else{
							 if (count_replys>=2) {
							 		$('.comments-chat').append('<div class="show_comments">Ver los demás comentarios</div>');
							 }
							var chat_comment_response_user = '<div class="body_comments_reply"><img src="{% avatar_url rpl.user_reply %}" class="avatar_comment_reply_row" alt="No avatar" /><span class="user_comments_row"> {{ rpl.user_reply }}</span><span class="date_comments"> -{{ rpl.creation_date|date:"j F" }}</span>';
								{% if user.is_authenticated %}
								{% if user.is_staff %}
										$('.comments-chat').append(''+chat_comment_response_user+'<span class="img_delete_comments_row" id="{{rpl.id}}dlt"><img src="{{STATIC_URL}}idegeo/style_adesur/img/delete30.png" title="Eliminar comentario" class="img_delete_comments_gnr_row"/></span>');
										{% else %}
											{% if user.id == rpl.user_reply.id %}
												$('.comments-chat').append(''+chat_comment_response_user+'<span class="img_delete_comments_row" id="{{rpl.id}}dlt"><img src="{{STATIC_URL}}idegeo/style_adesur/img/delete30.png" title="Eliminar comentario" class="img_delete_comments_gnr_row"/></span>');
											{% else %}
												$('.comments-chat').append(''+chat_comment_response_user+'');
											{% endif %}
										{% endif %}
										{% else %}
													$('.comments-chat').append(''+chat_comment_response_user+'<span class="img_delete_comments_row" id="{{rpl.id}}dlt"><img src="{{STATIC_URL}}idegeo/style_adesur/img/delete30.png" title="Eliminar comentario" class="img_delete_comments_gnr_row"/></span>');
									{% endif %}

								var chat_comment_response_comment = '<span class="response_rply">{{ rpl.comments|escape|linebreaks }}</span>';
								$('.comments-chat').append(''+chat_comment_response_comment+'');
								$('.comments-chat').append('</div>');
						 }
							{% endif %}
					{% endfor%}
					 $('.comments-chat').append('</div>');
				{% endif %}
			 {% endfor %}
	}
{% endfor %}

//verificamos que el usuario este regitrado
	 	{% if request.user.is_authenticated == False %}
		//si el usuario no esta reguiostrado en la app, preguntamos si inicio secion con facebook
		FB.getLoginStatus(function(response) {
				  if (response.status === 'connected') {
				    // Logged into your app and Facebook.
						//si el usuario esta reguistrado en la app, procedemos a mostrar el formulario
							statusChangeCallback(response, false);
							$('.form_chat').show();
							$('.enabled_face').show();
							$('.enabled_log').hide();
				  } else {
						$('.enabled_face').hide();
						$('.enabled_log').show();
				    // The person is not logged into this app or we are unable to tell.
						//$('#SigninModal').modal('toggle');
				  }
				});

	    	{% else %}
				//si el usuario esta reguistrado en la app, procedemos a mostrar el formulario
	    		$('.form_chat').show();
	    {% endif %}

	var coordinates = "POINT("+e.latlng.lng+" "+e.latlng.lat+")";

	$('.comments-chat').append('<hr>');
	var id_map = $("input[name='radiomMapa']:checked").attr('data-mapid');
	$("#id_chat_comment").val(e.target.options.options.id_comment);
	if (typeof(id_map) == "undefined") {
		  console.log("es undefined jaja");
			id_map = getCookie("id_map");
			console.log(id_map);
			console.log("id de galleta");
			if (id_map=="") {
				console.log("que sucede si no hay id de galleta???");
			}
	}
	$("#id_map_for_chat").val(id_map);
	$("#location").val(coordinates);
}
	$('#comments-tab').click(function(){
		$(".layerMenu2").css( "width", "390px" );//Change with for the panel
		var mapid = $("input[name='radiomMapa']:checked").attr('data-mapid');
		$('.show_markers').hide();
		$('.hide_markers').show();
		show_markers(mapid);
	});
		$('#layers-tab').click(function(){
			$(".layerMenu2").css( "width", "300px" );//Change with for the panel
		});
		//Este metodo es para crear el marker que selecciona el usuario
map.on('draw:created', function (e) {

    $('#id_chat_comment').val("");
    //abrimos el panel de comentarios
    if($(".layerMenu2" ).hasClass("lm-closed")||$(".layerMenu2" ).hasClass("translateLayerListRight2")){
        $(".layerMenu2").removeClass( "translateLayerListRight2" ).removeClass( "lm-closed" ).addClass( "translateLayerListLeft2" );
        $(".fa-list").removeClass( "fa-list" ).addClass( "fa-caret-right" );
    }
		change_tab(1);//with marameter pass 1 for tab of comments

		//verificamos que el usuario este regitrado
 	{% if request.user.is_authenticated == False %}
	//si el usuario no esta reguiostrado en la app, preguntamos si inicio secion con facebook
	FB.getLoginStatus(function(response) {
			  if (response.status === 'connected') {
			    // Logged into your app and Facebook.
					//si el usuario esta reguistrado en la app, procedemos a poner el punto
		    		getInformation(e);
						doCookie();
						$('.enabled_face').show();
						$('.enabled_log').hide();

			  } else {
			    // The person is not logged into this app or we are unable to tell.
					$('#SigninModalFace').modal('toggle');
					$('.enabled_face').hide();
					$('.enabled_log').show();
			  }
			});

    	{% else %}
			//si el usuario esta reguistrado en la app, procedemos a poner el punto
    		getInformation(e);
				doCookie();
    {% endif %}
    });
});
//hide markers
$('.hide_markers').click(function(){
	$(this).hide();
	change_tab(0);
	hide_markers();
});
function deleteMarkers() {
        $.each(map._layers, function (ml) {
          if (typeof map._layers[ml].options.options != "undefined"){
        		map.removeLayer(this);
            }
        });
    }
function convertToPoint(shape){
	var lat = shape.geometry.coordinates[0];
	var lng = shape.geometry.coordinates[1];
	var coordinates = "POINT("+lat+" "+lng+")";
	return coordinates

}
function close_comments(){
		//Cerramos el panel de comentarios
	 if($( ".layerMenu2" ).hasClass( "translateLayerListLeft2" )){
				$(".layerMenu2").removeClass( "translateLayerListLeft2" ).addClass( "lm-closed" ).addClass( "translateLayerListRight2" );
				$(".fa-list").removeClass( "fa-list" ).addClass( "fa-caret-right" );
				$(".layerMenu2").css( "width", "300px" );//Change with for the panel
		}
}
 function open_comments(){
		//Abrimos el panel de comentarios
	if($( ".layerMenu2" ).hasClass( "translateLayerListRight2" )){
			$(".layerMenu2").removeClass( "translateLayerListRight2" ).removeClass( "lm-closed" ).addClass( "translateLayerListLeft2" );
			$(".fa-list").removeClass( "fa-list" ).addClass( "fa-caret-right" );
			$(".layerMenu2").css( "width", "390px" );//Change with for the panel
	}
}
function removeMarker(chat){
	$.each(map._layers, function (ml) {
		if (typeof map._layers[ml].options.options != "undefined"){
			if (map._layers[ml].options.options.id_comment==chat) {
					map.removeLayer(this);
					$('.chat-main').html("");
					$('.comments-chat').html("");
			}
			}
	});

}
function remove_older_marker(type){
	console.log("remove");
	if (type === 'marker') {
	console.log(arr_markers.length);
	console.log(arr_markers);
			var indice_die = arr_markers.length-2;
			console.log(indice_die);
			var marker_before = arr_markers[indice_die];
			console.log("los matare a todos");
			console.log(marker_before);
			map.removeLayer(marker_before);
	}
}
function removeNewMarker(){
	$.each(map._layers, function (ml) {
		if (typeof map._layers[ml].options != "undefined"){
			console.log(map._layers[ml].options);
			if (typeof map._layers[ml].options.icon != "undefined"){
					map.removeLayer(this);
			}
			}
	});
}
      //get shapes only poligons lat, lng (Not bonundingbox)
var getShapes = function(featureGroup) {
    var shapes = [];
    featureGroup.eachLayer(function(layer) {
        // Note: Rectangle extends Polygon. Polygon extends Polyline.
        // Therefore, all of them are instances of Polyline
        if (layer instanceof L.Polyline) {
             shapes.push(layer.getLatLngs());
        }
    });
    return shapes;
};
// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
  $(".marker-control").click(function(){
     {% if request.user.is_authenticated == False %}
			// code below.
			// This function is called when someone finishes with the Login
		  // Button.  See the onlogin handler attached to it in the sample
		  // code below.
		    FB.getLoginStatus(function(response) {
		      statusChangeCallback(response, true);
		    });
    	{% else %}
    		 MarkerDrawer.enable();
    {% endif %}

  });
//Get the point for once that point the location
function getInformation(e){
	$('.comments-chat').html('');
	$('.chat-main').html('');
	$('.form_chat').show();

	featureGroup.addLayer(e.layer);

	var type = e.layerType;
	layer = e.layer;
	layerShape = layer;
	var shape = layer.toGeoJSON();
	arr_markers.push(layerShape);
	console.log(arr_markers);
	//geometric_shape = JSON.stringify(shape);
	geometric_shape = convertToPoint(shape);
	id_map = $("input[name='radiomMapa']:checked").attr('data-mapid');
	console.log("id de combo");
	console.log(id_map);
	if (typeof(id_map) == "undefined") {
		console.log("es undefined");
			id_map = getCookie("id_map");
			console.log(id_map);
			console.log("id de galleta");
			if (id_map<0) {
				console.log("que sucede si no hay id de galleta???");
			}
	}
	$("#id_map_for_chat").val(id_map);
	$("#location").val(geometric_shape);
	if (type === 'marker') {
			var container = $('<div />');

		// Delegate all event handling for the container itself and its contents to the container
		container.on('click', '.send-chat', function() {
				save_chat(shape);
		});
					{% if request.user.is_authenticated == False %}
						var customPopup ='<a href="#" data-toggle="modal" data-target="#SigninModal" role="button" id="admin-login" class="btn"><i class="fa fa-user" aria-hidden="true"></i> Iniciar seción </a>';
						container.html(customPopup);
						layer.bindPopup(container[0], customOptions);
					{% endif %}
		}

	if (marker_temp_index==0) {
			marker_temp_index = marker_temp_index + 1;
	}else {
			remove_older_marker(type);
	}
}

//user_chat_comment_rply
$('.comments-chat').on("click","span.comment-parentchat", function(e){
 var id_comment_str = $(this).attr('id');
 var id_comment = id_comment_str.replace("modal_response_","");

 {% for c in chats %}
 		{% for child in c.sorted_chats.all|dictsort:"id" %}
				{% if child.parent_chat %}
				var id_c = {{child.id}};
				var id_str = ""+id_c;
						if (id_str==id_comment) {
							var response_to = '<div class="body_comments"><img src="{% avatar_url child.user_chat %}" class="avatar_comment" alt="No avatar" /><span class="user_comments"> {{ child.user_chat }}</span><span class="date_comments"> -{{ c.creation_date|date:"j F" }}</span></div>';
							$('#id_chat_modal').val(id_str);
							$('.user_to_response').html(response_to+'<div class="body_chats_modal">{{ child.comments|escape|linebreaks }}</div>');
							$('#response_to_btn').css("display","block");
						}
				{% endif %}
		{% endfor %}
 {% endfor %}

 {% if request.user.is_authenticated == False %}
 FB.getLoginStatus(function(response) {
	if (response.status === 'connected') {
	// Logged into your app and Facebook.
	console.log("FB");
	$('#response_chat_map_modal').modal('toggle');
 }else {
	console.log("inicia secion");
	$('#SigninModalFace').modal('toggle');
 }
});
		{% else %}
				$('#response_chat_map_modal').modal('toggle');
 {% endif %}

});

$('#response_to_btn').click(function(){
	 var id_comment = $('#id_chat_modal').val();
	 var response = $('#comment-modal').val();
	 var us_f = $("#user_fb").val();
	 if (response=="") {
		 console.log("Ingresa un comentario");
		 return;
	 }
			query_data = {
				 'id_chat': id_comment,
				 'user_fb':us_f,
				 'comment': response
			 }
			 $.ajax({
				 data: {'query_data': JSON.stringify(query_data),
							csrfmiddlewaretoken: '{{ csrf_token }}'
						 },
				 url: '{% url "save_chat_response" %}',
				 type: 'POST',
				 success : function(data) {
					 $('#'+id_comment+'_rply').html('<span class="user_comments_row">'+data[1]+'</span> <span class="img_delete_comments_row" id="'+data[0]+'dlt"><img src="{{STATIC_URL}}style_adesur/img/delete30.png" title="Eliminar comentario" class="img_delete_comments_gnr_row"/></span><div class="response_rply"> '+data[2]+'</div>');
					 $('#response_chat_map_modal').modal('toggle');
				 },
				 error : function(message) {
								 console.log(message);
							}
				 });
});
//Me gusta
$('.container-chat').on("click", "span.like-chat", function(e){
	var id_like_str = $(this).attr('id');
	var count_likes = $(this).attr('data_count_like');
	var like = id_like_str.replace("like_","");
	{% if request.user.is_authenticated == False %}
	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
		// Logged into your app and Facebook.
		console.log("face?");
			save_like(like,count_likes,"count-likes");
	}else {
		console.log("inicia secion");
		$('#SigninModalFace').modal('toggle');
	}
 });
			{% else %}
				console.log("loggin");
				save_like(like,count_likes,"count-likes");
	{% endif %}

});
//like of child
$('.container-chat').on("click", "span.like-chat-child", function(e){
	var id_like_str = $(this).attr('id');
	var count_likes = $(this).attr('data_count_like_child');
	var like = id_like_str.replace("like_child_","");
	{% if request.user.is_authenticated == False %}
	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
		// Logged into your app and Facebook.
			save_like(like,count_likes,"count-likes-child");
	}else {
		console.log("inicia secion");
		$('#SigninModalFace').modal('toggle');
	}
 });
			{% else %}
				save_like(like,count_likes,"count-likes-child");
	{% endif %}

});
var customOptions =
		{
		'className' : 'format-chat',
		'className' : 'comment-chat-main'

		}
function save_like(like, count_likes, count_like){
	var us_f = $("#user_fb").val();
  	 query_data = {
        'id_chat': like,
				'user_fb':us_f
      }
      $.ajax({
        data: {'query_data': JSON.stringify(query_data),
             csrfmiddlewaretoken: '{{ csrf_token }}'
            },
        url: '{% url "save_like_chat" %}',
        type: 'POST',
        success : function(data) {
					var number_like = parseInt(count_likes)
					var sumary_likes = number_like+1;
						$('.'+count_like).html(sumary_likes);
        },
        error : function(message) {
                console.log(message);
             }
        });
}
//Delete replys
$('.comments-chat').on("click", "span.img_delete_comments_row", function(e){
	var id_reply = $(this).attr('id');
	var reply = id_reply.replace("dlt","");
	var us_f = $("#user_fb").val();
	query_data = {
        'id_reply': reply,
				'user_fb':us_f
      }
      $.ajax({
        data: {'query_data': JSON.stringify(query_data),
             csrfmiddlewaretoken: '{{ csrf_token }}'
            },
        url: '{% url "delete_reponse" %}',
        type: 'POST',
        success : function(data) {
					console.log("lo mate");
					console.log('#'+reply+'hide_dlu');
					console.log('#'+reply+'hide_dlc');
					console.log('#'+reply+'dlt');
          $('#'+reply+'hide_dlu').hide();
          $('#'+reply+'hide_dlc').hide();
					$('#'+reply+'dlt').hide();
        },
        error : function(message) {
                console.log(message);
             }
        });
});
//Delete chats responses
$('.comments-chat').on("click", "span.delete_comment_gnr", function(e){
	var id_reply = $(this).attr('id');
	var chat = id_reply.replace("_remove_chat","");
	var us_f = $("#user_fb").val();

	query_data = {
        'id_chat': chat,
				'us_f': us_f
      }
      $.ajax({
        data: {'query_data': JSON.stringify(query_data),
             csrfmiddlewaretoken: '{{ csrf_token }}'
            },
        url: '{% url "delete_chat" %}',
        type: 'POST',
        success : function(data) {
          $('#'+chat+'hide_dlu').hide();
          $('#'+chat+'hide_dlc').hide();
          $('#body_res_'+chat+'').hide();
          $('#'+chat+'_rply').hide();
					$('.form_chat').hide();
        },
        error : function(message) {
                console.log(message);
             }
        });
});
//Delete chats chats
$('.chat-main').on("click", "span.delete_comment_gnr", function(e){
 var id_reply = $(this).attr('id');
 var chat = id_reply.replace("_remove_chat","");
 removeMarker(chat);
 var us_f = $("#user_fb").val();

 query_data = {
 			'id_chat': chat,
 			'us_f': us_f
 		}
		 $.ajax({
			 data: {'query_data': JSON.stringify(query_data),
						csrfmiddlewaretoken: '{{ csrf_token }}'
					 },
			 url: '{% url "delete_chat" %}',
			 type: 'POST',
			 success : function(data) {
				 $('#'+chat+'hide_dlu').hide();
				 $('#'+chat+'hide_dlc').hide();
		 close_comments();
			 },
			 error : function(message) {
							 console.log(message);
						}
			 });
});

function save_chat_response(){
 var data = new FormData($('form').get(0));
 var filename = $('#pick').val();
 var img = filename.replace(/C:\\fakepath\\/i, '');

 var url = $('#url_chat').val();
 var chat = $('#comment_chat').val();
 var id_map = $("input[name='radiomMapa']:checked").attr('data-mapid');
 var id_comment = $('.send-chat-response').attr('id');

	query_data = {
		 'img':img,
		 'url': url,
		 'map': id_map,
		 'chat': chat,
		 'id_comment':id_comment
	 }
	 $.ajax({
		 data: {'query_data': JSON.stringify(query_data),
					csrfmiddlewaretoken: '{{ csrf_token }}'
				 },
		 url: '{% url "save_chat_response" %}',
		 type: 'POST',
		 success : function(data) {
			 console.log(data);
		 },
		 error : function(message) {
						 console.log(message);
					}
		 });

}
function save_chat_reply(){
	var filename = $('#pick').val();
	var img = filename.replace(/C:\\fakepath\\/i, '');

	var url = $('#url_chat').val();
	var chat = $('#comment_chat').val();
	id_comment = $('.send-chat-response').attr('id');

	 query_data = {
			'img':img,
			'url': url,
			'id_comment': id_comment,
			'chat': chat
		}
		$.ajax({
			data: {'query_data': JSON.stringify(query_data),
					 csrfmiddlewaretoken: '{{ csrf_token }}'
					},
			url: '{% url "save_chat_reply" %}',
			type: 'POST',
			success : function(data) {
				console.log(data);
			},
			error : function(message) {
							console.log(message);
					 }
			});
}
//this method is for changing of tab commnets
function change_tab(comment_tab){
	  // tabs elemes
		var select_tab = curent_tab.current;
		if (comment_tab!=select_tab) {
			if (comment_tab==1) {
					$(".layerMenu2").css( "width", "390px" );//Change with for the panel
			}else {
					$(".layerMenu2").css( "width", "300px" );//Change with for the panel
			}
			if( select_tab >= 0 ) {
				curent_tab.tabs[ select_tab ].className = '';
				curent_tab.items[ select_tab ].className = '';
			}
			curent_tab.current = comment_tab;
			console.log("osh");
			curent_tab.tabs.forEach( function( tab, idx ) {
			curent_tab.tabs[ comment_tab ].className = 'tab-current';
			curent_tab.items[ comment_tab ].className = 'content-current';
		} );
		}
		else {
			console.log("no hagas nada");
		}
}
function deleteCookies(){
	setingCookie("bbx","");
	setingCookie("id_map","");
	removeNewMarker();
}
/* click event left panel close comments and remove cookies */
$('.layerListNub').click(function(){
	$('.hide_markers').hide();
	change_tab(0);
	hide_markers();
	deleteCookies();
});
/* click event close right panel */
$('.layerListNub2').click(function(){
	change_tab(0);//Change tab to layer for close the right panel well
});
/* Checkbox change event deleting cookies */
$(".checkbox").change(function() {
		deleteCookies();
});
function setingCookie(label, content){
		//We making a cookie for the embed
		new setCookie(label, content, 3);
	}
</script>
