function mapController($scope, $state, $cordovaGeolocation, Chats) {

  $scope.chats = Chats.all();



    var options = {timeout: 10000, enableHighAccuracy: true};
    $cordovaGeolocation.getCurrentPosition(options).then(function(position){
  var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  var mapOptions = {
    center: latLng,
    zoom: 11,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
      var marker = new google.maps.Marker({
          map: $scope.map,
          animation: google.maps.Animation.DROP,
          position: latLng,
          icon : 'img/tile.png'

      });

    }, function(error){
      console.log("Could not get location");
    });

  });

  $scope.AddTile = function(personne){
//    console.log(personne);
    var contentString = '<div id="content"><div id="siteNotice"></div><h1>'+personne.name+'</h1></div>';
    var infowindow = new google.maps.InfoWindow({
       content: "essai"
    });
    var marker = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: {lat: personne.lat, lng: personne.lng},
      title: personne.city
    });
    marker.addListener('click', function() {

    infowindow.open(map, marker);
  });
  }

}
