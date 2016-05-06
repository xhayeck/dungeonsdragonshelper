angular.module('dungeons_dragons.home', [])

.controller('homeScreen', function($scope, $state) {

  $scope.char = function() {
    $state.go('char');
  };

  $scope.encoun = function() {
    $state.go('encounter');
  };

});