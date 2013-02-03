define([
  'jquery',
  'underscore',
  'backbone',
  'models/task',
  'collections/tasks'
], function ($, _, Backbone) {

  var ListView = Backbone.View.extend({

    tagName: 'li',

    // TODO: Move to own template file.
    template: _.template('<a href="#"><%- title %></a><span class="count"><%- tasks.length %></span>'),

    events: {},

    initalize: function () {

    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }

  });

  return ListView;

});