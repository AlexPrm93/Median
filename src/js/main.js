$('header .main-navigation ul a li').click(function(){
  $('header .main-navigation ul a li').removeClass('active');
  $(this).addClass('active');
});

$('.accordeon-title').click(function() {
  accordeonSlider($(this));
});

function accordeonSlider(obj) {
  const parentBlock = $(obj).parent();
  const accordeonBody = $(obj).siblings('.accordeon-body');
  if ( $(parentBlock).hasClass('active') ) {
    $(accordeonBody).slideUp(500);
    $(parentBlock).removeClass('active');
  } else {
    $('.accordeon-body').slideUp(500);
    $('.accordeon-item').removeClass('active');
    $(accordeonBody).slideDown(500);
    $(parentBlock).addClass('active');
  }
};

$('#payment-range').on('input', function() {
  paymentRange();
});

function paymentRange() {
  const rangeValue = $('#payment-range').val();
  const val = ((100 * rangeValue) / 6).toFixed(2);
  const price = rangeValue * 100;

  $('#payment-range').css("background-image", "linear-gradient(to right, #3b5998 0%, #3b5998 " + val + "%, #a6a6a6 " + val + "%, #a6a6a6 100%)");
  $('.range-result').css("left", val + "%");
  $('.range-result').empty().append("$" + price);
};

// for video
$('.play-video').click(function(){
  $('#video').addClass('active');
});

var firstScriptTag = $('script').first();
var tag = document.createElement('script');
var player;
tag.src = 'https://www.youtube.com/iframe_api';
$(firstScriptTag).after(tag);

function onYouTubeIframeAPIReady(){
  player = new YT.Player('video-frame', {
    height: '100%',
    width: '100%',
    videoId: 'Pul8lw7WRsw'
  });
};

var $tab = $('.course-payment');

$tab.find('[data-tab]').click(function() {

  var target = $(this).attr('data-tab');

  $tab.find('.btn').removeClass('active');
  $(this).addClass('active');

  $tab.find('.price-content').removeClass('active');
  $tab.find('.price-content' + target).addClass('active');

});

$('.reviews .slider-container').slick({
  dots: true,
  arrows: true,
  prevArrow: '.reviews .arrow-prev',
  nextArrow: '.reviews .arrow-next',
  infinite: false,
  speed: 500,
  autoplay: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$('.teacher-clients .slider-container').slick({
  dots: false,
  arrows: true,
  prevArrow: '.teacher-clients .arrow-prev',
  nextArrow: '.teacher-clients .arrow-next',
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 769,
      settings: {
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});

$('.certificates-example .slider-container').slick({
  dots: false,
  arrows: true,
  prevArrow: '.certificates-example .arrow-prev',
  nextArrow: '.certificates-example .arrow-next',
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1
});

// function mainSlideStyling() {
//   $('.certificates-example .slide').removeClass('active');
//   $('.certificates-example .slick-active').eq(1).addClass('active');
//   let sliderWidth = $('.certificates-example .slider-container').width() / 2;
//   $('.certificates-example .slick-active').css("width", sliderWidth + "px");
//   console.log(sliderWidth);
// };
// mainSlideStyling();
//
// $('.certificates-example .arrow-prev').click(function() {
//   mainSlideStyling();
// });
//
// $('.certificates-example .arrow-next').click(function() {
//   mainSlideStyling();
// });
