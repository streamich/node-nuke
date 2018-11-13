var test = require('tape');
var dropItLikeABomb = require('./lib/index.js').dropItLikeABomb;

test('Running in expected environment', function(t) {
  t.equal(typeof setTimeout, 'function', 'setTimeout should exist');
  t.equal(typeof clearTimeout, 'function', 'clearTimeout should exist');
  t.equal(typeof setInterval, 'function', 'setInterval should exist');
  t.equal(typeof clearInterval, 'function', 'clearInterval should exist');
  t.equal(typeof setImmediate, 'function', 'setImmediate should exist');
  t.equal(typeof clearImmediate, 'function', 'clearImmediate should exist');

  t.equal(typeof Buffer, 'function', 'Buffer should exist');
  t.equal(typeof console, 'object', 'console should exist');

  t.end();
});

test('Runs without crashing', function(t) {
  dropItLikeABomb({
    keepGlobal: true,
    keepProcess: true,
  });
  t.end();
});

test('Removes timers', function(t) {
  t.equal(typeof setTimeout, 'undefined', 'setTimeout should be nuked');
  t.equal(typeof clearTimeout, 'undefined', 'clearTimeout should be nuked');
  t.equal(typeof setInterval, 'undefined', 'setInterval should be nuked');
  t.equal(typeof clearInterval, 'undefined', 'clearInterval should be nuked');
  t.equal(typeof setImmediate, 'undefined', 'setImmediate should be nuked');
  t.equal(typeof clearImmediate, 'undefined', 'clearImmediate should be nuked');
  t.end();
});

test('Removes Buffer', function(t) {
  t.equal(typeof Buffer, 'undefined', 'Buffer should be nuked');
  t.end();
});

test('Removes console', function(t) {
  t.equal(typeof console, 'undefined', 'console should be nuked');
  t.end();
});
