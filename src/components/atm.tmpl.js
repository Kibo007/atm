const tmpl = `<div>
        <p class="lead">{{ vm.present.step }}</p>
        <p class="lead">{{ vm.present.message }}</p>
        <p class="lead">mountedCard {{ vm.present.cardMounted }}</p>

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
              ng-click="vm.previousState()"
              class="btn">back in past</button>
          </li>
          <li>
            <button
              ng-click="vm.insertCard().bind()"
              class="btn">insertCard</button>
          </li>
          <li>
            <button
              ng-click="vm.ejectCard()"
              class="btn">EjectCard</button>
          </li>
        </ul>
      </div>
`;

 export default tmpl;
