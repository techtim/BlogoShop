(function(angular) {
  return angular.module('controllers', ['imports']).controller('shopItems', function($window, $scope, shopItems, Pagination, CONFIG) {
    $scope.shopItems = shopItems.list();
    $scope.hideList = $scope.shopItems.length === 0;
    $scope.pagination = Pagination.getNew($scope.shopItems, CONFIG.itemsOnPage || 5);
    $scope.paginationHide = $scope.pagination.page === $scope.pagination.numPages;
    $scope.showShopItem = function(link) {
      return $window.location.href = link;
    };
    $scope.sortBy = '';
    return $scope.sortHelper = function(field) {
      return $scope.sortBy = field;
    };
  }).controller('shopItem', function($scope, shopItemSvc) {
    var extraFields, mainFields;
    mainFields = ['descr', 'brand_name', 'subitems', 'tags'];
    extraFields = ['_id', 'active', 'alias', 'articol', 'brand', 'category', 'images', 'name', 'preview_image', 'sex', 'sale', 'subcategory', 'size', 'total_qty', 'qty', 'url', 'weight'];
    $scope.$watch(function() {
      return shopItemSvc.shopItem;
    }, function(shopItem) {
      return $scope.shopItem = {
        main: _.pick(shopItem, mainFields),
        custom: _.omit(shopItem, mainFields.concat(extraFields))
      };
    }, true);
    $scope.shopItemSvc = shopItemSvc;
    return shopItemSvc.selectSubitem(0);
  }).controller('shopCart', function($scope, DELIVER_PRICE) {
    var calculateTotalPrice, waitForPrice;
    $scope.cartPrice = 0;
    $scope.isOrdering = false;
    waitForPrice = $scope.$watch('cartPrice', function(newValue) {
      $scope.cartPrice = newValue;
      $scope.totalPrice = newValue;
      return waitForPrice();
    });
    $scope.startOrder = function() {
      return $scope.isOrdering = true;
    };
    $scope.stateModels = _.chain([]).tap(function(array) {
      return _.times(3, function() {
        return array.push({});
      });
    }).value();
    $scope.selecetDeliverType = function(type) {
      $scope.deliverType = type;
      $scope.paymentType = type.toLowerCase().indexOf('courier') >= 0 ? 'cash' : 'nalog_payment';
      return calculateTotalPrice($scope.paymentType, $scope.deliverType);
    };
    return calculateTotalPrice = function(type, deliverType) {
      var orderPrice;
      orderPrice = type === 'nalog_payment' ? 0 : DELIVER_PRICE[deliverType];
      return $scope.totalPrice = $scope.cartPrice + orderPrice;
    };
  });
})(angular);

//# sourceMappingURL=controllers.js.map
