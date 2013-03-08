define([
  'backbone',
  'collections/lists',
  'views/listitemview',
  'views/listview'
], function (Backbone, lists, ListItemView, ListView) {

  var AppView = Backbone.View.extend({

    el: 'body',

    events: {
      'click .add-new-list': 'addNewListInput',
      'keypress #list-name': 'addNewList',

    },

    /**
     * Initalize app view.
     */

    initialize: function () {
      this.$lists = this.$('#lists');
      this.listenTo(lists, 'add', this.drawOne);
      this.listenTo(lists, 'reset', this.drawAll);
      lists.fetch();
    },

    /**
     * Add one list.
     */

    drawOne: function (list) {
      var self = this
        , view = new ListItemView({ model: list });

      view = view.render();

      this.$lists.append(view.el);

      view.$el.on('click', function (e) {
        var view = new ListView({ list: list });
        self.$el.find('#content').html('').append(view.render().el);
      });
    },

    /**
     * Add all lists.
     */

    drawAll: function () {
      this.$lists.html('');
      lists.each(this.drawOne, this);
    },

    /**
     * Append new list input.
     */

    addNewListInput: function () {
      if (this.$lists.find('#list-name').length) return;
      this.$lists.append('<li><input id="list-name" value="New list" type="text"></li>');
    },

    /**
     * Add list on enter key press.
     */

    addNewList: function (e) {
      var elm = $('#list-name')
        , val = elm.val();

      if (e.which !== 13 || !val.trim()) return;

      lists.create({ title: val });
      elm.parent().remove();
    }

  });


  return AppView;
});