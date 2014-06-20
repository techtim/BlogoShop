do (angular) ->
  angular.module 'directives', []
  .directive 'diStickyHeader', ($window) ->
    scope: true
    link: (scope) ->
      scope.show = false
      threshold = $('.header__section').height() + $('.navigation__section').height()

      $($window).on 'scroll', ->
        scope.$apply ->
          scope.show = $($window).scrollTop() >= threshold

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
  .directive 'diCheckLast', ($timeout) ->
    link: (scope, element) ->
      if (scope.$last)
        element.ready ->
          items = element.prevAll element.nodeName

          itemsHeight = _.reduce items, (memo, item) ->
            memo.push $(item).outerHeight(true)
            return memo
          , []

          $timeout -> $(items).height _.max(itemsHeight)

  .directive 'diDropdown',  ->
    controller: ($scope) ->
      $scope.isOpened = false

      $scope.toggleDropDown = ->
        $scope.isOpened = !$scope.isOpened

  .directive 'diOverlay', ($rootScope, $document) ->
    scope: true
    link: (scope, ele) ->
      scope.show = false

      $rootScope.$on 'overlay.show', ->
        scope.show = true
        ele.height $document.height()

      $rootScope.$on 'overlay.hide', ->
        scope.show = false

      ele.on 'click', -> closeAndEmit()

      $document.on 'keyup', (e) -> closeAndEmit() if e.keyCode == 27

      closeAndEmit = ->
        if (scope.show)
          scope.$apply ->
            $rootScope.$emit 'overlay.closed'
            scope.show = false

  .directive 'diPreventDefault', ->
    priority: 1001
    link: (scope, elem, attrs) ->
      if (attrs.ngClick)
        elem.on 'click', (e) ->
          console.log 'click'
          e.preventDefault()
          return
        return

  # directive defines sales and calculates new price
  .directive 'diPrice', (calculateSale) ->
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
          _.extend model, price: calculateSale model.price, model.sale

  .directive 'diShopDescription', ->
    restrict: 'E'
    replace: true
    controller: ($scope) ->
      $scope.toggle = ->
        $scope.opened = !$scope.opened

  # todo still buggy. 4th ele doesn't change position
  .directive 'diShopItemPreview', ($document, $rootScope) ->
    calculateBlockPosition = (block) ->
      documentWidth = $($document).width()
      width = block.width()
      leftSide = block.offset().left
      rightSide = leftSide + width*2

      console.log rightSide, leftSide, width, documentWidth

      return rightSide > documentWidth

    return (scope, ele) ->
        scope.showed = false

        scope.toggleDescription = ->
          emitEvent = "overlay.#{if scope.showed then 'hide' else 'show'}"
          $rootScope.$emit emitEvent

          scope.showed = !scope.showed

          if (scope.showed)
            scope.class = if calculateBlockPosition(ele) then 'left' else 'right'

        $rootScope.$on 'overlay.closed', ->
          scope.showed = false

  .directive 'diShopGallery', (imports, config) ->
    restrict: 'E'
    scope: true
    template: "
      <div class='shop-gallery'>
        <div class='shop-gallery__popup'
          ng-class=\"{'shop-gallery__popup--visible': xt}\"
        >
          <img class='shop-gallery__popup-img'
            ng-style=\"{'top': xt, 'left': xl}\"
            ng-src='{{activeImage.url}}' alt='' />
        </div>
        <div class='shop-gallery__full-size'>
          <a href='#'>
            <img class='shop-gallery__full-img'
              ng-src='{{activeImage.url}}'
              ng-class=\"{'shop-gallery__full-img--loaded': activeImage.url}\"
              ng-mousemove='moveImage($event)'
              ng-mouseover='calculateSizes($event)'
              ng-mouseleave='removeSizes()'
                />
          </a>
        </div>
        <ul class='shop-gallery__previews'>
          <li class='shop-gallery__previews-item' ng-repeat='image in images'>
          <img class='shop-gallery__previews-img'
              ng-class=\"{'shop-gallery__previews-img--current': activeImage.url == image.url}\"
              ng-click='setActive(image)'
              ng-src='{{image.resizedUrl}}'/>
          </li>
       </ul>
      </div>
    "
    link: (scope, ele) ->
      w1 = w2 = w4 = h1 = h2 = h4 = rw = rh = null # legacy code from previous version

      fullSizeEleOffset = $('.shop-gallery__full-size', ele).offset()
      $popupEle = $('.shop-gallery__popup', ele)
      urlPart = "#{imports.shopItem.category}/#{imports.shopItem.subcategory}/#{imports.shopItem.alias}"
      scope.activeImage = {}

      # add resized url
      scope.images = _.reduce imports.shopItem.images, (memo, img) ->
        img.resizedUrl = "#{config.previewsUrl.galleryPreview}item/#{urlPart}/#{img.tag}"
        img.url = "/i/item/#{urlPart}/#{img.tag}"
        memo.push img
        return memo
      , []

      scope.activeImage = _.first scope.images

      scope.calculateSizes = (event) ->
        w1 = $('.shop-gallery__full-img', ele).width()
        h1 = $('.shop-gallery__full-img', ele).height()

        w2 = $popupEle.width()
        h2 = $popupEle.height()

        w3 = $('img', $popupEle).width()
        h3 = $('img', $popupEle).height()

        w4 = w3 - w2
        h4 = h3 - h2
        rw = w4/w1
        rh = h4/h1

        scope.moveImage(event)

      scope.moveImage = (event) ->
        pl = event.pageX - fullSizeEleOffset.left
        pt = event.pageY - fullSizeEleOffset.top
        scope.xl = -1*pl*rw
        scope.xt = -1*pt*rh

      scope.removeSizes = -> scope.xl = scope.xt = null

      scope.setActive = (image) -> scope.activeImage = image









