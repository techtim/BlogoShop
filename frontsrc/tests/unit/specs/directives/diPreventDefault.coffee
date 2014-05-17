describe 'Testing diPreventDefault', ->
  $compile = null

  beforeEach module 'xoxlovka'

  beforeEach inject(_$compile_) ->
    $compile = _$compile_

  it 'should prevent default behaviour on click', ->
