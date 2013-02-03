define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'views/app'
],function ($, _, Backbone, Router, AppView) {

  /**
   * Declare variables.
   */
  
  var App = {};
  
  /**
   * App initalize
   */
  
  App.initalize = function () {
    var router = new Router()
      , appView = new AppView();

    console.log(appView);
      
    Backbone.history.start({ pushState: false });
  };
  
  return App;
  
});