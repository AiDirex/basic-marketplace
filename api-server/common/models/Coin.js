'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(Coin) {
  Composer.restrictModelMethods(Coin);
};
