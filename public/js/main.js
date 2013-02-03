require.config({

  paths: {

    // Vendors

    // jQuery + plugins
    jquery: 'vendor/jquery/dist/jquery',
    jqueryModal: 'lib/jquery.modal',

    // Underscore + Backbone
    underscore: 'vendor/underscore/underscore',
    backbonePure: 'vendor/backbone/backbone',
    backbone: 'vendor/backbone/backbone.all',
    backboneRelational: 'vendor/backbone/relational',
    backboneLocalStorage: 'vendor/backbone/localstorage',

    // text: 'vendor/requirejs/text'

    // App paths

    router: 'router'
  },

  shim: {
    backbonePure: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    backboneRelational: {
      deps: ['underscore', 'backbonePure']
    },
    backboneLocalStorage: {
      deps: ['underscore', 'backbonePure']
    }
  }
});

require(['app'], function (App) {
  App.initalize();
});