require.config({
  
  deps: ['main'],
  
  paths: {
    
    // Vendors
    
    jquery: 'vendor/jquery/dist/jquery',
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