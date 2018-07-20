'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(CoinOffer) {
  Composer.restrictModelMethods(CoinOffer);
};
