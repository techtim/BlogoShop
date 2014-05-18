do (angular) ->
  angular.module 'controllers', ['imports']
    .controller 'shopItems', ($scope, shopItems) ->
      $scope.shopItems = shopItems.list()

      $scope.sortHelper = (field) ->
        $scope.sortBy = field

      $scope.sortBy = ''