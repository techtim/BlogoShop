do (angular) ->
  angular.module 'controllers', ['imports']
    .controller 'shopItems', ($scope, shopItems) ->
      console.log $scope
      $scope.shopItems = shopItems