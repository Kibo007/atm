import angular from 'angular';

import atmActions from './atm';

export default angular
  .module('app.actions', [])
  .factory('atmActions', atmActions)
  .name;
