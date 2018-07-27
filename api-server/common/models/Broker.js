'use strict';

const Composer = require('../helpers/composer.js');

module.exports = function(Broker) {
  Composer.restrictModelMethods(Broker);
};
