import {actionCreators} from './../../actions/atm-card';
import './atm-card.scss'

function CardController ($scope, $ngRedux) {
  'ngInject';

  let unsubscribe = $ngRedux.connect(state => (state.atm), actionCreators)(this);
  $scope.$on('$destroy', unsubscribe);
  var vm = this;
}

export default angular
  .module('app.card', [])
  .directive('atmCard', () => ({
    restrict: 'E',
    template: `
    <div class="AtmCard">
      <div class="AtmCard-slot">
      </div>
      <div class="AtmCard-cardWrapper" layout="row" layout-align="center end">
        <div class="AtmCard-card" ng-click="vm.insertCard()" ng-class="{cardInserted: vm.present.cardMounted, cardEject: !vm.present.cardMounted}"></div>
      </div>
    </div>
    `,
    controller: CardController,
    controllerAs: 'vm'
  }))
  .name;
