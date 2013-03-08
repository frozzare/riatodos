require.config({

  paths: {

    // Vendors

    // jQuery
    jquery: 'vendor/jquery/dist/jquery',

    // Underscore + Backbone
    underscore: 'vendor/underscore/underscore',
    backbonePure: 'vendor/backbone/backbone',
    backbone: 'vendor/backbone/backbone.all',
    backboneRelational: 'vendor/backbone/relational',
    backboneLocalStorage: 'vendor/backbone/localStorage',

    text: 'vendor/requirejs/text',

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

require(['views/appview'], function (AppView) {
  new AppView();
});