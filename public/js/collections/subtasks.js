define([
  'jquery',
  'underscore',
  'backbone',
  'models/subtask'
], function ($, _, Backbone, SubTask) {

  /**
   * Create new Subtasks collection.
   */

  var SubTasksCollection = Backbone.Collection.extend({

    /**
     * Set model to `SubTask`.
     */

    model: SubTask,

    /**
     * localStorage support.
     */

    localStorage: new Backbone.LocalStorage('SubTasksCollection'),

    /**
     * Get all completed tasks.
     */

    completed: function () {
      return this.filter(function (task) {
        return task.get('completed');
      });
    },

    /**
     * Get all remaning tasks.
     */

    remaning: function () {
      return this.without.apply(this, this.completed());
    },

    /**
     * Get next order number for new items.
     */

    nextOrder: function () {
      if (!this.length) return 1;
      return this.last().get('order') + 1;
    },

    /**
     * Subtasks are sorted by their original insertion order.
     */

    comparator: function (subtask) {
      return subtask.get('order');
    }

  });

  return new SubTasksCollection();

});