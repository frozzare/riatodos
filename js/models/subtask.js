define([
  'jquery',
  'underscore',
  'backbone',
  'models/task'
], function ($, _, Backbone, TaskModel) {

  /**
   * Initalize Subtask model
   */

  var SubTask = Backbone.RelationalModel.extend({

    defaults: {
      title: '',
      due_date: null,
      created: +new Date,
      created_by: null
    },

    initialize: function () {

    },



  });

  return SubTask;

});