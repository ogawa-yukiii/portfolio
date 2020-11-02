$(document).ready(function() {
  $(function() {
    $("#slide img:not(:first-child)").hide();
    setInterval(function(){
      $("#slide img:first-child").fadeOut(1500)
      .next("img").fadeIn(1800).end().appendTo("#slide");
    }, 6000);
  });

  // $(function (){
    $("#to-top a").click(function (){
      $("body,html").animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  // });

  // $(function(){
     $(".dropdown").hide();
     $(".btn-more").click(function(){
          $(".triger").prev().slideToggle();
          $(this).toggleClass("close");
     });
// });

});
