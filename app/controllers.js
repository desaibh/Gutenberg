var authorControllers = angular.module('authorControllers', []);

authorControllers.controller('ListController', ['$scope', '$http', function ($scope, $http) {
  $http.get('../dist/data/data.json').success(function(data) {
    $scope.authors = data;
  });
}]);



// var myApp = angular.module('myApp',[]);
// // myApp.controller('MyController', function($scope) {
// //   $scope.authors = [
// //     {
// //       name    : 'Bhavika Desai',
// //       title   : 'paint',
// //       works   : 'this app'
// //     },
// //     {
// //       name    : 'Robert Pullman',
// //       title   : 'goldencompass',
// //       works   : 'a bok'
// //     }
// //   ];
// //
//
// });
