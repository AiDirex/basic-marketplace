'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(SellCoinToMember) {
  Composer.restrictModelMethods(SellCoinToMember);
};
