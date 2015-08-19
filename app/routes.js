Routes.$inject = ['$stateProvider'];

export default function Routes ($stateProvider) {
  $stateProvider
    .state('main', {
      url: '/main',
      template: require('./templates/main-template.html'),
      controller: 'MainController',
      controllerAs: 'mainCtrl'
    })
    .state('main.nested', {
      url: '/nested',
      template: require('./templates/nested-template.html'),
    });;
}
