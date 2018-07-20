'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(Broker) {
  Composer.restrictModelMethods(Broker);
};
