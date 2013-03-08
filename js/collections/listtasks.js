define([
  'jquery',
  'underscore',
  'backbone',
  'models/listtask'
], function ($, _, Backbone, ListTask) {

  /**
   * Create new Tasks collection.
   */

  var ListTasksCollection = Backbone.Collection.extend({

    /**
     * Set model to `Task`.
     */

    model: ListTask,

    /**
     * localStorage support.
     */

    localStorage: new Backbone.LocalStorage('TasksCollection'),

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
     * Tasks are sorted by their original insertion order.
     */

    comparator: function (task) {
      return task.get('order');
    }

  });

  // Need the Collection reference for Backbone Relational
  ListTasksCollection.prototype.Collection = ListTasksCollection;

  return new ListTasksCollection();
});