import angular from 'angular';
import ngAria from 'angular-aria';
import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css'
import './atm.css'

import atmTemplate from './atm.tmpl'
//import {increment, decrement, previousState} from './../actions/atm';
//import { insertCard, ejectCard } from './../actions/atm-card';
import {actionCreator} from './../actions/atm';
import keypad from './keypad/key-pad';

function ATMController ($scope, $ngRedux) {
  'ngInject';

  let unsubscribe = $ngRedux.connect(state => (state.atm), actionCreator)(this);
  $scope.$on('$destroy', unsubscribe);

  var vm = this;
}

export default angular
  .module('app.atm', [
    ngAria,
    ngAnimate,
    ngMaterial,
    keypad
  ])
  .directive('atm', () => ({
    restrict: 'E',
    //template: atmTemplate,
    template: `
    <keypad></keypad>
    `,
    controller: ATMController,
    controllerAs: 'vm'
  }))
  .name;
