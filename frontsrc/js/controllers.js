(function(angular) {
  return angular.module('controllers', ['imports']).controller('shopItems', function($scope, shopItems) {
    console.log($scope);
    return $scope.shopItems = shopItems;
  });
})(angular);

//# sourceMappingURL=controllers.js.map
