(function(angular) {
  return angular.module('directives', []).directive('diStickyHeader', function($window) {
    return {
      link: function(scope, ele) {
        var threshold;
        threshold = $('.header__section').height() + $('.navigation__section').height();
        return $($window).on('scroll', function() {
          if ($($window).scrollTop() >= threshold) {
            return ele.addClass('active');
          } else {
            return ele.removeClass('active');
          }
        });
      }
    };
  }).directive('diPreventDefault', function() {
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
        transforms: Modernizr.csstransforms,
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
  }).directive('diCheckLast', function() {
    return {
      link: function(scope, element) {
        if (scope.$last) {
          return element.ready(function() {
            var items, itemsHeight;
            items = element.prevAll(element.nodeName);
            itemsHeight = [];
            _.each(items, function(item) {
              return itemsHeight.push($(item).height());
            });
            return $(items).height(_.max(itemsHeight));
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
      },
      link: function(scope) {}
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
  });
})(angular);

//# sourceMappingURL=directives.js.map
