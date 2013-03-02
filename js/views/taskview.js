define([
  'jquery',
  'underscore',
  'backbone',
  'models/task',
  'collections/tasks',
  'views/taskitemview'
], function ($, _, Backbone, Task, Tasks, TaskItemView) {

  var TaskView = Backbone.View.extend({

    id: 'tasks',

    tagName: 'div',

    events: {},

    initialize: function (attr) {
      var self = this;
      this.list = attr.list;
      this.$el.html('<ul><li><input type="text" id="task-title"></li></ul><ul class="tasks"></ul><h3>Done</h3><ul class="dones"></ul>');
      this.$el.find('#task-title').attr('placeholder', 'Add new task to "' + this.list.get('title') + '"');
      this.$tasks = this.$el.find('ul.tasks');
      this.$dones = this.$el.find('ul.dones');
      this.$el.on('keypress', '#task-title', function (e) {
        return self.addTask.call(self, e);
      });
      this.tasks = this.list.get('tasks');
      this.listenTo(this.tasks, 'add', this.addOne);
      this.listenTo(this.tasks, 'reset', this.addAll);
      this.tasks.fetch();
    },

    render: function () {
      return this;
    },

    /**
     * Add one task.
     */

    addOne: function (task) {
      var view = new TaskItemView({ model: task });
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
      this.$dones.html('');
      this.tasks.each(this.addOne, this);
    },

    /**
     * Add task on enter key press.
     */

    addTask: function (e) {
      var elm = this.$el.find('#task-title')
        , val = elm.val();

      if (e.which !== 13 || !val.trim()) return;

      this.tasks.create({ title: val });
      elm.val('');
    }

  });

  return TaskView;

});