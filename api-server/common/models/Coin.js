'use strict';

const Composer = require('../helpers/composer.js');

module.exports = function(Coin) {
  Composer.restrictModelMethods(Coin);
};
