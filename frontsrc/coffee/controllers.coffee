do (angular) ->
  angular.module 'controllers', ['imports']
    .controller 'shopItems', ($scope, shopItems) ->
      $scope.shopItems = shopItems.list()