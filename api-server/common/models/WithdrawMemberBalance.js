'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(WithdrawMemberBalance) {
  Composer.restrictModelMethods(WithdrawMemberBalance);
};
