import './money-slot.scss'

export default angular
  .module('app.money', [])
  .directive('moneySlot', () => ({
    restrict: 'E',
    scope: {
      amount: '<',
      moneyWithdrew: '<'
    },
    template: `
      <div class="MoneySlot">
        <!-- money slot start -->
        <div class="MoneySlot-slot"></div>
        <!-- money slot end -->

        <!-- money bill start -->
        <div class="MoneySlot-moneyWrapper" layout="row" layout-align="center end">
          <div class="MoneySlot-money"
               ng-class="{moneyInserted: !moneyWithdrew, moneyEject: moneyWithdrew}"
               layout="column" layout-align="space-between center">
            <div layout="row" layout-align="space-between center" class="fullWidth">
              <span ng-bind="amount"></span>
              <span>your money</span>
              <span ng-bind="amount"></span>
            </div>
            <div layout="row" layout-align="space-around center" class="fullWidth">
              <span class="logo"></span><span class="sign"></span><span class="logo"></span>
            </div>
            <div layout="row" layout-align="space-between center" class="fullWidth">
              <span ng-bind="amount"></span>
              <span ng-bind="amount"></span>
            </div>
          </div>
        </div>
        <!-- money bill end -->

      </div>
    `,
  }))
  .name;
