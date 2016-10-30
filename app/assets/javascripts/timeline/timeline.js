var Timeline = function(id) {
  this.id = id;
  this.name = null;
  this.start = 0;
  this.end = 10;
  this.items = { tasks: [], events: [], todos: [] };

  this.timeline_item_container = $('#timeline_items');

  this.current_x_position = 0;

  this.load();
  this.show();
};

Timeline.prototype.load = function() {
  this.name = 'Test 1';
  this.start = 0;
  this.end = 10;
  this.items.todos.push({
    name: 'Important thing to do',
    description: 'Do this thing and it has this priority because it\'s a todo.',
    created: 0,
    archived: false,
    start: 0,
    end: 5,
    priority: '.9'
  });
  this.items.todos.push({
    name: 'Kinda important thing to do',
    description: 'Do this thing and it has this priority because it\'s a todo.',
    created: 0,
    archived: false,
    start: 5,
    end: 9,
    priority: '.5'
  });
  this.items.todos.push({
    name: 'Less important thing to do',
    description: 'Do this thing and it has this priority because it\'s a todo.',
    created: 0,
    archived: false,
    start: 2,
    end: 6,
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
        .css(self.item_css(data));

    self.timeline_item_container.append(todo);
  });
};


Timeline.prototype.item_css = function(data) {
  var css_values = {};
  var timeline_duration = this.end - this.start;

  var item_duration = data.end - data.start;
  var item_percent = (item_duration * 100) / timeline_duration;
  css_values['width'] = item_percent + '%';

  var offset = data.start;
  var offset_percent = (offset * 100) / timeline_duration;
  var adjusted_offset_percent = offset_percent - this.current_x_position
  if (adjusted_offset_percent >= 0) {
    css_values['margin-left'] = adjusted_offset_percent + '%';
  } else {
    css_values['clear'] = 'left';
    css_values['margin-left'] = offset_percent + '%';
  }

  this.update_current_position(item_percent, offset_percent);

  return css_values;
};

Timeline.prototype.update_current_position = function(width, offset) {
  this.current_x_position = width + offset;
  if (this.current_x_position > 100) { this.current_x_position = 0; }
};