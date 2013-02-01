define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
  
  /**
   * Initalize Backbone Router
   */
  
  var Router = Backbone.Router.extend({
    
    routes: {
      '': 'index',
      'lists': 'lists',
      'list/:id': 'list'
    },
    
    index: function () {

    },
  
    lists: function () {

    },
    
    list: function (id) {

    }
  
  });
  
  return Router;
});