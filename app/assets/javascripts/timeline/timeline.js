var Timeline = function(id) {
  this.id = id;
  this.name = null;
  this.start = null;
  this.end = null;
  this.items = { tasks: [], events: [], todos: [] };

  this.timeline_item_container = $('#timeline_items');

  this.load();
  this.show();
};

Timeline.prototype.load = function() {
  this.name = 'Test 1';
  this.start = false;
  this.end = false;
  this.items.todos.push({
    name: 'Awesome thing to do',
    description: 'Do this thing and it has this priority because it\'s a todo.',
    created: 0,
    archived: false,
    start: 0,
    end: false,
    priority: '.0'
  });
  this.items.todos.push({
    name: 'Awesome thing to do number 2',
    description: 'Do this thing and it has this priority because it\'s a todo.',
    created: 0,
    archived: false,
    start: 0,
    end: false,
    priority: '.0'
  });
};

Timeline.prototype.show = function() {
  this.show_tasks();
  this.show_events();
  this.show_todos();
};

Timeline.prototype.show_tasks = function() {
  $.each(this.items.tasks, function(key, val) {});
};

Timeline.prototype.show_events = function() {
  $.each(this.items.events, function(key, val) {});
};

Timeline.prototype.show_todos = function() {
  var self = this;

  $.each(this.items.todos, function(_, data) {
    var todo = $('<div>')
        .html(data.name)
        .addClass('todo')
        .attr('data-priority', data.priority)
        .css({
          width: '500px'
        });

    self.timeline_item_container.append(todo);
  });
};
