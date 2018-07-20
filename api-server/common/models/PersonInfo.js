'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(PersonInfo) {
  Composer.restrictModelMethods(PersonInfo);
};
