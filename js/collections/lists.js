define([
  'backbone',
  'models/list'
], function (Backbone, List) {

  /**
   * Create new Lists collection.
   */

  var ListsCollection = Backbone.Collection.extend({

    /**
     * Set model to `List`.
     */

    model: List,

    /**
     * localStorage support.
     */

    localStorage: new Backbone.LocalStorage('ListsCollection'),



  });

  return new ListsCollection();

});