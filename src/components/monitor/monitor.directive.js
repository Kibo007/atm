// import actions
import {actionCreator} from './../../actions/monitor';
// import css
import './monitor.scss'

function MonitorController ($scope, $ngRedux, $interval) {
  'ngInject';

  // this component use several properties from store so is more convenient to make it smart component
  // and connect to redux store
  let unsubscribe = $ngRedux.connect(state => (state.atm), actionCreator)(this);
  $scope.$on('$destroy', unsubscribe);
  var vm = this;

  // setInterval for progress bar
  vm.startInterval = () => {
    vm.determinateValue = 0;
    var interval = $interval(function() {
      vm.determinateValue += 1;

      // cancel interval when determinateValue is 100
      // call other actions that needs to happen with no
      // user interaction
      if (vm.determinateValue === 100) {
        $interval.cancel(interval);
        vm.moneyWithdraw();
        vm.ejectCard()
      }
    }, 50, 0, true);
  };

}

export default angular
  .module('app.monitor', [])
  .directive('monitor', () => ({
    restrict: 'E',
    scope: {
      inputField: '=',
      message: '='
    },
    template: `
    <div class="Monitor" layout="row" layout-align="space-around center">
      <!-- btns left for amount select start -->
      <ul class="Monitor-btns--left" flex>
        <li>
          <button class="md-button md-raised"
            ng-click="vm.selectAmount(amount)"
            ng-repeat="amount in vm.present.definedAmounts.slice(0, 3)"
            ng-bind="amount">
          </button>
        </li>
      </ul>
      <!-- btns left for amount select end -->

      <!-- main screen start -->
      <div class="Monitor-screen" layout="column" layout-align="center center">
        <!-- main screen message -->
        <h1 ng-bind="vm.message"></h1>

        <!-- input field for pin and custom amount -->
        <input type="text" ng-model="vm.inputField" ng-show="vm.present.step === 1 || vm.present.step === 2 || vm.present.step === 6">

        <!-- progress bar for withdrow money-->
        <md-progress-linear ng-if="vm.present.step === 3"
                            md-mode="determinate"
                            value="{{vm.determinateValue}}"
                            ng-init="vm.startInterval()">
        </md-progress-linear>

        <div ng-show="vm.present.step === 0 || vm.present.step === 5">
          <div class="name"></div><div class="sign"></div>
        </div>
      </div>
      <!-- main screen end -->

      <!-- btns right for amount select start -->
      <ul class="Monitor-btns--right" flex>
        <li>
          <button class="md-button md-raised"
            ng-click="vm.selectAmount(amount)"
            ng-repeat="amount in vm.present.definedAmounts.slice(3, 6)"
            ng-bind="amount">
          </button>
        </li>
      </ul>
      <!-- btns right for amount select end -->

    </div>
    `,
    controller: MonitorController,
    controllerAs: 'vm',
    bindToController: true
  }))
  .name;
