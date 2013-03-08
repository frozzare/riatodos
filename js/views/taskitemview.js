define([
  'jquery',
  'underscore',
  'backbone',
  'models/task',
  'text!templates/task-item.html'
], function ($, _, Backbone, Task, taskTemplate) {

  var TaskItemView = Backbone.View.extend({

    tagName: 'li',

    template: _.template(taskTemplate),

    events: {
      'change input[type="checkbox"]': 'toggleDone',
      'click .star a': 'toggleStar'
    },

    initalize: function () {
    },

    render: function () {
      if (this.model.get('completed')) {
        this.$el.addClass('completed');
      }
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    toggleDone: function () {
      this.model.toggle();
      this.$el.toggleClass('completed');
      if (this.model.get('completed')) {
        this.model.save({ star: false });
        this.$el.find('span.star').addClass('hide');
      } else {
        this.$el.find('span.star').removeClass('hide');
      }
      $(this.model.get('completed') ? '.dones' : '.tasks').append(this.$el);
    },

    toggleStar: function () {
      this.model.toggleStar();
      this.$el.find('.star').toggleClass('yellow');
      $('.tasks')[this.model.get('star') ? 'prepend' : 'append'](this.$el);
      this.model.save();
    }

  });

  return TaskItemView;

});