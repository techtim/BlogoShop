do (angular) ->
  angular.module 'directives', []
  .directive 'diStickyHeader', ($window) ->
    link: (scope, ele) ->
      threshold = $('.header__section').height() + $('.navigation__section').height()

      $($window).on 'scroll', ->
        if ($($window).scrollTop() >= threshold)
          ele.addClass 'active'
        else
          ele.removeClass 'active'

  .directive 'diPreventDefault', ->
    priority: 1001
    link: (scope, elem, attrs) ->
      if (attrs.ngClick || attrs.href == '' || attrs.href == '#')
        elem.on 'click', (e) ->
          e.preventDefault()

  .directive 'diSidebarMenu', ->
    scope: true
    controller: ($scope) ->
      $scope.isOpened = false

      $scope.toggle = -> $scope.isOpened = !$scope.isOpened
    link: (scope, ele, attrs) ->
      scope.isOpened = true if attrs.diSidebarMenu == 'opened'

  .directive 'diCarousel', ->
      transitions = {}

      if (Modernizr.csstransitions)
        transitions =
          transforms: Modernizr.csstransforms
          transforms3d: Modernizr.csstransforms3d
      else
        transitions = false

      return {} =
        restrict: 'E'
        replace: true
        template: "
          <div class='carousel' ng-class='position'>
            <div class='carousel-wrapper'>
              <ul class='carousel-items' ng-transclude></ul>
              <a href='#' class='jcarousel-prev controls' ng-show='visibleControls'></a>
              <a href='#' class='jcarousel-next controls' ng-show='visibleControls'></a>
            </div>
            <ul class='pagination' ng-show='pagination'></ul>
        </div>"
        transclude: true
        scope: true
        controller: ($scope) ->
          $scope.visibleControls = false
          $scope.hideControls = -> $scope.visibleControls = false
          $scope.showControls = -> $scope.visibleControls = true
        link: (scope, ele, attrs) ->
          scope.position = attrs.position

          scope.pagination = if attrs.pagination then true else false

          carouselConfig =
            animation:
              duration: 800
              easing: 'linear'
            transitions: transitions
            wrap: 'circular'

          ele.find('.carousel-wrapper')
          .jcarousel carouselConfig
          .jcarouselAutoscroll {} =
            autostart: true
            interval: 5000
          .on 'mouseenter', ->
            $(@).jcarouselAutoscroll 'stop'
            scope.$apply -> scope.showControls()
          .on 'mouseleave', ->
            $(@).jcarouselAutoscroll 'start'
            scope.$apply -> scope.hideControls()

          ele.find('.pagination')
          .on 'jcarouselpagination:create', 'li:eq(0)', () ->
            $(@).addClass 'current'
          .on 'jcarouselpagination:active', 'li', () ->
            $(@).find('a').addClass 'current'
          .on 'jcarouselpagination:inactive', 'li', () ->
            $(@).find('a').removeClass 'current'
          .jcarouselPagination {} =
            item: (page) -> "<li><a href='##{page}' di-prevent-default></a></li>"

          ele.find('.jcarousel-prev').jcarouselControl {} =
            target: '-=1'

          ele.find('.jcarousel-next').jcarouselControl {} =
            target: '+=1'

  # directive finds all DOM nodes which should have equal height and sets it
  .directive 'diCheckLast', ->
    link: (scope, element) ->
      if (scope.$last)
        element.ready ->
          items = element.prevAll element.nodeName
          itemsHeight = []

          _.each items, (item) ->
            itemsHeight.push $(item).height()

          $(items).height _.max(itemsHeight)

  .directive 'diDropdown',  ->
    controller: ($scope) ->
      $scope.isOpened = false

      $scope.toggleDropDown = ->
        $scope.isOpened = !$scope.isOpened
    link: (scope) ->

  # directive defines sales and calculates new price
  .directive 'diPrice', ->
    require: 'ngModel'
    restrict: 'E'
    scope: true
    link: (scope, ele, attrs, ctrl) ->

      waitForModel = scope.$watch () ->
        ctrl.$viewValue
      , (modelValue) ->
        setPrice(modelValue)
        waitForModel()
      , true

      setPrice = (model) ->
        if model.saleIsActive
          ctrl.$modelValue = _.extend model, oldPrice: model.price

          if (model.sale.sale_value.indexOf('%') != -1)
            percent =  parseInt model.sale.sale_value, 10
            ctrl.$modelValue = _.extend model, price: model.price*percent/100
          else
            ctrl.$modelValue = _.extend model, price: model.sale.sale_value






