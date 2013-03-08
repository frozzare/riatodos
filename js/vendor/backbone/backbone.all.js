define([
  'backbonePure',
  'backboneRelational',
  'backboneLocalStorage'
], function(_Backbone) {
  return Backbone.noConflict() && _Backbone;
});