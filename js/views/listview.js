define([
  'jquery',
  'underscore',
  'backbone',
  'collections/lists',
  'text!templates/aside-list.html',
  'views/taskview'
], function ($, _, Backbone, Lists, asideList, TaskView) {

  var ListView = Backbone.View.extend({

    tagName: 'li',

    template: _.template(asideList),

    /**
     * Events.
     */

    events: {
      'click .delete': 'deleteList',
      'click': 'showTasks'
    },

    /**
     * Initalize list view.
     */

    initialize: function () {
      var self = this;
      this.$tasks = $('#tasks ul.tasks');
      this.$dones = $('#tasks ul.dones');
      this.tasks = this.model.get('tasks');
      this.listenTo(this.tasks, 'add', this.addOne);
      this.listenTo(this.tasks, 'reset', this.addAll);
      $('#task-title').on('keypress', function (e) {
        return self.addTask.call(self, e);
      });
      $('#task-title').attr('placeholder', 'Add new task to "' + this.model.get('title') + '"');
    },

    /**
     * Render list.
     */

    render: function () {
      // BUG SHIT!
      //this.model.get('tasks').fetchRelated();
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    /**
     * Delete list.
     */

    deleteList: function (e) {
      this.model.destroy();
      this.$(e.target).closest('li').slideUp();
    },

    /**
     * Add one task.
     */

    addOne: function (task) {
      var view = new TaskView({ model: task });
      view = view.render().el;
      if (task.get('completed')) {
        this.$dones.append(view);
      } else {
        this.$tasks.append(view);
      }
    },

    /**
     * Add all tasks.
     */

    addAll: function () {
      this.$tasks.html('');
      this.tasks.each(this.addOne, this);
    },

    /**
     * Add task on enter key press.
     */

    addTask: function (e) {
      var elm = $('#task-title')
        , val = elm.val();

      if (e.which !== 13 || !val.trim()) return;

      this.tasks.create({ title: val });
      elm.val('');
    },

    /**
     * Show tasks.
     */

    showTasks: function (e) {
      $('#tasks').show();
      window.t = this.tasks;
      this.tasks.fetch();
    }

  });

  return ListView;

});