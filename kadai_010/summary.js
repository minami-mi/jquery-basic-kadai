
$(function () {
  //「文字色変化」ボタンを押すと文字色がピンクになる
  $('#change-color').on('click', function() {
    $('#target').css('color', '#FFC0CB');
  });
  //「文字内容変化」ボタンを押すと「HELLO!!」に更新される
  $('#change-text').on('click', function() {
    $('#target').text('HELLO!!');
  });
  //「フェードアウト」ボタンを押すと文字が消える
  $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  });
  //「フェードイン」ボタンを押すと文字が出てくる
  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });
});