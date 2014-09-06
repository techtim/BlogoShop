(function(angular) {
  return angular.module('filters', []).filter('unsafe', function($sce) {
    return function(val) {
      return $sce.trustAsHtml(val);
    };
  }).filter('startFrom', function() {
    return function(input, start) {
      if (input === void 0) {
        return input;
      } else {
        return input.slice(+start);
      }
    };
  });
})(angular);

//# sourceMappingURL=filters.js.map
