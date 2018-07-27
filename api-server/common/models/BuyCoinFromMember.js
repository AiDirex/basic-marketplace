'use strict';

const Composer = require('../helpers/composer.js');

module.exports = function(BuyCoinFromMember) {
  Composer.restrictModelMethods(BuyCoinFromMember);
};
