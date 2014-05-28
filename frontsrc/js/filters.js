(function(angular) {
  return angular.module('filters', []).filter('unsafe', function($sce) {
    return function(val) {
      console.log;
      return $sce.trustAsHtml(val);
    };
  });
})(angular);

//# sourceMappingURL=filters.js.map
