describe 'Pagination Service', ->
  element = null
  pagination = null
  $scope = null

  beforeEach module 'xoxlovka'

  beforeEach inject (Pagination, $compile, $rootScope) ->
    $scope = $rootScope.$new()
    $scope.testModel = [1..100].reduce (memo, item) ->
      memo.push key: item
      return memo
    , []
    $scope.pagination = pagination = Pagination.getNew $scope.testModel, 10

    element = $compile('<ul><li ng-repeat="item in testModel |
                        startFrom: pagination.page * pagination.perPage |
                        limitTo: pagination.perPage"></li></ul>')($scope)
    $rootScope.$digest()

  it 'should increment page', ->
    expect pagination.page
      .toBe 0

    pagination.nextPage()

    expect pagination.page
      .toBe 1

  it 'should set pageById', ->
    pagination.toPageId 10

    expect pagination.page
      .toBe 10

  it 'should decrement page', ->
    pagination.toPageId 10
    pagination.prevPage()

    expect pagination.page
      .toBe 9

  it 'should show all items', ->
    expect element.find('li').length
      .toBe 10

    $scope.$apply -> pagination.showAll()

    expect element.find('li').length
      .toBe 100

  it 'should show paging again after showing all', ->
    $scope.$apply -> pagination.showAll()
    expect element.find('li').length
      .toBe 100

    $scope.$apply -> pagination.showAll()
    expect element.find('li').length
      .toBe 10

  it 'should raise `true` value if all pages are shown', ->
    pagination.toPageId 9

    expect pagination.allPagesShow()
      .toBeTruthy()

    pagination.toPageId 1

    expect pagination.allPagesShow()
      .toBeFalsy()




