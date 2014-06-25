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

    .controller 'shopItem', ($scope, shopItemSvc) ->
      mainFields = [
        'descr'
        'brand_name'
        'subitems'
        'tags'
      ]
      extraFields = [
        '_id'
        'active'
        'alias'
        'articol'
        'brand'
        'category'
        'images'
        'name'
        'preview_image'
        'sale'
        'subcategory'
        'size'
        'total_qty'
        'qty'
        'weight'
      ]

      $scope.$watch () ->
        shopItemSvc.shopItem
      , (shopItem) ->
        $scope.shopItem =
          main: _.pick shopItem, mainFields
          custom: _.omit shopItem, mainFields.concat extraFields
      , true

      $scope.shopItemSvc = shopItemSvc

      shopItemSvc.selectSubitem 0

      console.log $scope