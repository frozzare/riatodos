define([
  'jquery',
  'underscore',
  'backbone',
  'collections/subtasks',
  'models/subtask'
], function ($, _, Backbone, SubTasksCollection, SubTaskModel) {

  /**
   * Initalize Task model
   */

  var Task = Backbone.RelationalModel.extend({

    defaults: {
      title: 'Empty todo..',
      due_date: null,
      created: +new Date,
      created_by: null,
      completed: false
    },

    relations: [{
      type: Backbone.HasMany,
      key: 'subtasks',
      relatedModel: SubTaskModel,
      collectionType: SubTasksCollection,
      reverseRelation: {
        key: 'subtask',
        includeInJSON: 'id'
      }
    }],

    initialize: function () {
      if (!this.get('title')) {
        this.set({
          title: this.defaults().title
        });
      }
    },

    toggle: function () {
      this.save({
        completed: !this.get('completed')
      });
    },

    validate: function (task) {
      var error = "Something when't wrong";
      if (!task.title) error = 'Title is required';
      return error;
    }

  });

  return Task;
});