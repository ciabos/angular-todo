/*global angular */

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
angular.module('todomvc-app-template', [])
  .controller('todoCtrl', function todoCtrl($scope) {
    'use strict';
    $scope.todos = [];
    
    $scope.addTodo = function() {
      if(event.keyCode == 13 && $scope.todoText){
        $scope.todos.push({text:$scope.todoText, done:false});
        $scope.todoText = '';
      }
    };
  });