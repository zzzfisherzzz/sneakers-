var rus = $('#russia').html();
var eng = $('#england').html();
var active=$('.active').html()
$(document).ready(function(){
    
  $('.arrow').html(active);
  $('.arrow').click(function(){
   $('.arrow').toggleClass('icon'); $('.dropdown_language_list').toggleClass('open')
  })
  $('.dropdown_language_list').click(function(){
    if($(this).hasClass('active')){
      return false
    }else{
      $(this).addClass('active');
      $('.dropdown_language_list').not(this).removeClass('active');
     var list = $('.active').html();
      $('.arrow').html(list);
      $('.dropdown_language_list').removeClass("open");
      $('.arrow').removeClass('icon');
    }
   
  })
   
}) 




// Order Modal
$(document).ready(function() {
    $('.do-open').on('click', function() {
        $('#modal').css('display', 'block');
    });
    $('.do-close').on('click', function() {
        $('#modal, #thanks-modal').css('display', 'none');
    });
});

// Slider Limited Edition


$('.slider').slick({
    arrows: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
 });
  

//  Language




/*----------  Filter  ----------*/
$('#slick-buttons button').on('click', function(e){
  var filter = $(this).val();
  var key = "."+filter;
  
  $('.one-product__slider').slick('slickUnfilter');
  $('.one-product__slider').slick('slickFilter',key).slick('refresh');
  $('.one-product__sliders').slick('slickGoTo', 0);
  //$('#slick, #slick-thumbs').slick('resize');
  //$('#slick').slick('slickSetOption', 'asNavFor', $currentSliderNav, false);
  
  });


  // Slider | Product	
$('.one-product__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  infinite: true,
  focusOnSelect: true,
  fade: true,
  cssEase: 'linear',
});
  
  