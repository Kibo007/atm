// import CSS
import 'angular-material/angular-material.css'
import './atm.scss'

// import components
import {actionCreator} from './../actions/atm';
import keypad from './keypad/key-pad.directive';
import atmCard from './atm-card/atm-card.directive';
import moneySlot from './money-slot/money-slot.directive';
import monitor from './monitor/monitor.directive';

function ATMController ($scope, $ngRedux) {
  'ngInject';

  // this is main smart component connect to redux store
  let unsubscribe = $ngRedux.connect(state => (state.atm), actionCreator)(this);
  $scope.$on('$destroy', unsubscribe);

  var atm = this;
}

export default angular
  .module('app.atm', [
    keypad,
    atmCard,
    moneySlot,
    monitor
  ])
  .directive('atm', () => ({
    restrict: 'E',
    template: `
    <div class="AtmSimulator">
      <!-- monitor and atm card start -->
      <div layout="row" layout-align="space-between start" class="pt-small">
        <monitor message="atm.present.message" input-field="atm.present.inputField"></monitor>
        <atm-card insert-card="atm.insertCard()" card-mounted="atm.present.cardMounted"></atm-card>
      </div>
      <!-- monitor and atm card end -->

      <!-- keypad and money slot start -->
      <div layout="row" layout-align="space-between start" class="pt-big">
        <key-pad></key-pad>
        <money-slot money-withdrew="atm.present.moneyWithdrew" amount="atm.present.amount"></money-slot>
      </div>
      <!-- keypad and money slot end -->

    </div>
    `,
    controller: ATMController,
    controllerAs: 'atm',
    bindToController: true
  }))
  .name;
