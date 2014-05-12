(function(angular) {
  return angular.module('directives', []).directive('diPreventDefault', function() {
    return {
      priority: 1001,
      link: function(scope, elem, attrs) {
        if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
          return elem.on('click', function(e) {
            return e.preventDefault();
          });
        }
      }
    };
  }).directive('diSidebarMenu', function() {
    return {
      scope: true,
      controller: function($scope) {
        $scope.opened = false;
        return $scope.toggle = function() {
          $scope.opened = !$scope.opened;
          return console.log('toggle');
        };
      }
    };
  });
})(angular);

//# sourceMappingURL=directives.js.map
