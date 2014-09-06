$(function(){

    var Carousel = (function(){
        var ACTIVE_IMAGE_CLASS = 'is-next';
        var IMAGE_CLASS = 'showcase__item';
        var IMAGES = _.chain(_.range(13)).reduce(function (memo, item) {
            item += 1;
            item += '.jpg';

            memo.push(item);
            return memo;
        }, []).value();
        var IMG_PATH = '../../public/files/i/other-layouts/intro/showcase/';

        var NAVIGATION_SELECTOR = '.content__navigation-arrow';
        var NAVIGATION_DISABLED_CLASS = 'content__navigation-arrow--disabled';

        function showcaseCarousel () {
            var $root = $('.showcase');
            var $wrapper =  $('.showcase__wrapper', $root);
            var $imgCollection = generateImages(IMAGES, $wrapper);

            var ANIMATION_SPEED = 100;
            var IMAGE_INDEX = 0;

            setWrapperWidth($wrapper);

            $(NAVIGATION_SELECTOR).on('click', changeSlide);
            $(window).on('keydown', function (e) {
                if (e.keyCode === 37) {
                    $(NAVIGATION_SELECTOR + '.content__navigation-arrow--left').click();
                }
                if (e.keyCode === 39) {
                    $(NAVIGATION_SELECTOR + '.content__navigation-arrow--right').click();
                }
            });

            function changeSlide (e) {
                e.preventDefault();

                var $button = $(e.target);
                var showNext = $button.hasClass('content__navigation-arrow--right');

                if ($button.hasClass(NAVIGATION_DISABLED_CLASS) || $button.data('disabled')) {
                    return false;
                }

                IMAGE_INDEX = showNext ? IMAGE_INDEX + 1 : IMAGE_INDEX - 1;
                showCorrespondingDescription(IMAGE_INDEX);

                var $imageToShow = $imgCollection.find('img:eq(' + IMAGE_INDEX + ')');

                if ($imageToShow.prevAll('img').length > 0) {
                    $imageToShow.prevAll('img').each(changePosition);
                } else {
                    $imageToShow.each(changePosition);
                }

                if (!showNext) {
                    changePositionForCurrentImg($imageToShow);
                }

                toggleButtons();

                function changePosition (index, ele) {
                    var $ele = $(ele);
                    var marginLeft = getMarginTop($ele);
                    var offset = $(ele).width();

                    if (showNext) {
                        $ele.css('margin-left', marginLeft - offset);
                    } else {
                        $ele.css('margin-left', marginLeft + offset);
                    }
                }

                function changePositionForCurrentImg ($ele) {
                    var marginLeft = getMarginTop($ele);
                    var offset = $($ele).width();

                    if (marginLeft !== 0) {
                        $ele.css('margin-left', marginLeft + offset);
                    }
                }

                function disableButtons () {
                    $(NAVIGATION_SELECTOR + '--right').data('disabled', true);
                    $(NAVIGATION_SELECTOR + '--left').data('disabled', true);
                }

                function enableButtons () {
                    $(NAVIGATION_SELECTOR + '--right').data('disabled', false);
                    $(NAVIGATION_SELECTOR + '--left').data('disabled', false);
                }

                function toggleButtons () {
                    $(NAVIGATION_SELECTOR).removeClass(NAVIGATION_DISABLED_CLASS);

                    if (IMAGE_INDEX === _.size(IMAGES) - 1) {
                        $(NAVIGATION_SELECTOR + '--right').addClass(NAVIGATION_DISABLED_CLASS);
                    }

                    if (IMAGE_INDEX === 0) {
                        $(NAVIGATION_SELECTOR + '--left').addClass(NAVIGATION_DISABLED_CLASS);
                    }
                }
            }

        }

        function generateImages (images, eleToAppend) {
            var fragment = document.createDocumentFragment();

            _.each(images, function (url, index) {
                var imgTag = document.createElement('img');
                imgTag.src = IMG_PATH + url;
                imgTag.className = IMAGE_CLASS;

                if (index === 1) {
                    setActiveImage(imgTag);
                }

                fragment.appendChild(imgTag);
            });

            return eleToAppend.html(fragment);
        }

        function getMarginTop ($ele) {
            return parseInt($ele.css('margin-left').replace(/px/gi, ''), 10);
        }

        function setActiveImage (img) {
            $(img).addClass(ACTIVE_IMAGE_CLASS);
        }

        function setWrapperWidth ($wrapper) {
            var width = 0;
            $wrapper.find('img').each(function (index, ele) {
                width += ele.clientWidth;
            });
            $wrapper.width(width);
        }

        function showCorrespondingDescription(id){
            id += 1;
            $('.content__item-description div').addClass('is-hidden');
            $('.content__item-description .content__item-description--' + id).removeClass('is-hidden');
        }

        showcaseCarousel();
    })();

    var Contacts = (function(){
        $('.pseudo-button--contacts').on('click', showLayer);
        $('.pseudo-button--intro').on('click', hideLayer);

        function hideLayer (e) {
            e.preventDefault();

            Parallax.start();
            $('.pseudo-button--contacts').removeClass('is-hidden');
            $('.pseudo-button--intro').addClass('is-hidden');

            $('.content--showcase, .showcase').removeClass('is-hidden');
            $('.content--contacts').addClass('is-hidden');
            $('html').removeClass('is-freezed');
        }

        function showLayer (e) {
            e.preventDefault();

            $(window).scrollTop(0);
            Parallax.stop();
            StickButton.reset();

            $('.pseudo-button--intro').removeClass('is-hidden');
            $('.pseudo-button--contacts').addClass('is-hidden');

            $('.content--showcase, .showcase').addClass('is-hidden');
            $('.content--contacts').removeClass('is-hidden');
        }
    })();

    var Parallax = (function(){
        var s = skrollr.init();

        return {
            start: function () {
                skrollr.init();
            },
            stop: function () {
                s.destroy();
            }
        }
    }());

    var StickButton = (function(){

        var $contactsButton = $('.button-wrapper');
        var contactsButtonPosition = $contactsButton.offset().top;

        var $content = $('.content--showcase');
        var contentPosition = $content.offset().top;

        var $logoButton = $('.logo');
        var logoPosition = $logoButton.offset().top;

        var $window = $(window);

        $window.scroll(stickButtons);

        function stickButtons(){
            var top = $window.scrollTop();

            if (top > logoPosition){
                $contactsButton.css('top', top);
                $logoButton.css('top', top);
            }

            if (top > logoPosition) {
                $content.css('top', top + 112);
            }
        }

        return {
            reset: function () {
                $content.removeAttr('style');
                $('.button-wrapper, .logo').removeAttr('style');
            }
        };
    })();
});