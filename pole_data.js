app.module("PoleApp").factory('pole_data', ['$http', function($http) { 
  return $http.get('http://test.poletalks.com/websites/getData') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);