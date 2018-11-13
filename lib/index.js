function dropItLikeABomb() {
  delete global.setTimeout;
  delete global.setInterval;
  delete global.setImmediate;
}

exports.dropItLikeABomb = dropItLikeABomb;
