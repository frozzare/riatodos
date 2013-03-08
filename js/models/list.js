define([
  'backbone',
  'collections/tasks',
  'models/task'
], function (Backbone, Tasks, TaskModel) {

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
        key: 'list',
        includeInJSON: 'id'
      }
    }],

    initalize: function () {
      this.fetchRelated('tasks');
    }

  });

  return List;

});

