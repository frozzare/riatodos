define(['jquery', 'underscore', 'backbone', 'collections/subtask'], function ($, _, Backbone, SubTaskCollection) {

  /**
   * Initalize Backbone Router
   */

  var Task = Backbone.Model.extend({
    
    defaults: {
      title: '',
      due_date: null,
      created: +new Date,
      created_by: null,
      subtasks: [],
      notes: [],
      completed: false
    },
    
    initialize: function () {
      this.subtasks = new SubTaskCollection();
      // this.notes = new NoteCollection();
    },
    
    validate: function (task) {
      var error = 'Something when\'t wrong';
      if (!task.title) error = 'Title is required';
      return error;
    }
  
  });

  return Task;
});