import {actionCreators} from './../../actions/keypad';
import './key-pad.css'

function KeyPadController ($scope, $ngRedux) {
  'ngInject';

  let unsubscribe = $ngRedux.connect(state => (state.atm), actionCreators)(this);
  $scope.$on('$destroy', unsubscribe);
  var vm = this;
console.log(vm)
  vm.keyNumbers = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['0']];
  vm.inputField = 10;
  vm.addNumber = (input) => {
    vm.inputField = vm.inputField + input;
  }
}

export default angular
  .module('app.keypad', [])
  .directive('keypad', () => ({
    restrict: 'E',
    template: `

    <div layout="column" layout-padding ng-cloak>
      <md-content class="md-no-momentum">
        <md-input-container class="md-block">
          <label>Withdrow Amount</label>
          <input ng-model="vm.inputField" type="string" step="0.01">
        </md-input-container>
      </md-content>
    </div>


    <div layout="row" layout-align="space-between start" class="Keypad">
      <div class="Keypad-numbers">
        <div layout="row" layout-align="center center" ng-repeat="rows in vm.keyNumbers">
          <ul ng-repeat="keyNumber in rows">
            <li><button class="md-button md-raised" ng-bind="keyNumber" ng-click="vm.addNumber(keyNumber)"></button></li>
          </ul>
        </div>
      </div>
      <ul class="Keypad-functions">
        <li class="md-button md-raised" ng-click="vm.previousState()">Back</li>
        <li class="md-button md-raised" ng-click="vm.abortProcess()">Abort</li>
        <li class="md-button md-raised" ng-click="vm.resetInput()">Reset</li>
        <li class="md-button md-raised" ng-click="vm.confirmInput(vm.inputField)">Confirm</li>
      </ul>
    </div>
    `,
    controller: KeyPadController,
    controllerAs: 'vm'
  }))
  .name;
