(function(angular) {
  return angular.module('directives', []).directive('diStickyHeader', function($window) {
    return {
      scope: true,
      link: function(scope) {
        var threshold;
        scope.show = false;
        threshold = $('.header__section').height() + $('.navigation__section').height();
        return $($window).on('scroll', function() {
          return scope.$apply(function() {
            return scope.show = $($window).scrollTop() >= threshold;
          });
        });
      }
    };
  }).directive('diSidebarMenu', function() {
    return {
      scope: true,
      controller: function($scope) {
        $scope.isOpened = false;
        return $scope.toggle = function() {
          return $scope.isOpened = !$scope.isOpened;
        };
      },
      link: function(scope, ele, attrs) {
        if (attrs.diSidebarMenu === 'opened') {
          return scope.isOpened = true;
        }
      }
    };
  }).directive('diCarousel', function() {
    var transitions;
    transitions = {};
    if (Modernizr.csstransitions) {
      transitions = {
        transforms3d: Modernizr.csstransforms3d
      };
    } else {
      transitions = false;
    }
    return {
      restrict: 'E',
      replace: true,
      template: "<div class='carousel' ng-class='position'> <div class='carousel-wrapper'> <ul class='carousel-items' ng-transclude></ul> <a href='#' class='jcarousel-prev controls' ng-show='visibleControls'></a> <a href='#' class='jcarousel-next controls' ng-show='visibleControls'></a> </div> <ul class='pagination' ng-show='pagination'></ul> </div>",
      transclude: true,
      scope: true,
      controller: function($scope) {
        $scope.visibleControls = false;
        $scope.hideControls = function() {
          return $scope.visibleControls = false;
        };
        return $scope.showControls = function() {
          return $scope.visibleControls = true;
        };
      },
      link: function(scope, ele, attrs) {
        var carouselConfig;
        scope.position = attrs.position;
        scope.pagination = attrs.pagination ? true : false;
        carouselConfig = {
          animation: {
            duration: 800,
            easing: 'linear'
          },
          transitions: transitions,
          wrap: 'circular'
        };
        ele.find('.carousel-wrapper').jcarousel(carouselConfig).jcarouselAutoscroll({
          autostart: true,
          interval: 5000
        }).on('mouseenter', function() {
          $(this).jcarouselAutoscroll('stop');
          return scope.$apply(function() {
            return scope.showControls();
          });
        }).on('mouseleave', function() {
          $(this).jcarouselAutoscroll('start');
          return scope.$apply(function() {
            return scope.hideControls();
          });
        });
        ele.find('.pagination').on('jcarouselpagination:create', 'li:eq(0)', function() {
          return $(this).addClass('current');
        }).on('jcarouselpagination:active', 'li', function() {
          return $(this).find('a').addClass('current');
        }).on('jcarouselpagination:inactive', 'li', function() {
          return $(this).find('a').removeClass('current');
        }).jcarouselPagination({
          item: function(page) {
            return "<li><a href='#" + page + "' di-prevent-default></a></li>";
          }
        });
        ele.find('.jcarousel-prev').jcarouselControl({
          target: '-=1'
        });
        return ele.find('.jcarousel-next').jcarouselControl({
          target: '+=1'
        });
      }
    };
  }).directive('diCheckLast', function($timeout) {
    return {
      link: function(scope, element) {
        if (scope.$last) {
          return element.ready(function() {
            var items, itemsHeight;
            items = element.prevAll(element.nodeName);
            itemsHeight = _.reduce(items, function(memo, item) {
              memo.push($(item).outerHeight(true));
              return memo;
            }, []);
            return $timeout(function() {
              return $(items).height(_.max(itemsHeight));
            });
          });
        }
      }
    };
  }).directive('diDropdown', function() {
    return {
      controller: function($scope) {
        $scope.isOpened = false;
        return $scope.toggleDropDown = function() {
          return $scope.isOpened = !$scope.isOpened;
        };
      }
    };
  }).directive('diOverlay', function($rootScope, $document) {
    return {
      scope: true,
      link: function(scope, ele) {
        var closeAndEmit;
        scope.show = false;
        $rootScope.$on('overlay.show', function() {
          scope.show = true;
          return ele.height($document.height());
        });
        $rootScope.$on('overlay.hide', function() {
          return scope.show = false;
        });
        ele.on('click', function() {
          return closeAndEmit();
        });
        $document.on('keyup', function(e) {
          if (e.keyCode === 27) {
            return closeAndEmit();
          }
        });
        return closeAndEmit = function() {
          if (scope.show) {
            return scope.$apply(function() {
              $rootScope.$emit('overlay.closed');
              return scope.show = false;
            });
          }
        };
      }
    };
  }).directive('diPreventDefault', function() {
    return {
      priority: 1001,
      link: function(scope, elem, attrs) {
        if (attrs.ngClick) {
          elem.on('click', function(e) {
            console.log('click');
            e.preventDefault();
          });
        }
      }
    };
  }).directive('diPrice', function() {
    return {
      require: 'ngModel',
      restrict: 'E',
      scope: true,
      link: function(scope, ele, attrs, ctrl) {
        var setPrice, waitForModel;
        waitForModel = scope.$watch(function() {
          return ctrl.$viewValue;
        }, function(modelValue) {
          setPrice(modelValue);
          return waitForModel();
        }, true);
        return setPrice = function(model) {
          var percent;
          if (model.saleIsActive) {
            ctrl.$modelValue = _.extend(model, {
              oldPrice: model.price
            });
            if (model.sale.sale_value.indexOf('%') !== -1) {
              percent = parseInt(model.sale.sale_value, 10);
              return ctrl.$modelValue = _.extend(model, {
                price: model.price * percent / 100
              });
            } else {
              return ctrl.$modelValue = _.extend(model, {
                price: model.sale.sale_value
              });
            }
          }
        };
      }
    };
  }).directive('diShopDescription', function() {
    return {
      restrict: 'E',
      replace: true,
      controller: function($scope) {
        return $scope.toggle = function() {
          return $scope.opened = !$scope.opened;
        };
      }
    };
  }).directive('diShopItemPreview', function($document, $rootScope) {
    var calculateBlockPosition;
    calculateBlockPosition = function(block) {
      var documentWidth, leftSide, rightSide, width;
      documentWidth = $($document).width();
      width = block.width();
      leftSide = block.offset().left;
      rightSide = leftSide + width * 2;
      console.log(rightSide, leftSide, width, documentWidth);
      return rightSide > documentWidth;
    };
    return function(scope, ele) {
      scope.showed = false;
      scope.toggleDescription = function() {
        var emitEvent;
        emitEvent = "overlay." + (scope.showed ? 'hide' : 'show');
        $rootScope.$emit(emitEvent);
        scope.showed = !scope.showed;
        if (scope.showed) {
          return scope["class"] = calculateBlockPosition(ele) ? 'left' : 'right';
        }
      };
      return $rootScope.$on('overlay.closed', function() {
        return scope.showed = false;
      });
    };
  }).directive('diShopGallery', function(imports, config) {
    return {
      restrict: 'E',
      scope: true,
      template: "<div class='shop-gallery'> <div class='shop-gallery__popup' ng-class=\"{'shop-gallery__popup--visible': xt}\" > <img class='shop-gallery__popup-img' ng-style=\"{'top': xt, 'left': xl}\" ng-src='{{activeImage.url}}' alt='' /> </div> <div class='shop-gallery__full-size'> <a href='#'> <img class='shop-gallery__full-img' ng-src='{{activeImage.url}}' ng-class=\"{'shop-gallery__full-img--loaded': activeImage.url}\" ng-mousemove='moveImage($event)' ng-mouseover='calculateSizes($event)' ng-mouseleave='removeSizes()' /> </a> </div> <ul class='shop-gallery__previews'> <li class='shop-gallery__previews-item' ng-repeat='image in images'> <img class='shop-gallery__previews-img' ng-class=\"{'shop-gallery__previews-img--current': activeImage.url == image.url}\" ng-click='setActive(image)' ng-src='{{image.resizedUrl}}'/> </li> </ul> </div>",
      link: function(scope, ele) {
        var $popupEle, fullSizeEleOffset, h1, h2, h4, rh, rw, urlPart, w1, w2, w4;
        w1 = w2 = w4 = h1 = h2 = h4 = rw = rh = null;
        fullSizeEleOffset = $('.shop-gallery__full-size', ele).offset();
        $popupEle = $('.shop-gallery__popup', ele);
        urlPart = "" + imports.shopItem.category + "/" + imports.shopItem.subcategory + "/" + imports.shopItem.alias;
        scope.activeImage = {};
        scope.images = _.reduce(imports.shopItem.images, function(memo, img) {
          img.resizedUrl = "" + config.previewsUrl.galleryPreview + "item/" + urlPart + "/" + img.tag;
          img.url = "/i/item/" + urlPart + "/" + img.tag;
          memo.push(img);
          return memo;
        }, []);
        scope.activeImage = _.first(scope.images);
        scope.calculateSizes = function(event) {
          var h3, w3;
          w1 = $('.shop-gallery__full-img', ele).width();
          h1 = $('.shop-gallery__full-img', ele).height();
          w2 = $popupEle.width();
          h2 = $popupEle.height();
          w3 = $('img', $popupEle).width();
          h3 = $('img', $popupEle).height();
          w4 = w3 - w2;
          h4 = h3 - h2;
          rw = w4 / w1;
          rh = h4 / h1;
          return scope.moveImage(event);
        };
        scope.moveImage = function(event) {
          var pl, pt;
          pl = event.pageX - fullSizeEleOffset.left;
          pt = event.pageY - fullSizeEleOffset.top;
          scope.xl = -1 * pl * rw;
          return scope.xt = -1 * pt * rh;
        };
        scope.removeSizes = function() {
          return scope.xl = scope.xt = null;
        };
        return scope.setActive = function(image) {
          return scope.activeImage = image;
        };
      }
    };
  });
})(angular);

//# sourceMappingURL=directives.js.map
