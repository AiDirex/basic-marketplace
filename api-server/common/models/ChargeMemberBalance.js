'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(ChargeMemberBalance) {
  Composer.restrictModelMethods(ChargeMemberBalance);
};
