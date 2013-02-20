define([
  'jquery',
  'underscore',
  'backbone',
  'models/listtask',
  'collections/tasks',
  'collections/subtasks',
  'models/subtask'
], function ($, _, Backbone, ListTaskModel, Tasks, SubTasksCollection, SubTaskModel) {

  /**
   * Initalize Task model
   */

  var Task = Backbone.RelationalModel.extend({

    defaults: {
      title: 'Empty todo..',
      due_date: null,
      created: +new Date,
      created_by: null,
      completed: false,
      star: false
    },
/*
    relations: [{
      type: Backbone.HasMany,
      key: 'lists',
      relatedModel: ListTaskModel,
      reverseRelation: {
        key: 'list'
      }
    }],
*/
    initialize: function () {

    },

    toggle: function () {
      this.save({
        completed: !this.get('completed')
      });
    },

    toggleStar: function () {
      this.save({
        star: !this.get('star')
      });
    },

    validate: function (task) {

    }

  });

  return Task;
});