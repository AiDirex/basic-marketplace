'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(RegisterMemberToBroker) {
  Composer.restrictModelMethods(RegisterMemberToBroker);
};
