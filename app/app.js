import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainController from 'controllers/main-controller';

angular.module('app', [])
  .controller('MainController', MainController);
