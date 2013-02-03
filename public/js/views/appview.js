define([
  'jquery',
  'jqueryModal',
  'underscore',
  'backbone',
  'collections/lists',
  'views/listview'
], function ($, modal, _, Backbone, Lists, ListView) {

  var AppView = Backbone.View.extend({

    el: 'body',

    events: {
      'click .show-modal': 'showModal',
      'click .hide-modal': 'hideModal',
    },

    /**
     * Initalize app view.
     */

    initialize: function () {
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
      var view = new ListView({ model: list });
      this.$('#lists').append(view.render().el);
    },

    /**
     * Add all lists.
     */

    addAll: function () {
      this.$('#lists').html('');
      Lists.each(this.addOne, this);
    },

    /**
     * Show modal window.
     */

    showModal: function (e) {
      var modal = $(e.target).attr('data-modal');
      $('#modal-' + modal).modal('show');
    },

    /**
     * Hide modal window.
     */

    hideModal: function (e) {
      var modal = $(e.target).attr('data-modal');
      $('#modal-' + modal).modal('hide');
    },
/*
    addNewList: function () {
      $('ul').append('<li><input id="list-name" type="text"></li>');
    },

    addList: function (e) {

      if (e.which !== 13) return;
      Lists.create({ title: $('#list-name').val() });
    }
*/
  });


  return AppView;
});