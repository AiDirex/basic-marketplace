'use strict';

const Composer = require('../helpers/composer.js');

module.exports = function(Regulator) {
  Composer.restrictModelMethods(Regulator);
};
