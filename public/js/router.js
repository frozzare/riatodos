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
      $(document.body).html('index');
    },
  
    lists: function () {
      $(document.body).html('lists');
    },
    
    list: function (id) {
      $(document.body).html('list ' + id);
    }
  
  });
  
  
  return Router;
});