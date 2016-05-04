function cameraController($scope, $cordovaCamera) {

$scope.takePicture = function(){
    alert('coucou')
    var options = {
      quality: 50,
      allowEdit: true,
      targetWidth: 100,
      targetHeight: 100,
      saveToPhotoAlbum: false,
	  correctOrientation:true
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      console.log(imageData);
      //var image = document.getElementById('myImage');
      //image.src = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      // error
    });
}

};
