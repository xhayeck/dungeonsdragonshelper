angular.module('dungeons_dragons.character', [])

.controller('charCreator', function($scope, $state) {

  $scope.points = 27;

  $scope.pointsIncrease = function() {
    $scope.points = $scope.points + 1;
  };

  $scope.pointsDecrease = function() {
    $scope.points = $scope.points - 1;
  };

  $scope.totalPoints = $scope.points;

  $scope.stats = [
    {'which': 'Str', 'total': 0, 'mod': 1, 'base': 4, 'race': 2, 'cost': 3},
    {'which': 'Dex', 'total': 0, 'mod': 1, 'base': 4, 'race': 2, 'cost': 3},
    {'which': 'Con', 'total': 0, 'mod': 1, 'base': 4, 'race': 2, 'cost': 3},
    {'which': 'Int', 'total': 0, 'mod': 1, 'base': 4, 'race': 2, 'cost': 3},
    {'which': 'Wis', 'total': 0, 'mod': 1, 'base': 4, 'race': 2, 'cost': 3},
    {'which': 'Cha', 'total': 0, 'mod': 1, 'base': 4, 'race': 2, 'cost': 3}];

  

});