$(function(){
  $('.tab').click(function(){
    $('.is-active').removeClass('is-active');
    $(this).addClass('is-active');
    $('.is-show').removeClass('is-show');
    // クリックしたタブからインデックス番号を取得
    const index = $(this).index();
    // クリックしたタブと同じインデックス番号をもつコンテンツを表示
    $('.panel').eq(index).addClass('is-show');

    //以下テスト中
    // $('.is-show').css('background-color', '#fff');
    // $('.is-show').addClass('test');   

    // $('.is-show').css('display', 'flex');
    // $('.is-show panel-right').css('flex', '1');
    // $('.is-show panel-left').css('flex', '1');
  });
});
