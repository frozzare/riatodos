define([
  'jquery',
  'underscore',
  'backbone',
  'router'
  ],
  function ($, _, Backbone, Router, Task, TaskCollection) {
  
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
  
  window.TaskCollection = TaskCollection;
  window.Task = Task;
  
  return App;
});