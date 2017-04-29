function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(9.099761549253056,76.5246167373657), 
    zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}

app.module("PoleApp").controller('pole', ['$scope', 'pole_data', function($scope, pole_data) {
  forecast.success(function(data) {
    $scope.info = data;
  });
}]);