"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function ($) {
  "use strict";

  /*--------------------------------------------------------------
   [Table of contents]
  
  techin PRELOADER JS INIT
  techin HEADER SEARCH JS INIT
  techin STICKY MENU JS INIT
  techin MENU SIDEBAR JS INIT
  techin SKILLBAR JS INIT
  techin HERO SLIDER INIT
  techin FOUR COLUMN SLIDER INIT
  techin THREE COLUMN SLIDER INIT
  techin FOUR COLUMN SLIDER TWO INIT
  techin TWO COLUMN SLIDER INIT
  techin ONE COLUMN SLIDER INIT
  techin THREE COLUMN SLIDER TWO INIT
  techin BRAND SLIDER INIT
  techin COUNTER JS INIT
  techin COUNTER JS TWO INIT
  techin MAP JS
   
  -------------------------------------------------------------------*/

  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };
  $(function () {
    /*--------------------------------------------------------------
    techin PRELOADER JS INIT
    --------------------------------------------------------------*/
    $(".techin-preloader-wrap").fadeOut(500);

    /*--------------------------------------------------------------
    techin HEADER SEARCH JS INIT
    ------------------------------------------------------------*/
    $(".techin-header-search, .techin-header-search-close, .search-overlay").click(function () {
      $(".techin-header-search-section, .search-overlay").toggleClass("open");
    });

    /*--------------------------------------------------------------
    techin STICKY MENU JS INIT
    --------------------------------------------------------------*/
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('#sticky-menu').addClass('sticky-menu');
      } else {
        $('#sticky-menu').removeClass('sticky-menu');
      }
    });

    /*--------------------------------------------------------------
    techin MENU SIDEBAR JS INIT
    --------------------------------------------------------------*/
    $(".techin-header-barger").on("click", function (e) {
      $(".techin-sidemenu-column, .offcanvas-overlay").addClass("active");
      event.preventDefault(e);
    });
    $(".techin-sidemenu-close, .offcanvas-overlay").on("click", function () {
      $(".techin-sidemenu-column, .offcanvas-overlay").removeClass("active");
    });

    /*--------------------------------------------------------------
    techin HERO SLIDER INIT
    --------------------------------------------------------------*/
    /*----------- Global Slider ----------*/
    $(".global-carousel").each(function () {
      var carouselSlide = $(this);
      function d(data) {
        return carouselSlide.data(data);
      }
    });
    /*----------- Custom Animaiton For Slider ----------*/

    $('[data-ani-duration]').each(function () {
      var durationTime = $(this).data('ani-duration');
      $(this).css('animation-duration', durationTime);
    });
    $('[data-ani-delay]').each(function () {
      var delayTime = $(this).data('ani-delay');
      $(this).css('animation-delay', delayTime);
    });
    $('[data-ani]').each(function () {
      var animaionName = $(this).data('ani');
      $(this).addClass(animaionName);
      $('.slick-slide [data-ani]').addClass('slider-animated');
    });
    $('.global-carousel').on('afterChange', function (event, slick, currentSlide, nextSlide) {
      $(slick.$slides).find('[data-ani]').removeClass('slider-animated');
      $(slick.$slides[currentSlide]).find('[data-ani]').addClass('slider-animated');
    });

    /*--------------------------------------------------------------
    techin FOUR COLUMN SLIDER INIT
    --------------------------------------------------------------*/
    var four_column_slider = $('.techin-4column-slider');
    if (four_column_slider.is_exist()) {
      four_column_slider.slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        centerMode: true,
        centerPadding: '300px',
        responsive: [{
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            centerPadding: '250px'
          }
        }, {
          breakpoint: 1399,
          settings: {
            slidesToShow: 3,
            centerPadding: '150px'
          }
        }, {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            centerPadding: '100px'
          }
        }, {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            centerPadding: '100px'
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerPadding: '100px'
          }
        }, {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            centerPadding: '0px'
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    techin THREE COLUMN SLIDER INIT
    --------------------------------------------------------------*/
    var three_column_slider = $('.techin-3column-slider');
    if (three_column_slider.is_exist()) {
      three_column_slider.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        centerMode: true,
        centerPadding: '100px',
        responsive: [{
          breakpoint: 1399,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 850,
          settings: {
            slidesToShow: 1,
            centerPadding: '70px'
          }
        }, {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            centerPadding: '0px'
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    techin FOUR COLUMN SLIDER TWO INIT
    --------------------------------------------------------------*/
    var four_column_slider2 = $('.techin-4column-slider2');
    if (four_column_slider2.is_exist()) {
      four_column_slider2.slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        responsive: [{
          breakpoint: 1399,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    techin TWO COLUMN SLIDER INIT
    --------------------------------------------------------------*/
    var two_column_slider = $('.techin-2column-slider');
    if (two_column_slider.is_exist()) {
      two_column_slider.slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 1
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    techin ONE COLUMN SLIDER INIT
    --------------------------------------------------------------*/
    var t_one_column_slider = $('.techin-1column-slider');
    if (t_one_column_slider.is_exist()) {
      t_one_column_slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        speed: 800,
        prevArrow: '<button class="slide-arrow techin-t-next"><i class="ri-arrow-left-s-line"></i></button>',
        nextArrow: '<button class="slide-arrow techin-t-prev"><i class="ri-arrow-right-s-line"></i></button>'
      });
    }

    /*--------------------------------------------------------------
    techin THREE COLUMN SLIDER TWO INIT
    --------------------------------------------------------------*/
    var three_column_slider2 = $('.techin-3column-slider2');
    if (three_column_slider2.is_exist()) {
      three_column_slider2.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        responsive: [{
          breakpoint: 1299,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    techin BRAND SLIDER INIT
    --------------------------------------------------------------*/
    var brand_slider = $('.techin-brand-slider');
    if (brand_slider.is_exist()) {
      brand_slider.slick(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true
      }, "slidesToScroll", 1), "infinite", true), "speed", 1000), "lazyLoad", 'progressive'), "prevArrow", '<button class="slide-arrow techin-brand-next"></button>'), "nextArrow", '<button class="slide-arrow techin-brand-prev"></button>')).slickAnimation();
    }

    /*--------------------------------------------------------------
    techin popup JS INIT
    --------------------------------------------------------------*/
    var popup_youtube = $('.video-init');
    if (popup_youtube.is_exist()) {
      popup_youtube.magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade'
      });
    }

    /*--------------------------------------------------------------
    techin COUNTER JS INIT
    --------------------------------------------------------------*/
    var techin_counter = $('#techin-counter');
    if (techin_counter.is_exist()) {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $(techin_counter).offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.techin-counter').each(function () {
            var $this = $(this),
              countTo = $this.attr('data-percentage');
            $({
              countNum: $this.text()
            }).animate({
              countNum: countTo
            }, {
              duration: 4000,
              easing: 'swing',
              step: function step() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function complete() {
                $this.text(this.countNum);
              }
            });
          });
          a = 1;
        }
      });
    }

    // techin DATEPICKER JS INIT

    jQuery(document).ready(function () {
      jQuery('#datepicker').datepicker({
        format: 'dd-mm-yyyy',
        startDate: '+1d'
      });
    });
    jQuery(document).ready(function () {
      jQuery('#id_StartDate').datepicker({
        dateFormat: 'yy/mm/dd',
        startDate: '0d',
        minDate: 0,
        highlightWeek: true
      });
    });

    /*--------------------------------------------------------------
    techin BRAND SLIDER INIT
    --------------------------------------------------------------*/
    var p_slider = $('.techin-p-slider-wraper');
    if (p_slider.is_exist()) {
      p_slider.slick(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true
      }, "slidesToScroll", 1), "infinite", true), "speed", 1000), "lazyLoad", 'progressive'), "prevArrow", '<button class="slide-arrow techin-p-slider-next"></button>'), "nextArrow", '<button class="slide-arrow techin-p-slider-prev"></button>')).slickAnimation();
    }

    /*--------------------------------------------------------------
    techin testimonial SLIDER INIT
    --------------------------------------------------------------*/
    var t_slider = $('.techin-t-slider-init');
    if (t_slider.is_exist()) {
      t_slider.slick(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true
      }, "slidesToScroll", 1), "infinite", true), "speed", 1000), "lazyLoad", 'progressive'), "prevArrow", '<button class="slide-arrow techin-t-slider-init-next"></button>'), "nextArrow", '<button class="slide-arrow techin-t-slider-init-prev"></button>')).slickAnimation();
    }
    $(document).ready(function () {
      $(".toggle-button").change(function () {
        toggle(this.checked);
      });

      // Uncomment this to disaplay monthly on page load
      toggle(false);
      function toggle(checked) {
        $(".toggle-button").prop('checked', checked);
        if (checked) {
          $('#coreMonthlyText,#coreMonthlyPrice,#proMonthlyText,#proMonthlyPrice').show();
          $('#coreAnnuallyText,#coreAnnuallyPrice,#proAnnuallyText,#proAnnuallyPrice').hide();
        } else {
          $('#coreMonthlyText,#coreMonthlyPrice,#proMonthlyText,#proMonthlyPrice').hide();
          $('#coreAnnuallyText,#coreAnnuallyPrice,#proAnnuallyText,#proAnnuallyPrice').show();
        }
      }
    });

    /*--------------------------------------------------------------
    techin COUNTER JS TWO INIT
    --------------------------------------------------------------*/
    var techin_counter2 = $('#techin-counter2');
    if (techin_counter2.is_exist()) {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $(techin_counter2).offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.techin-counter2').each(function () {
            var $this = $(this),
              countTo = $this.attr('data-percentage');
            $({
              countNum: $this.text()
            }).animate({
              countNum: countTo
            }, {
              duration: 4000,
              easing: 'swing',
              step: function step() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function complete() {
                $this.text(this.countNum);
              }
            });
          });
          a = 1;
        }
      });
    }

    /*--------------------------------------------------------------
    techin current year JS INIT
    --------------------------------------------------------------*/

    var currentYear = new Date().getFullYear();
    $('#current-year').text(currentYear);

    /*--------------------------------------------------------------
    techin AOS ANIMATION JS INIT
    --------------------------------------------------------------*/

    AOS.init({
      once: true // Ensure animations can trigger multiple times
    });
  }); /*End document ready*/

  $(window).on("resize", function () {}); // end window resize

  $(window).on('load', function () {}); // End window LODE

  /*--------------------------------------------------------------
  techin MAP JS
  ------------------------------------------------------------*/
  var google_map = $('#map');
  if (google_map.is_exist()) {
    var init = function init() {
      var mapOptions = {
        zoom: 11,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        disableDefaultUI: true,
        center: new google.maps.LatLng(40.6700, -73.9400),
        styles: [{
          "featureType": "landscape.man_made",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f7f1df"
          }]
        }, {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [{
            "color": "#d0e3b4"
          }]
        }, {
          "featureType": "landscape.natural.terrain",
          "elementType": "geometry",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.business",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.medical",
          "elementType": "geometry",
          "stylers": [{
            "color": "#fbd3da"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#bde6ab"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffe15f"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#efd151"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffffff"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "black"
          }]
        }, {
          "featureType": "transit.station.airport",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#cfb2db"
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#a2daf2"
          }]
        }]
      };
      var mapElement = document.getElementById('map');
      var map = new google.maps.Map(mapElement, mapOptions);
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        // icon: 'assets/images/all-img/contact/map.png',
        title: 'techin'
      });
      var contentString = '<div id="content">' + '<div id="tpw">' + '<h3>techin' + '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 280
      });
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function () {
        marker.setAnimation(null);
      }, 750); //time it takes for one bounce   

      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
      });
    };
    google.maps.event.addDomListener(window, 'load', init);
  }
})(jQuery);