$(document).ready(function() {
  $(window).on('scroll', function () {
    var maxScroll = $('.paralaxscrollref').outerHeight() - $('.paralaxscroll').outerHeight()
    var scrollPos = $(document).scrollTop();
    if (scrollPos < maxScroll) {
      $('.paralaxscroll').css({
        top: scrollPos
      });
    }
   }).scroll();

  setInterval(function(){
    if($('li.first').hasClass('current')){
      $('li.first').removeClass('current')
      $('img.first').removeClass('current')
      $('li.second').addClass('current')
      $('img.second').addClass('current')
    }
    else if($('li.second').hasClass('current')){
      $('li.second').removeClass('current')
      $('img.second').removeClass('current')
      $('li.third').addClass('current')
      $('img.third').addClass('current')
    }
    else if($('li.third').hasClass('current')){
      $('li.third').removeClass('current')
      $('img.third').removeClass('current')
      $('li.first').addClass('current')
      $('img.first').addClass('current')
    }
  }, 5000);


  $('li.first').click(function(){
    $('li').removeClass('current')
    $('img').removeClass('current')
    $('li.first').addClass('current')
    $('img.first').addClass('current')
  })

  $('li.second').click(function(){
    $('li').removeClass('current')
    $('img').removeClass('current')
    $('li.second').addClass('current')
    $('img.second').addClass('current')
  })

  $('li.third').click(function(){
    $('li').removeClass('current')
    $('img').removeClass('current')
    $('li.third').addClass('current')
    $('img.third').addClass('current')
  })
})