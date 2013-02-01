define(['jquery', 'underscore', 'backbone', 'models/task'], function ($, _, Backbone, Task) {

  /**
   * Create new Task collection.
   */

  var TaskCollection = Backbone.Collection.extend({

    /**
     * Set model to `Task`.
     */

    model: Task

    /**
     * localStorage support.
     *
     * @todo: Add localStorage support.
     */

    // localStorage: new Backbone.LocalStorage(''),

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
    }

  });

  return TaskCollection;

});