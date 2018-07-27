'use strict';

const Composer = require('../helpers/composer.js');

module.exports = function(RemoveMemberFromBroker) {
  Composer.restrictModelMethods(RemoveMemberFromBroker);
};
