//new angular module with name and has no dependancies
angular.module("UserService", [])
//create factory with name and function dependant on andgular http lib
    .factory("UserAPIService", function($http) {
        UserAPIService = {
            callAPI: function(url, data) {
                return $http.post(url, data);
            }
        };
        return UserAPIService;
    });
    
angular.module("TodoService", [])
    .factory("TodoAPIService", function($http) {
        TodoAPIService = {
            getTodos: function(url, data, token) {
                var header = "Authorization: JWT " + token;
                   return $http.get(url, {params:{"username": data}}, header);
                },
            createTodo: function(url, data, token) {
                var header = "Authorization: JWT " + token;
                return $http.post(url, data, token);
                },

            editTodo: function(url, data, token) {
                var header = "Authorization: JWT " + token;
                return $http.put(url, data, header);
                },
            deleteTodo: function(url, data, token) {
                var header = "Authorization: JWT " + token;
                return $http.delete(url, header);
            }
        };
        return TodoAPIService;
    })