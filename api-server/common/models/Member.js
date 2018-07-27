'use strict';

const Composer = require('../helpers/composer.js');

module.exports = function(Member) {
  Composer.restrictModelMethods(Member);
};
