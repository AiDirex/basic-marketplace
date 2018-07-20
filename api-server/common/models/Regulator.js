'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(Regulator) {
  Composer.restrictModelMethods(Regulator);
};
