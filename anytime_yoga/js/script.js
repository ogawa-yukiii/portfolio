$(window).scroll(function() {
  var now = $(window).scrollTop();
  if (now > 200) {
    $(".pagetop").fadeIn("slow");
  } else {
    $(".pagetop").fadeOut("slow");
  }
});

$('#nav-content a[href]').on('click', function(event) {
       $('#nav-close').trigger('click');
   });


var control = true;

$(function(){
  $(".faq-1 dt").click(function(){
      if (control==true) {
        control = false;

        $(".faq-1 dd").slideToggle(300, () => {control=true;});
        $(".faq-1 dt").toggleClass("close", 300);
    }
  });
  $(".faq-2 dt").click(function(){
      if (control==true) {
        control = false;

        $(".faq-2 dd").slideToggle(300, () => {control=true;});
        $(".faq-2 dt").toggleClass("close", 300);
    }
  });
  $(".faq-3 dt").click(function(){
      if (control==true) {
        control = false;

        $(".faq-3 dd").slideToggle(300, () => {control=true;});
        $(".faq-3 dt").toggleClass("close", 300);
    }
  });
});
