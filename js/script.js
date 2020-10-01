
$(function (){
$('#nav-content a[href]').on('click', function(event) {
       $('#nav-close').trigger('click');
   });
});





$(function () {
    setTimeout('seagull()'); //アニメーションを実行
});

function seagull() {
    $('.seagull').animate({
        marginTop: '-=10px'
    }, 800).animate({
        marginTop: '+=10px'
    }, 800);
    setTimeout('seagull()', 1600); //アニメーションを繰り返す間隔
}

$(window).on('load scroll', function (){

  var aboutitem = $('.fadeIn');
  var animated = 'animated';

  aboutitem.each(function(){

    var aboutitemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    //画面内のどの位置で処理を実行するかで「100」の値を変更
    if(scrollPos > aboutitemOffset - wh + 100 ){
      $(this).addClass(animated);
    }
  });
});
