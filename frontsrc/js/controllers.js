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
  });
})(angular);

//# sourceMappingURL=controllers.js.map
