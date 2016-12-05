var myApp = angular.module('myApp', [
    'ngRoute',
    'authorControllers'
]);
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: '../partials/list.html',
    controller: 'ListController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);
