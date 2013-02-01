define(['jquery', 'underscore', 'backbone', 'collections/subtask'], function ($, _, Backbone, SubTaskCollection) {

  /**
   * Initalize Subtask model
   */

  var SubTask = Backbone.Model.extend({

    defaults: {
      title: '',
      due_date: null,
      created: +new Date,
      created_by: null
    },

    initialize: function () {
    
    }

  });

  return SubTask;
  
});