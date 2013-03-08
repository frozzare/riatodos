define([
  'jquery',
  'underscore',
  'backbone',
  'collections/lists'
], function ($, _, Backbone, ListsCollection) {

  /**
   * Initalize Backbone Router
   */

  var Router = Backbone.Router.extend({
    routes: {
      'lists': 'lists',
      'list/:id': 'list',
      '*actions': 'defaultAction'
    }
  });

  /**
   *
   *
   */

  var initialize = function () {
    var router = new Router();
    window.ListsCollection = ListsCollection;
    router.on('defaultAction', function (actions) {
      console.log('Route: ', actions);
    });
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});