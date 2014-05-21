do (angular) ->
  angular.module 'controllers', ['imports', 'simplePagination']
    .controller 'shopItems', ($scope, shopItems, Pagination) ->

      $scope.shopItems = shopItems.list()

      $scope.pagination = Pagination.getNew()
      $scope.pagination.numPages = Math.ceil($scope.shopItems.length/$scope.pagination.perPage)


      $scope.sortHelper = (field) ->
        $scope.sortBy = field

      $scope.sortBy = ''