function cameraController($scope, $cordovaCamera) {
  
  $scope.pictureUrl = 'http://placehold.it/100x100';
  
  $scope.takePicture = function() {
    var options = {
      destinationType: Camera.DestinationType.DATA_URL,
      encodingType: Camera.EncodingType.JPEG,
    }
    $cordovaCamera.getPicture(options)
    .then(function(data) {
      $scope.pictureUrl = 'data:image/jpeg;base64,' + data;
    },
    function(error) {

    });
  };

};