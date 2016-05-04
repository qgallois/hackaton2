angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Alex',
    lastText: 'Tirer juste avec les nerfs',
    face: 'img/Alex.jpg',
    lat: 48.558853,
    lng: 1.045923,
    score:10
  }, {
    id: 1,
    name: 'Emilie',
    lastText: 'Supporter Thomas',
    face: 'img/emilie.jpg',
    lat: 48.502766,
    lng: 1.058319,
    score:6
  }, {
    id: 2,
    name: 'Hadrien',
    lastText: 'rester sur la même chaise 1h',
    face: 'img/hadrien.jpg',
    lat: 48.503790,
    lng: 1.019776,
    score:7
  }, {
    id: 3,
    name: 'Jean Baptiste',
    lastText: 'Faire 10 katas en 5 minutes',
    face: 'img/jb.jpg',
    lat: 48.520052,
    lng: 0.979859,
    score:10
  }, {
    id: 4,
    name: 'Thomas',
    lastText: 'Ne pas dire j\'ai faim d\'une journée',
    face: 'img/thomas.jpg',
    lat: 48.536511,
    lng: 1.154971,
    score:3
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
