(function(angular) {
  return angular.module('controllers', ['imports', 'simplePagination']).controller('shopItems', function($scope, shopItems, Pagination) {
    $scope.shopItems = shopItems.list();
    $scope.pagination = Pagination.getNew();
    $scope.pagination.numPages = Math.ceil($scope.shopItems.length / $scope.pagination.perPage);
    $scope.sortHelper = function(field) {
      return $scope.sortBy = field;
    };
    return $scope.sortBy = '';
  });
})(angular);

//# sourceMappingURL=controllers.js.map
