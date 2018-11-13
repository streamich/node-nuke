var test = require('tape');
var dropItLikeABomb = require('./lib/index.js').dropItLikeABomb;

test('Running in expected environment', function(t) {
  t.equal(typeof setTimeout, 'function', 'setTimeout should exist');
  t.equal(typeof setInterval, 'function', 'setInterval should exist');
  t.equal(typeof setImmediate, 'function', 'setImmediate should exist');
  t.end();
});

test('Runs without crashing', function(t) {
  dropItLikeABomb();
  t.end();
});

test('Removes timers', function(t) {
  t.equal(typeof setTimeout, 'undefined', 'setTimeout should be nuked');
  t.equal(typeof setInterval, 'undefined', 'setInterval should be nuked');
  t.equal(typeof setImmediate, 'undefined', 'setImmediate should be nuked');
  t.end();
});
