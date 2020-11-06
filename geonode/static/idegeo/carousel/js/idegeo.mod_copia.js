<!--SCRIPT-TO-FILE-[SCP01][ADD-MOD]-->

// using jQuery
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');
function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
function sameOrigin(url) {
    // test that a given url is a same-origin URL
    // url could be relative or scheme relative or absolute
    var host = document.location.host; // host + port
    var protocol = document.location.protocol;
    var sr_origin = '//' + host;
    var origin = protocol + sr_origin;
    // Allow absolute or scheme relative URLs to same origin
    return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
        (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
        // or any other URL that isn't scheme relative or absolute i.e relative.
        !(/^(\/\/|http:|https:).*/.test(url));
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
            // Send the token to same-origin, relative URLs only.
            // Send the token only if the method warrants CSRF protection
            // Using the CSRFToken value acquired earlier
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

<!--SCRIPT-TO-FILE-[SCP02][ADD-MOD]-->

    FEATURED_URL = '/api/featured/'
    'use strict';
    (function(){
      var module = angular.module('featured', []);
      module.run(function($http, $rootScope){
        $http.get(FEATURED_URL).success(function(data){
          $rootScope.featured = data.objects;
        });
      });
    })();

<!--SCRIPT-TO-FILE-[SCP03][ADD-MOD]-->

  function permissionsString(form, type) {
    var permissions = {
      'users': {},
      'groups': {}
    }
    if (typeof form === 'string'){
      form = $(form);
    }
    var data = form.serializeObject();   

    /*
    * If there's the anonymous user then set it's view permission and pop it
    */
    permissions['users']['AnonymousUser'] = [];
    if (data.hasOwnProperty('view_anonymous')) {
      permissions['users']['AnonymousUser'] = ['view_resourcebase'];
      delete data['view_anonymous'];
    }
    if (data.hasOwnProperty('download_anonymous')) {
      if (permissions['users']['AnonymousUser'] != undefined){
        permissions['users']['AnonymousUser'].push('download_resourcebase');
      } else {
        permissions['users']['AnonymousUser'] = ['download_resourcebase'];
      };
      delete data['download_anonymous'];
    }

    /*
    * Cycle through permissions to map the form structure perm = ['user1',',user2'] to
    * the geonode user = ['perm1','perm2'], the same for groups
    */
    
    for(var perm in data){
      if(data[perm][0] !== ''){
        var perms_to_assign = [perm];
        if(perm=='manage_resourcebase'){
          perms_to_assign = ['change_resourcebase', 'delete_resourcebase', 'change_resourcebase_permissions', 'publish_resourcebase'];
        }
        for (var i=0;i<data[perm][0].split(',').length;i++){
          var user = data[perm][0].split(',')[i];
          for(var j=0;j< perms_to_assign.length;j++){
            if(permissions['users'].hasOwnProperty(user)){
              permissions['users'][user].push(perms_to_assign[j]);
            }else{
              permissions['users'][user] = [perms_to_assign[j]];
            }
          }
        }
      }
      if(data[perm][1] !== ''){
        var perms_to_assign = [perm];
        if(perm=='manage_resourcebase'){
          perms_to_assign = ['change_resourcebase', 'delete_resourcebase', 'change_resourcebase_permissions', 'publish_resourcebase'];
        }
        for (var i=0;i<data[perm][1].split(',').length;i++){
          var group = data[perm][1].split(',')[i];
          for(var j=0;j< perms_to_assign.length;j++){
            if(permissions['groups'].hasOwnProperty(group)){
              permissions['groups'][group].push(perms_to_assign[j]);
            }else{
              permissions['groups'][group] = [perms_to_assign[j]];
            }
          }
        }
      }
    }
    return permissions
  };

  $(function() {

    $('#permissions-body').ready(function(){
      
      addSelectUsers();
      addSelectGroups();
      
    });
    
    function addSelectUsers(){
      $("input.user-select").select2({
        placeholder: 'Escoger usuarios...',
        minimumInputLength: 1,
        multiple: true,
        width: 'copy',
        ajax: {
          url: "/account/ajax_lookup",
          dataType: "json",
          type: "POST",
          data: function (term, page) {
            return {
              query: term,
            };
          },
          results: function (data, page) {
            return {results: data.users};
          }
        },
        id: userID,
        formatResult: userFormatResult,
        formatSelection: userFormatSelection,
        initSelection: function(element, callback) {
          var data = [];
          var val = element.val().split(",");
          $(element.val().split(",")).each(function (index,value) {
              data.push({username: value});
          });
          callback(data);
        }
      });
    }

    function addSelectGroups(){
      $("input.group-select").select2({
        placeholder: 'Escoger grupos...',
        minimumInputLength: 1,
        multiple: true,
        width: 'copy',
        ajax: {
          url: "/account/ajax_lookup",
          dataType: "json",
          type: "POST",
          data: function (term, page) {
            return {
              query: term,
            };
          },
          results: function (data, page) {
            return {results: data.groups};
          }
        },
        id: groupID,
        formatResult: groupFormatResult,
        formatSelection: groupFormatSelection,
        initSelection: function(element, callback) {
          var data = [];
          var val = element.val().split(",");
          $(element.val().split(",")).each(function (index,value) {
              data.push({name: value});
          });
          callback(data);
        }
      });
    }
    
    function userID(user) {
      return user.username;
    }

    function groupID(group) {
      return group.name;
    }

    function userFormatResult(user) {
      return user.username;
    }

    function userFormatSelection(user) {
        return user.username;
    }

    function groupFormatResult(group) {
      return group.title;
    }

    function groupFormatSelection(group) {
        return group.name;
    }


    var perms_submit = function() {
      var form = $(this);
      var action = form.attr("action");

      var permissions = permissionsString(form, 'base');
      $.ajax(
        {
          type: "POST",
          url: action,
          data: JSON.stringify(permissions),
          success: function(data) {
            $("#modal_perms").modal("hide");
          }
        }
      );
      return false;
    };

    $("#perms_submit").click(function(){
        $("#permission_form").submit();
    });
    var bulk_perms_submit = function(){
       var permissions = permissionsString($('#permission_form'), 'base');
       var selected_ids = $.map($('.resource_selected'), function(elem){return $(elem).attr('resource_id')});
       var message = $('#bulk_perms_message');
       if(selected_ids.length == 0){
        message.find('.message').html('Please select at least one resource to set the permissions');
        message.addClass('alert-danger').removeClass('alert-success alert-warning hidden');
        return;
       }
       $.ajax(
        {
          type: "POST",
          url: "/security/bulk-permissions",
          data: {
            permissions: JSON.stringify(permissions),
            resources: selected_ids
          },
          success: function(data) {
            var not_changed = $.parseJSON(data).not_changed;
            if (not_changed.length > 0){ 
              message.find('.message').html('Permissions correctly registered, although the following resources were'+ 
                  ' skipped because you don\'t have the rights to edit their permissions:');
              message.find('.extra_content').html(not_changed.join('</br>'));
              message.addClass('alert-warning').removeClass('alert-success alert-danger hidden');
            }
            else{
              message.find('.message').html('Permissions correctly registered.');
              message.addClass('alert-success').removeClass('alert-warning alert-danger hidden');
            }
          },
          error: function(data){
            message.find('.message').html($.parseJSON(data).error);
            message.addClass('alert-danger').removeClass('alert-success alert-warning hidden');
          }
        }
      );
    };

    $("#bulk_perms_submit").click(function(e){
        e.preventDefault();
        bulk_perms_submit();
    });

    $("#_bulk_permissions").on('hidden.bs.modal', function (e) {
      $('#bulk_perms_message').addClass("hidden");
    });
  });

<!--SCRIPT-TO-FILE-[SCP04][ADD-MOD]-->

SEARCH_URL = '/api/layers/';
FILTER_TYPE = 'layer';

<!--SCRIPT-TO-FILE-[SCP05][ADD-MOD]-->

L.Control.ResetView.TITLE = "Reset view";
L.Control.ResetView.ICON = "url(/static/leaflet/images/reset-view.png)";

<!--SCRIPT-TO-FILE-[SCP06][ADD-MOD]-->

  $("body").attr('ng-controller', 'geonode_search_controller');
  CATEGORIES_ENDPOINT = '/api/categories/';
  KEYWORDS_ENDPOINT = '/api/keywords/';
  REGIONS_ENDPOINT = '/api/regions/';
  HAYSTACK_SEARCH = "False".toLowerCase() === "true";
  HAYSTACK_FACET_COUNTS = "False".toLowerCase() === "true";
  CLIENT_RESULTS_LIMIT = 100;
  AUTOCOMPLETE_URL_RESOURCEBASE = '/autocomplete/ResourceBaseAutocomplete/';
  AUTOCOMPLETE_URL_REGION = '/autocomplete/RegionAutocomplete/';

  var module = angular.module('search', ['geonode_main_search']);
  module.constant('Configs', {
    url: SEARCH_URL
  });

  var deps = ['search'];
  
  deps.push('leaflet-directive');
  
  angular.bootstrap(document, deps);

<!--SCRIPT-TO-FILE-[SCP07][ADD-MOD]-->

        var autocomplete = $('#search_input').yourlabsAutocomplete({
            url: '/autocomplete/ResourceBaseAutocomplete/',
            choiceSelector: 'span',
            hideAfter: 200,
            minimumCharacters: 1,
            placeholder: 'Escriba aquí su busqueda  ...',
            appendAutocomplete: $('#search_input')
        });
        $('#search_input').bind('selectChoice', function(e, choice, autocomplete) {
            if(choice[0].children[0] == undefined) {
                $('#search_input').val(choice[0].innerHTML);
                $('#search').submit();
            }
        });

<!--SCRIPT-TO-FILE-[SCP08][ADD-MOD]-->

// Workaround to fix the autocomplete box positions
yourlabs.Autocomplete.prototype.fixPosition = function(html) {
	this.input.parents().filter(function() {
		return $(this).css('overflow') === 'hidden';
	}).first().css('overflow', 'visible');
	if(this.input.attr('name') !== 'resource-keywords'){
		this.box.insertAfter(this.input).css({top: 30, left: 0});
	}else{
		var pos = $.extend({}, this.input.position(), {
		height: this.input.outerHeight()
	});
	this.box.insertAfter(this.input).css({top: pos.top + pos.height, left: pos.left});
	}
};

