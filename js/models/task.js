define([
  'backbone'
], function (Backbone) {

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