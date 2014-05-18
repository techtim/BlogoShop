(function(angular) {
  return angular.module('controllers', ['imports']).controller('shopItems', function($scope, shopItems) {
    $scope.shopItems = shopItems.list();
    $scope.sortHelper = function(field) {
      return $scope.sortBy = field;
    };
    return $scope.sortBy = '';
  });
})(angular);

//# sourceMappingURL=controllers.js.map
