angular.module('dungeons_dragons', ['ui.router', 'dungeons_dragons.character', 'dungeons_dragons.home', 'dungeons_dragons.encounter'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home/home.html',
      controller: 'homeScreen'
    })
    .state('char', {
      url: '/character',
      templateUrl: 'character/character.html',
      controller: 'charCreator'
    })
    .state('encounter', {
      url: '/encounter',
      templateUrl: 'encounter/encounter.html',
      controller: 'encounterCreator'
    });

});