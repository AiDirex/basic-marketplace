'use strict';

const Composer = require('../helpers/composer.js');

module.exports = function(RegisterMemberToBroker) {
  Composer.restrictModelMethods(RegisterMemberToBroker);
};
