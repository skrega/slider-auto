$(function () {
    $('.auto-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        appendDots: $(".custom-paging"),
        appendArrows: $(".custom-arrows"),
        fade: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: true,
        nextArrow: '<button type="button" class="slick-next"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="#6C6C72"/><path d="M10 14.5C9.72386 14.5 9.5 14.7239 9.5 15C9.5 15.2761 9.72386 15.5 10 15.5V14.5ZM20.3536 15.3536C20.5488 15.1583 20.5488 14.8417 20.3536 14.6464L17.1716 11.4645C16.9763 11.2692 16.6597 11.2692 16.4645 11.4645C16.2692 11.6597 16.2692 11.9763 16.4645 12.1716L19.2929 15L16.4645 17.8284C16.2692 18.0237 16.2692 18.3403 16.4645 18.5355C16.6597 18.7308 16.9763 18.7308 17.1716 18.5355L20.3536 15.3536ZM10 15.5H20V14.5H10V15.5Z" fill="#252323"/></svg></button>',
        prevArrow: '<button type="button" class="slick-prev"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="-0.5" y="0.5" width="29" height="29" rx="14.5" transform="matrix(-1 0 0 1 29 0)" stroke="#6C6C72"/><path d="M20 14.5C20.2761 14.5 20.5 14.7239 20.5 15C20.5 15.2761 20.2761 15.5 20 15.5V14.5ZM9.64645 15.3536C9.45118 15.1583 9.45118 14.8417 9.64645 14.6464L12.8284 11.4645C13.0237 11.2692 13.3403 11.2692 13.5355 11.4645C13.7308 11.6597 13.7308 11.9763 13.5355 12.1716L10.7071 15L13.5355 17.8284C13.7308 18.0237 13.7308 18.3403 13.5355 18.5355C13.3403 18.7308 13.0237 18.7308 12.8284 18.5355L9.64645 15.3536ZM20 15.5H10V14.5H20V15.5Z" fill="#252323"/></svg></button>',
        customPaging: function customPaging(slider, i) {
            return '<span class="slider-count active">' + 0 + (i + 1) + '</span> / <span class="slider-count">  ' + 0 + slider.slideCount + '</span>';
        },
        responsive: [{
            breakpoint: 994,
            settings: {
                dots: false,
            }
        }, ]
    });
    if (window.innerWidth < 994) {
        console.log(window.innerWidth)
        $('.slider-nav').appendTo('.auto-item__content')
    }
   
})