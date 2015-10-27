var mogl_success = function(result){
  console.log("success");
  console.log(result);
};

var mogl_error = function(result, stuff){
  $(".supported-cards--text").html(result)
  $(".supported-cards").fadeOut(function(){
    $(".supported-cards--text").fadeIn(function(){
      setTimeout(function(){
        $(".supported-cards--text").fadeOut(function(){
          $(".supported-cards").fadeIn()
        })
      }, 5000)
    })
  })

  $("supported-cards-container").html("Invalid card number")
  console.log("error");
  console.log(result);
};

$(document).ready(function(){
  $('input').iCheck({
    checkboxClass: 'icheckbox_square-blue'
  });
})

$(".btn__credit-card").attr('disabled', 'disabled')
$('input').iCheck('uncheck');

$('input').on('ifChecked', function(){
  $(".btn__credit-card").removeAttr('disabled')
  $(".btn__credit-card").css("background", "#3b95d2")
  $(".btn__credit-card").css("cursor", "pointer")
})

$('input').on('ifUnchecked', function(){
  $(".btn__credit-card").attr('disabled', 'disabled')
  $(".btn__credit-card").css("background", "#ddd")
  $(".btn__credit-card").css("cursor", "default")
})
