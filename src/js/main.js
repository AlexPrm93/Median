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
}

// $('#payment-range').on('input', function() {
//   console.log('11111111111');
// })

function paymentRange() {
  const val = $('#payment-range').val();
  $('#payment-range').css({'background-image': 'linear-gradient(to right, @main-color 0%, @main-color ' + val + ', #a6a6a6 ' + val + ', #a6a6a6 100%)'});
}
