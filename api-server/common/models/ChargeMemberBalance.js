'use strict';

const Composer = require('../helpers/composer.js');

module.exports = function(ChargeMemberBalance) {
  Composer.restrictModelMethods(ChargeMemberBalance);
};
