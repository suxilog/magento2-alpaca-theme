(function Slider() {
  'use strict';

  function init() {
    let sliders = [...document.querySelectorAll('[data-slider="brands"]')];
    sliders.forEach(sliderItem => {
      $.when(createSlider(sliderItem)).then(displaySlider(sliderItem));
    });
  }

  function createSlider(sliderItem) {
    let slider = $(sliderItem),
        sliderPrev = slider.find('.slider__prev'),
        sliderNext = slider.find('.slider__next');

    $(slider).find('.slider__slides')
      .not('.slick-initialized')
      .slick({
        dots: false,
        infinite: true,
        centerMode: false,
        mobileFirst: true,
        prevArrow: sliderPrev,
        nextArrow: sliderNext,
        dotsClass: 'slider__dots',
        autoplay: false,
        autoplaySpeed: 1000,
        pauseOnFocus: true,
        pauseOnHover: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
            }
          },
        ]
      })
  }

  function displaySlider(sliderItem) {
    let slider = $(sliderItem),
        loader = slider.find('.loader');

    loader.removeClass('loader--visible');
    slider.removeClass('slider--loading');
  }

  init();
}());
