function dropItLikeABomb(options) {
  options = options || {};

  for (var key in global) {
    if (global.hasOwnProperty(key)) {
      // Need to keep `global` for tests.
      if (key === 'global' && options.keepGlobal) {
        continue;
      }

      // Need to keep `process` for tests.
      if (key === 'process' && options.keepProcess) {
        continue;
      }

      try {
        delete global[key];
      } catch (error) {}
    }
  }
}

exports.dropItLikeABomb = dropItLikeABomb;
