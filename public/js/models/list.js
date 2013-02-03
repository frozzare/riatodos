define([
  'jquery',
  'underscore',
  'backbone',
  'collections/tasks',
  'models/task'
], function ($, _, Backbone, Tasks, TaskModel) {

  /**
   * Initalize List model
   */

  var List = Backbone.RelationalModel.extend({

    defults: {
      title: ''
    },

    relations: [{
      type: Backbone.HasMany,
      key: 'tasks',
      relatedModel: TaskModel,
      collectionType: Tasks.Collection,
      reverseRelation: {
        key: 'task',
        includeInJSON: 'id'
      }
    }],

    initalize: function () {
    }

  });

  return List;

});

