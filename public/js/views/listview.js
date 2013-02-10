define([
  'jquery',
  'underscore',
  'backbone',
  'models/task',
  'collections/tasks',
  'text!templates/aside-list.html'
], function ($, _, Backbone, TaskModel, Tasks, asideList) {

  var ListView = Backbone.View.extend({

    tagName: 'li',

    template: _.template(asideList),

    /**
     * Events.
     */

    events: {
      'click .delete': 'deleteList'
    },

    /**
     * Initalize list view.
     */

    initalize: function () {
    },

    /**
     * Render list.
     */

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    /**
     * Delete list.
     */

    deleteList: function (e) {
      this.model.destroy();
      this.$(e.target).closest('li').slideUp();
    }

  });

  return ListView;

});