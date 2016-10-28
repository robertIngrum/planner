var Timeline = function(id) {
  this.id = id;
  this.name = null;
  this.start = null;
  this.end = null;
  this.items = { tasks: [], events: [], todo: [] };

  this.load();
  this.show();
};

Timeline.prototype.load = function() {
  this.name = 'Test 1';
  this.start = false;
  this.end = false;
  this.items.todo.push({
    name: 'Awesome thing to do',
    description: 'Do this thing and it has this priority because it\'s a todo.',
    created: 0,
    archived: false,
    start: 0,
    end: false,
    priority: '.7'
  });
};

Timeline.prototype.show = function() {

};