'use strict';

const Composer = require('../helpers/composer.js');

module.exports = function(CoinOffer) {
  Composer.restrictModelMethods(CoinOffer);
};
