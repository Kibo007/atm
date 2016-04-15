import angular from 'angular';
import atmTemplate from './atm.tmpl'
//import {increment, decrement, previousState} from './../actions/atm';
//import { insertCard, ejectCard } from './../actions/atm-card';
import {actionCreator} from './../actions/atm';

function ATMController ($scope, $ngRedux) {
  'ngInject';

  let unsubscribe = $ngRedux.connect(state => (state.atm), actionCreator)(this);
  $scope.$on('$destroy', unsubscribe);

  var vm = this;
}

export default angular
  .module('app.atm', [])
  .directive('atm', () => ({
    restrict: 'E',
    template: atmTemplate,
    controller: ATMController,
    controllerAs: 'vm'
  }))
  .name;
