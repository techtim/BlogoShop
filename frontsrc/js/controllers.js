(function(angular) {
  return angular.module('controllers', ['imports', 'simplePagination']).controller('shopItems', function($scope, shopItems, Pagination, config) {
    $scope.shopItems = shopItems.list();
    $scope.pagination = Pagination.getNew(config.itemsOnPage || 5);
    $scope.pagination.numPages = Math.ceil($scope.shopItems.length / $scope.pagination.perPage);
    $scope.pagination.showAll = function() {
      if (!this.showedAll) {
        this.showedAll = true;
        this.oldPerPage = this.perPage;
        this.page = 1;
        return this.perPage = this.perPage * this.numPages;
      } else {
        this.showedAll = false;
        return this.perPage = this.oldPerPage;
      }
    };
    $scope.sortHelper = function(field) {
      return $scope.sortBy = field;
    };
    return $scope.sortBy = '';
  }).controller('shopItem', function($scope, shopItemSvc) {
    var extraFields, mainField;
    mainField = ['descr', 'brand_name', 'subitems', 'tags'];
    extraFields = ['_id', 'active', 'alias', 'articol', 'brand', 'category', 'images', 'name', 'preview_image', 'sale', 'subcategory', 'size', 'total_qty', 'qty', 'weight'];
    $scope.shopItem = {
      main: _.pick(shopItemSvc.getItem(), mainField),
      custom: _.omit(shopItemSvc.getItem(), mainField.concat(extraFields))
    };
    $scope.shopItemSvc = shopItemSvc;
    shopItemSvc.selectSubitem(0);
    return console.log($scope);
  });
})(angular);

//# sourceMappingURL=controllers.js.map
