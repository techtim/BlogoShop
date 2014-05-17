(function(angular) {
  return angular.module('controllers', ['imports']).controller('shopItems', function($scope, shopItems) {
    return $scope.shopItems = shopItems.list();
  });
})(angular);

//# sourceMappingURL=controllers.js.map
