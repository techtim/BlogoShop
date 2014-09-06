describe('Testing diPreventDefault', function() {
  var $compile;
  $compile = null;
  beforeEach(module('xoxlovka'));
  beforeEach(inject(function(_$compile_) {
    return $compile = _$compile_;
  }));
  return it('should prevent default behaviour on click', function() {});
});

describe('Pagination Service', function() {
  var $scope, element, pagination;
  element = null;
  pagination = null;
  $scope = null;
  beforeEach(module('xoxlovka'));
  beforeEach(inject(function(Pagination, $compile, $rootScope) {
    var _i, _results;
    $scope = $rootScope.$new();
    $scope.testModel = (function() {
      _results = [];
      for (_i = 1; _i <= 100; _i++){ _results.push(_i); }
      return _results;
    }).apply(this).reduce(function(memo, item) {
      memo.push({
        key: item
      });
      return memo;
    }, []);
    $scope.pagination = pagination = Pagination.getNew($scope.testModel, 10);
    element = $compile('<ul><li ng-repeat="item in testModel | startFrom: pagination.page * pagination.perPage | limitTo: pagination.perPage"></li></ul>')($scope);
    return $rootScope.$digest();
  }));
  it('should increment page', function() {
    expect(pagination.page).toBe(0);
    pagination.nextPage();
    return expect(pagination.page).toBe(1);
  });
  it('should set pageById', function() {
    pagination.toPageId(10);
    return expect(pagination.page).toBe(10);
  });
  it('should decrement page', function() {
    pagination.toPageId(10);
    pagination.prevPage();
    return expect(pagination.page).toBe(9);
  });
  it('should show all items', function() {
    expect(element.find('li').length).toBe(10);
    $scope.$apply(function() {
      return pagination.showAll();
    });
    return expect(element.find('li').length).toBe(100);
  });
  it('should show paging again after showing all', function() {
    $scope.$apply(function() {
      return pagination.showAll();
    });
    expect(element.find('li').length).toBe(100);
    $scope.$apply(function() {
      return pagination.showAll();
    });
    return expect(element.find('li').length).toBe(10);
  });
  return it('should raise `true` value if all pages are shown', function() {
    pagination.toPageId(9);
    expect(pagination.allPagesShow()).toBeTruthy();
    pagination.toPageId(1);
    return expect(pagination.allPagesShow()).toBeFalsy();
  });
});
