angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.login = "";
})

.controller('mapController', mapController)

.controller('inscriptionController', inscriptionController)

.controller('cameraController', cameraController)

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $cordovaEmailComposer, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);

  $cordovaEmailComposer.isAvailable().then(function() {
   // is available
   alert("available");
 }, function () {
   // not available
   alert("not available");
 });
 $scope.sendEmail = function(){
  var email = {
     to: 'teste@example.com',
     cc: 'teste@example.com',
     bcc: ['john@doe.com', 'jane@doe.com'],
     attachments: [
       'file://img/logo.png',
       'res://icon.png',
       'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
       'file://README.pdf'
     ],
     subject: 'Mail subject',
     body: 'How are you? Nice greetings from Leipzig',
     isHtml: true
  }
}
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
