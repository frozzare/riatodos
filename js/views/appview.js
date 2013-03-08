define([
  'backbone',
  'collections/lists',
  'views/listitemview',
  'views/listview'
], function (Backbone, Lists, ListItemView, ListView) {

  var AppView = Backbone.View.extend({

    el: 'body',

    events: {
      'click .add-new-list': 'addNewList',
      'keypress #list-name': 'addList',

    },

    /**
     * Initalize app view.
     */

    initialize: function () {
      this.$lists = this.$('#lists');
      this.listenTo(Lists, 'add', this.addOne);
      this.listenTo(Lists, 'reset', this.addAll);
      Lists.fetch();
    },

    /**
     * Render app view.
     */

    render: function () {
    },

    /**
     * Add one list.
     */

    addOne: function (list) {
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

    addAll: function () {
      this.$lists.html('');
      Lists.each(this.addOne, this);
    },

    /**
     * Append new list input.
     */

    addNewList: function () {
      if (this.$lists.find('#list-name').length) return;
      this.$lists.append('<li><input id="list-name" value="New list" type="text"></li>');
    },

    /**
     * Add list on enter key press.
     */

    addList: function (e) {
      var elm = $('#list-name')
        , val = elm.val();

      if (e.which !== 13 || !val.trim()) return;

      Lists.create({ title: val });
      elm.parent().remove();
    }

  });


  return AppView;
});