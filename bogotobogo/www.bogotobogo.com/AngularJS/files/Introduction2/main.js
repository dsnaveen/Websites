var app = angular.module("mainApp", ['ngRoute']);
 
app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'homeController'
        })
        .when('/viewCustomers', {
            templateUrl: 'viewCustomers.html',
            controller: 'viewCustomersController'
        })
        .when('/addCustomers', {
            templateUrl: 'addCustomers.html',
            controller: 'viewCustomersController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});

app.controller('homeController', function($scope) {

    $scope.message = "$scope.message : from homeController";
});

app.controller('viewCustomersController', function($scope) {
    $scope.customers = [
        {'name': 'Jane Stewart', 'city':'San Francisco'},
        {'name': 'Sam Jenkins', 'city':'Moscow'},
        {'name': 'Mark Andrews', 'city':'New York'}
    ];

    $scope.add = function() {
          d = {}
          d['name'] = $scope.name;
          d['city'] = $scope.city;
          $scope.message = $scope.name + " " + $scope.city
          $scope.customers.push(d);
          $scope.name = "";
          $scope.city = "";
          $scope.message = $scope.customers;
    };
});
