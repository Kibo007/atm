// import actions
import {actionCreators} from './../../actions/keypad';
// import css
import './key-pad.css'

function KeyPadController ($scope, $ngRedux) {
  'ngInject';

  // this component use several properties from store so is more convenient to make it smart component
  // and connect to redux store
  let unsubscribe = $ngRedux.connect(state => (state.atm), actionCreators)(this);
  $scope.$on('$destroy', unsubscribe);

  var vm = this;
  vm.keyNumbers = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['0']];

}

export default angular
  .module('app.keypad', [])
  .directive('keyPad', () => ({
    restrict: 'E',
    template: `
    <div layout="row" layout-align="space-between start" class="Keypad">
      <!-- numerical keypad start -->
      <div class="Keypad-numbers">
        <div layout="row" layout-align="center center" ng-repeat="rows in vm.keyNumbers">
          <ul ng-repeat="keyNumber in rows">
            <li>
              <button class="md-button md-raised"
                        ng-bind="keyNumber"
                        ng-click="vm.addCharacter(keyNumber)">
              </button>
            </li>
          </ul>
        </div>
      </div>
      <!-- numerical keypad end -->

      <!-- buttons for atm functions start -->
      <ul class="Keypad-functions">
        <li class="md-button md-raised" ng-click="vm.previousState()">Back</li>
        <li class="md-button md-raised" ng-click="vm.abortProcess()">Abort</li>
        <li class="md-button md-raised" ng-click="vm.resetInput()">Reset</li>
        <li class="md-button md-raised" ng-click="vm.confirmInput(vm.inputField)">Confirm</li>
      </ul>
      <!-- buttons for atm functions start -->
    </div>
    `,
    controller: KeyPadController,
    controllerAs: 'vm',
    bindToController: true
  }))
  .name;
