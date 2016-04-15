import {actionCreators} from './../../actions/keypad';

function KeyPadController ($scope, $ngRedux) {
  'ngInject';

  let unsubscribe = $ngRedux.connect(state => (state.atm), actionCreators)(this);
  $scope.$on('$destroy', unsubscribe);

  var vm = this;
}

export default angular
  .module('app.keypad', [])
  .directive('keypad', () => ({
    restrict: 'E',
      template: `

    `,
    controller: KeyPadController,
    controllerAs: 'vm'
  }))
  .name;
