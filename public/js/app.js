define(['jquery', 'underscore', 'backbone', 'router'], function ($, _, Backbone, Router) {
  
  /**
   * Declare variables.
   */
  
  var App = {};
  
  /**
   * App initalize
   */
  
  App.initalize = function () {
    var router = new Router();
    Backbone.history.start({ pushState: false });
  };
  
  return App;
});