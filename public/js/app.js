define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'views/appview'
],function ($, _, Backbone, Router, AppView) {

  /**
   * Declare variables.
   */

  var App = {};

  /**
   * App initalize
   */

  App.initalize = function () {
    Router.initialize();
    var appView = new AppView();
  };

  return App;

});