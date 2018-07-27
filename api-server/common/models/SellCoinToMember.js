'use strict';

const Composer = require('../helpers/composer.js');

module.exports = function(SellCoinToMember) {
  Composer.restrictModelMethods(SellCoinToMember);
};
