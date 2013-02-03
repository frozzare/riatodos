define([
  'jquery',
  'underscore',
  'backbone',
  'models/list',
  'collections/tasks'
], function ($, _, Backbone, List, Tasks) {

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