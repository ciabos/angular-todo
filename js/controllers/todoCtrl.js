/*global angular */

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
'use strict';
angular.module('todomvc-app-template').controller('todoCtrl', function todoCtrl($scope, todoStorage) {    
  $scope.todos = todoStorage.get();
  $scope.allChecked = false;
  $scope.$watch('todos', function(newValue) {
    todoStorage.set(newValue);
  }, true);
  
  $scope.addTodo = function() {
    $scope.todos.push({
      text: $scope.todoText,
      done: false
    });
    $scope.todoText = ''; //clear the input after adding
    todoStorage.set($scope.todos);
  };


  $scope.removeTodo = function(todo) {
    $scope.todos.splice($scope.todos.indexOf(todo), 1);
    todoStorage.set($scope.todos);
  };

  $scope.checkIfAllCompleted = function() {
    $scope.allChecked = _.chain($scope.todos)
      .map(function(todo) {return todo.done})
      .reduce(function(memo, el) {return memo = memo && el }, true)
      .value();
  };

  $scope.checkAll = function() {
    angular.forEach($scope.todos, function(todo) {
      todo.done = $scope.allChecked;
    });
  };
  
});