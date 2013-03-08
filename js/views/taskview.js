define([
  'jquery',
  'underscore',
  'backbone',
  'models/task',
  'collections/tasks',
  'views/taskitemview'
], function ($, _, Backbone, Task, tasks, TaskItemView) {

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
      this.drawAll();
    },

    render: function () {
      return this;
    },

    /**
     * Draw one task.
     */

    drawOne: function (task) {
      var view = new TaskItemView({ model: task });
      view = view.render().el;
      if (task.get('completed')) {
        this.$dones.append(view);
      } else {
        this.$tasks.append(view);
      }
    },

    /**
     * Draw all tasks.
     */

    drawAll: function () {
      this.$tasks.html('');
      this.$dones.html('');
      this.list.get("tasks").each(this.drawOne, this);
    },

    /**
     * Add task on enter key press.
     */

    addTask: function (e) {
      var elm = this.$el.find('#task-title')
        , val = elm.val();

      if (e.which !== 13 || !val.trim()) return;
      var newtask = new Task({title:val});
      tasks.add(newtask);
      this.list.get("tasks").add(newtask);
      newtask.save();
      this.list.save();
      elm.val('');
      this.drawOne(newtask);
    }

  });

  return TaskView;

});