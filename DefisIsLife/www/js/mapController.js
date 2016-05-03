function mapController($scope, $state, $cordovaGeolocation) {
    var options = {timeout: 10000, enableHighAccuracy: true};
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

var mapOptions = {
  center: latLng,
  zoom: 15,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};

$scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }, function(error){
    console.log("Could not get location");
  });
$scope.map = map;
//Wait until the map is loaded
google.maps.event.addListenerOnce($scope.map, 'idle', function(){
  var marker = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: latLng
  });
  var infoWindow = new google.maps.InfoWindow({
      content: "Here I am!"
  });
  google.maps.event.addListener(marker, 'click', function () {
      infoWindow.open($scope.map, marker);
  });
})

  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };
}
