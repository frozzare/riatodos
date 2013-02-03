require.config({
  
  deps: ['main'],
  
  paths: {
    
    // Vendors
    
    // jQuery + plugins
    jquery: 'vendor/jquery/dist/jquery',
    jqueryModal: 'lib/jquery.modal',
    
    // Underscore + Backbone
    underscore: 'vendor/underscore/underscore',
    backboneOld: 'vendor/backbone/backbone',
    backbone: 'vendor/backbone/backbone.all',
    backboneRelational: 'vendor/backbone/relational',
    backboneLocalStorage: 'vendor/backbone/localstorage',
    
    // App paths
    
    router: 'router'
  },
  
  shim: {
    backboneOld: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    backboneRelational: {
      deps: ['underscore', 'backboneOld']
    },
    backboneLocalStorage: {
      deps: ['underscore', 'backboneOld']
    }
  }
});