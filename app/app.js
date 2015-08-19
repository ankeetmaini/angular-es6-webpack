import angular from 'angular';
import router from 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainController from 'controllers/main-controller';
import Routes from './routes.js';

angular.module('app', [router])
  .config(Routes)
  .controller('MainController', MainController);
