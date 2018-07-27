'use strict';

const Composer = require('../helpers/composer.js');

module.exports = function(WithdrawMemberBalance) {
  Composer.restrictModelMethods(WithdrawMemberBalance);
};
