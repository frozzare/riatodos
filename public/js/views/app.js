define([
  'jquery',
  'jqueryModal',
  'underscore',
  'backbone'
], function ($, modal, _, Backbone) {

  var AppView = Backbone.View.extend({
    
    el: 'body',
    
    events: {
      'click .show-modal': 'showModal',
      'click .hide-modal': 'hideModal'
    },
    
    initialize: function () {},
    
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
    }
    
  });


  return AppView;
});