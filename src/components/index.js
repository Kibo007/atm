import angular from 'angular';
import ngAria from 'angular-aria';
import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';

import atm from './atm';

export default angular
  .module('app.components', [
    ngAria,
    ngAnimate,
    ngMaterial,
    atm,
  ])
  .name;
