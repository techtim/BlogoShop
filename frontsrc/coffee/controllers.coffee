do (angular) ->
  angular.module 'controllers', ['imports']
    .controller 'shopItems', ($window, $scope, shopItems, Pagination, CONFIG) ->

      $scope.shopItems = shopItems.list()

      $scope.hideList = $scope.shopItems.length == 0

      $scope.pagination = Pagination.getNew($scope.shopItems, CONFIG.itemsOnPage || 5)
      $scope.paginationHide = $scope.pagination.page == $scope.pagination.numPages

      $scope.showShopItem = (link) -> $window.location.href = link
      $scope.sortBy = ''
      $scope.sortHelper = (field) -> $scope.sortBy = field


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
        'sex'
        'sale'
        'subcategory'
        'size'
        'total_qty'
        'qty'
        'url'
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

    .controller 'shopCart', ($scope, DELIVER_PRICE) ->
      $scope.cartPrice = 0
      $scope.isOrdering = false

      waitForPrice = $scope.$watch 'cartPrice', (newValue) ->
        $scope.cartPrice = newValue
        $scope.totalPrice = newValue
        waitForPrice()

      $scope.startOrder = -> $scope.isOrdering = true

      $scope.stateModels = _.chain []
        .tap (array) -> _.times 3, -> array.push {}
        .value()

      $scope.selecetDeliverType = (type) ->
        $scope.deliverType = type
        $scope.paymentType = if type.toLowerCase().indexOf('courier') >= 0 then 'cash' else 'nalog_payment'
        calculateTotalPrice $scope.paymentType, $scope.deliverType

      calculateTotalPrice = (type, deliverType) ->
        orderPrice = if type == 'nalog_payment' then 0 else DELIVER_PRICE[deliverType]

        $scope.totalPrice = $scope.cartPrice + orderPrice

