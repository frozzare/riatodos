define(['jquery', 'underscore', 'backbone', 'models/subtask'], function ($, _, Backbone, SubTask) {
  
  /**
   * Create new Subtask collection
   */
  
  var SubTaskCollection = Backbone.Collection.extend({
  
    /**
     * Set model to `SubTask`.
     */
  
    model: SubTask
  
    /**
     * localStorage support.
     *
     * @todo: Add localStorage
     */
  
    // localStorage: new Backbone.LocalStorage(''),
  
    /**
     * Get all completed tasks.
     */
    
    completed: function () {
      return this.filter(function (task) {
        return task.get('completed');
      });
    },
    
    /**
     * Get all remaning tasks.
     */
    
    remaning: function () {
      return this.without.apply(this, this.completed());
    }
  
  });

  return SubTaskCollection;

});