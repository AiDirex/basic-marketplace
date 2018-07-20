'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(BuyCoinFromMember) {
  Composer.restrictModelMethods(BuyCoinFromMember);
};
