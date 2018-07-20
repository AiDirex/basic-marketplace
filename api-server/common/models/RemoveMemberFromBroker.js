'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(RemoveMemberFromBroker) {
  Composer.restrictModelMethods(RemoveMemberFromBroker);
};
