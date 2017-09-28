angular.module('TodoApp',['ngRoute', 'RouteControllers', 'UserService', 'angular-storage', "TodoService"]);
angular.module('TodoApp').config(function
    ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);
        
        $routeProvider.when("/", {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        })
        .when("/todo", {
            templateUrl: 'templates/todo.html',
            controller: 'TodoController'
        })
        .when('/accounts/register', {
            templateUrl: 'templates/register.html',
            controller: 'RegisterController'
        });
});