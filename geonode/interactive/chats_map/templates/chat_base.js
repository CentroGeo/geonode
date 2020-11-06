<!--/*THIS CLASS IS THE BASE JS FOR CHATS FOR MAPS AND EMBED */-->
<script type="text/javascript">
	L.AwesomeMarkers.Icon.prototype.options.prefix = 'ion';
	var marker_temp_index = 0;
	var arr_markers = [];
	var color_temp_index = 0;
	var arr_colors = [];
	//Metodo para crear una cookie, para ocuparlas  a la hora de hacer un comentario se guarda una cookie llamada bbx que guarda el bounding box de la misma
	function setCookie(cname, cvalue, minute) {
    var d = new Date();
    d.setTime(d.getTime() + (minute*1000*60));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		console.log(cname + "=" + cvalue + ";" + expires + ";path=/");
}
/*This code is for the cookies
*/
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);

    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
						console.log(c.substring(name.length, c.length));
        }
    }
    return "";
}
//este metodo es para verificar si existe una cookie con un extends, si no existe la misma, entonces se pone el extends que trae el mapa normalmente
function checkCookie(data,latlng) {
    var bbx_enbed=getCookie("bbx");//Como parametro le pasamos el nombre de la cookie, en este caso es bbx
    var id_map = getCookie("id_map");

    //verificamos si existe la cookie
    if (bbx_enbed != "") {

        var bbx_arr = bbx_enbed.split(",")//separamos el embed por comas por que lo traemos como un string
        map.fitBounds([
        		[bbx_arr[1], bbx_arr[0]],
        		[bbx_arr[3], bbx_arr[2]]
        ]);
        //map.addLayer(checkboxes[i]);
    } else {
      //Si no existe procedemos a poner el extend que trae el mapa por default
        map.setView(latlng, data.map.zoom);
    }
}
/*This code is for the cookies for embed
*/
function clear(){
  $('.chat-main').html("");
  $('.comments-chat').html("");
  $('.form_chat').hide();
}

//focus to comment
$('.container-chat').on("click", "span.comment-focus", function(e){
	{% if request.user.is_authenticated == False %}
	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
		// Logged into your app and Facebook.
			$(".form_chat").show();
			$("#id_comments").focus();
			$('.enabled_face').show();
			$('.enabled_log').hide();
	}else {
		$('.enabled_face').hide();
		$('.enabled_log').show();
	}
 });
			{% else %}
					$(".form_chat").show();
					$("#id_comments").focus();
	{% endif %}
});
//Show comments
$('.comments-chat').on("click", "div.show_comments", function(e){
  $(".body_comments_reply_hide").show();
  $('.response_rply_hide').show();
});
/* Checkbox change event */
$(".checkbox").change(function() {
  $('.marker-control').show();
  $('.show_markers').show();
  $('.comments-tab').show();
});
function hide_markers(){
	$('.show_markers').show();
	clear();
	deleteMarkers();
	close_comments();
}
/*START WITH facebook*/
// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI(is_creation) {
  var user_face_loging = "";
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    user_face_loging = response.name;
    $("#user_fb").val(user_face_loging);
    //$('.avatar_comment_id').append('usuario: '+response.name+' da');
  });
  FB.api(
  "/me/picture",
  function (response) {
    if (is_creation) {
      MarkerDrawer.enable();
    }
    console.log(response.data.url);
    console.log('Successful login for: ' + user_face_loging);
    if (user_face_loging=="") {
        user_face_loging = "";//To do retrasar este metodo para que haga primero el del nombre
    }
    $('.avatar_comment_id').html('<img src="'+response.data.url+'" class="avatar_comment"/> <span class="user_comments_id">'+user_face_loging+'</span>');
    if (response && !response.error) {
      console.log("what goin on");
    }
  }
);
}
// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response, is_creation) {
console.log(response);
// The response object is returned with a status field that lets the
// app know the current login status of the person.
// Full docs on the response object can be found in the documentation
// for FB.getLoginStatus().
if (response.status === 'connected') {
	// Logged into your app and Facebook.
	testAPI(is_creation);
	$('.enabled_face').show();
	$('.enabled_log').hide();
} else {
	$(".form_chat").hide();//oculata el chat para que nadie comente
	$('#SigninModalFace').modal('toggle');
	$('.enabled_face').hide();
	$('.enabled_log').show();
	// The person is not logged into your app or we are unable to tell.
	console.log('status').innerHTML = 'Please log ' +
		'into this app.';
}
}
/*END WITH facebook*/
</script>
