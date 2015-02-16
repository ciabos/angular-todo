angular.module('todomvc-app-template').factory('todoStorage', function() {
  var STORAGE_ID = 'todomvc-app-template';
  return {
    set: function(todos) {
      localStorage.setItem(STORAGE_ID, JSON.stringify(todos))
    },
    get: function() {
      return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]')  
    }
  }
});