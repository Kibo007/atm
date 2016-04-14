import angular from 'angular';

class ATMController {
  constructor($scope, $ngRedux, atmActions) {

    let unsubscribe = $ngRedux.connect(state => (state.atm))(this);
    $scope.$on('$destroy', unsubscribe);
    console.log($ngRedux.getState())

    this.increment = atmActions.increment;
    this.decrement = atmActions.decrement;
    this.incrementAsync = atmActions.incrementAsync;
    this.incrementIfOdd = atmActions.incrementIfOdd;
    this.previousState = atmActions.previousState;
  }
}

ATMController.$inject = ['$scope', '$ngRedux', 'atmActions'];

export default angular
  .module('app.atm', [])
  .directive('atm', () => ({
    restrict: 'E',
    template: `
      <div>
        <p class="lead">{{ vm.present.count }}</p>
        <p class="lead">{{ vm.present.name }}</p>

        <ul class="list-inline">
          <li>
            <button
              ng-click="vm.increment()"
              class="btn">Increase</button>
          </li>
          <li>
            <button
              ng-click="vm.decrement()"
              class="btn">Decrease</button>
          </li>
          <li>
            <button
              ng-click="vm.incrementIfOdd()"
              class="btn">Increase If Odd</button>
          </li>
          <li>
            <button
              ng-click="vm.incrementAsync()"
              class="btn">Async Increase</button>
          </li>
          <li>
            <button
              ng-click="vm.previousState()"
              class="btn">back in past</button>
          </li>
        </ul>
      </div>
    `,
    controller: ATMController,
    controllerAs: 'vm'
  }))
  .name;
