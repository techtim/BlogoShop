do (angular) ->
  angular.module 'controllers', ['imports', 'simplePagination']
    .controller 'shopItems', ($scope, shopItems, Pagination, config) ->

      $scope.shopItems = shopItems.list()

      $scope.pagination = Pagination.getNew(config.itemsOnPage || 5)
      $scope.pagination.numPages = Math.ceil($scope.shopItems.length/$scope.pagination.perPage)

      $scope.pagination.showAll = () ->
        if (!@showedAll)
          @showedAll = true
          @oldPerPage = @perPage

          @page = 1
          @perPage = @perPage * @numPages
        else
          @showedAll = false
          @perPage = @oldPerPage

      $scope.sortHelper = (field) ->
        $scope.sortBy = field

      $scope.sortBy = ''