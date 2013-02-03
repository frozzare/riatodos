require.config({

  deps: ['main'],

  paths: {

    // Vendors

    // jQuery + plugins
    jquery: 'vendor/jquery/dist/jquery',
    jqueryModal: 'lib/jquery.modal',

    // Underscore + Backbone
    underscore: 'vendor/underscore/underscore',
    backbonePure: 'vendor/backbone/backbone',
    backbone: 'vendor/backbone/backbone.all',
    backboneRel: 'vendor/backbone/rel',
    backboneLocalStorage: 'vendor/backbone/localstorage',

    // App paths

    router: 'router'
  },

  shim: {
    backboneOld: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    backboneRel: {
      deps: ['underscore', 'backbonePure']
    },
    backboneLocalStorage: {
      deps: ['underscore', 'backbonePure']
    }
  }
});