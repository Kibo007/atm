import angular from 'angular';

// redux
import ngRedux from 'ng-redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';

// angular
import components from './components';

export default angular
  .module('app', [
    ngRedux,
    components,
  ])
  .config(($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(rootReducer, [thunkMiddleware]);
  })
  .name;
