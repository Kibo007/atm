import {moneyWithdrow} from './../../actions/money-slot';
import './money-slot.scss'

function MoneyController ($scope, $ngRedux) {
  'ngInject';

  let unsubscribe = $ngRedux.connect(state => (state.atm), {moneyWithdrow})(this);
  $scope.$on('$destroy', unsubscribe);
  var vm = this;
  console.log(vm)
}

export default angular
  .module('app.money', [])
  .directive('moneySlot', () => ({
    restrict: 'E',
    template: `
      <div class="MoneySlot">
        <div class="MoneySlot-slot">
        </div>
        <div class="MoneySlot-moneyWrapper" layout="row" layout-align="center end">
          <div class="MoneySlot-money"
               ng-class="{moneyInserted: !vm.present.moneyWithdrew, moneyEject: vm.present.moneyWithdrew}"
               layout="column" layout-align="space-between center">
            <div layout="row" layout-align="space-between center" class="fullWidth"><span>10</span><span>your money</span><span>10</span></div>
            <div layout="row" layout-align="space-around center" class="fullWidth"><span class="logo"></span><span class="sign"></span><span class="logo"></span></div>
            <div layout="row" layout-align="space-between center" class="fullWidth"><span>10</span><span>10</span></div>
          </div>
        </div>
      </div>
    `,
    controller: MoneyController,
    controllerAs: 'vm'
  }))
  .name;
