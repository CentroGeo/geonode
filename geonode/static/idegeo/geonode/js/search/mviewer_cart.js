'use strict';

(function(){
  angular.module('cart', ['ngCookies'])
    .filter('title', function(){
      return function(value){
        return value.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      };
    })
    .filter('default_if_blank', function(){
      return function(value, arg){
        return angular.isString(value) && value.length > 0 ? value : arg;
      };
    })
    .controller('CartList1', function($scope, cart){
      $scope.cart = cart;
      $scope.layers_params = '';
  
      $scope.addTopicLayers = function(){
        var items = cart.getCart().items;
        var id_list = [];
        for(var i=0; i<items.length; i++){
          id_list.push(items[i].id);
        }

        var add_data = {
            'id_list': id_list,
            'topic_id': topic_id
        };
        $.ajax({
            data: {'add_data': JSON.stringify(add_data)},
            url: '/mviewer/add_topic_layers/',
            type: 'POST',
            success : function(result) {
              $.each(result, function(k, v) {
                $.each(items, function(key, val) {
                     if(v['layer_id'] == val.id) {
                         var sty_select = '';
                         if (v['styles'].length>0) {
                            var sty_opt= '<option value="'+v.style+'">'+v.style+'</option>';
                            $.each(v['styles'], function(k_sty, v_sty) {
                                var opt = '<option value="'+v_sty+'">'+v_sty+'</option>';
                                sty_opt += opt;
                            });
                            sty_select = '<select class="select-style" name="'+v.name+'">'+sty_opt+'</select>'
                         }
                         var layer_id = v['reg_id']
                         var html = '<div id="t'+topic_id+'l'+val.id+'r'+v['st_order']+'" data-regid="'+v['reg_id']+'">'
                                     + '<span><i class="fa fa-square-o" title="Visible" aria-hidden="true" '
                                     + 'data-regid="'+v['reg_id']+'"></i></span><span><a href="/toolkit/upload_confLayer/'+ms+'/'+layer_id+'" target="_self">  <i class="fa fa-wrench"  title="Ligar herramienta" aria-hidden="true"'
                                     + 'data-regid="'+v['reg_id']+'"></i></a></span><span><a href="/mviewer/edit_layer_narrative/'+ms+'/'+layer_id+'" target="_self">  <i class="fa fa-file-text-o" title="Agregar Descripción" aria-hidden="true"'
                                     + 'data-regid="'+v['reg_id']+'"></i></a></span><span><a href="/mviewer/add_layer_markers/'+ms+'/'+layer_id+'" target="_self">  <i class="fa fa-map-marker" title="Agregar Marcadores" aria-hidden="true"'
                                     + 'data-regid="'+v['reg_id']+'"></i></a></span><span>  <i class="fa fa-trash" title="Eliminar Capa" aria-hidden="true"'
                                     + '" data-regid="'+v['reg_id']+'"></i></span>  <label>'
                                     + val.title+' </label>'+sty_select+'<br></div>';
                         $('#tlayers-'+topic_id).append(html);
                    }
                });
              });

              for(var i=0; i=items.length; i++){
                angular.element(document.querySelector(".togg")).triggerHandler('click');
              };

              $('#add-topic-layer').modal('toggle');
            },
            error : function(xhr,errmsg,err) {
              console.log('Error en el servidor')
              console.log(xhr.status + ": " + xhr.responseText);
            }
        });

      }
    })

    .directive('resourceCart', ['$sce', function($sce){
      return {
        restrict: 'EA',
        templateUrl: $sce.trustAsResourceUrl(staticUrl + "geonode/js/templates/cart1.html"),
        link: function($scope, $element){
          // Don't use isolateScope, but add to parent scope
          $scope.facetType = $element.attr("data-facet-type");
        }
      };
    }])

    .service('cart', function($cookies){
      
      this.init = function(){
        this.$cart = {
          items: this.fillCart()
        };
      };

      this.fillCart = function(){
        // This will fail if angular<1.4.0
        try {
          var geonodeCart = $cookies.getAll();
        } catch(err) {
          var geonodeCart = null;
        }
        var cartSession = [];
        if (geonodeCart !== null) {
          if(Object.keys(geonodeCart).length > 1) {
            Object.keys(geonodeCart).forEach(function(key,index) {
              if(key !== 'csrftoken') {
                try {
                  var obj = JSON.parse(geonodeCart[key]);
                  if (!Number.isInteger(obj)) {
                    obj.$$hashKey = "object:" + index;
                    if ('alternate' in obj) {
                      cartSession.push(obj);
                    }
                  }
                } catch(err) {
                  // console.log("Cart Session Issue: " + err.message);
                }
              }
            });
          }
        }
        return cartSession;
      };

      this.getCart = function(){
        return this.$cart;
      }

      this.addItem = function(item){
        if(!item.id && item.layer_identifier){
          item.id = item.layer_identifier;
        }

        if(this.getItemById(item.id) === null){
          this.getCart().items.push(item);
          var cookie_item={};
          cookie_item['id'] = item.id
          cookie_item['detail_url'] = item.detail_url
          $cookies.putObject(item['uuid'], cookie_item);
        }
      }

      this.removeItem = function(item){
        if(this.getItemById(item.id) !== null){
          var cart = this.getCart();
          angular.forEach(cart.items, function(cart_item, index){
            if(cart_item.id === item.id){
              cart.items.splice(index, 1);
              $cookies.remove(cart_item['uuid']);
            }
          });
        }
      }

      this.toggleItem = function(item){
        if(this.getItemById(item.id) === null){
          this.addItem(item);
        }else{
          this.removeItem(item);
        }
      }

      this.getItemById = function (itemId) {
        var items = this.getCart().items;
        var the_item = null;
        angular.forEach(items, function(item){
          if(item.id === itemId){
            the_item = item;
          }
        });
        return the_item;
      }

      this.getFaClass = function(id){
        if(this.getItemById(id) === null){
          return 'fa-plus-circle';
        }else{
          return 'fa-remove'
        }
      }
    })

    .run(['cart', function(cart){
      cart.init();
    }])
})();