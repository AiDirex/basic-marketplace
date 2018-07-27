'use strict';

const Composer = require('../helpers/composer.js');

module.exports = function(PersonInfo) {
  Composer.restrictModelMethods(PersonInfo);
};
