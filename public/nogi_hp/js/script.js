/*==============================================
スクロールアニメーション(Loading)
================================================*/
const targetElement = document.querySelectorAll(".animationTarget");
console.log("画面の高さ", window.innerHeight)
document.addEventListener("scroll", function () {
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .6
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    }
  }
})


/*==============================================
テキストのカウントアップとバーの設定(Loading)
================================================*/
var bar = new ProgressBar.Line(splash_text, {//id名を指定
  easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutを指定
  duration: 1500,//時間指定(1000＝1秒)
  strokeWidth: 0.9,//進捗ゲージの太さ
  color: '#481459',//進捗ゲージのカラー
  trailWidth: 0.9,//ゲージベースの線の太さ
  trailColor: '#fff',//ゲージベースの線のカラー
  text: {//テキスト形状を直接指定				
    style: {//天地中央に配置
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: '0',
      margin: '-30px 0 0 0',
      transform: 'translate(-50%,-50%)',
      'font-size': '1rem',
      color: '#481459',
    },
    autoStyleContainer: false //自動付与のスタイルを切断
  },
  step: function (state, bar) {
    bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
  }
});


/*==============================================
アニメーションスタート(Loading)
================================================*/
bar.animate(1.0, function () {//バーを描画する割合指定 1.0 なら100%まで描画
  $("#splash_text").fadeOut(10);//フェードアウトでローディングテキスト削除
  $(".loader_cover-up").addClass("coveranime");//カバーが上に上がるクラス追加
  $(".loader_cover-down").addClass("coveranime");//カバーが下に下がるクラス追加
  $("#splash").fadeOut();//#splashエリアをフェードアウト
});



/*=============================================
sclool animastion
===============================================*/
function PageTopCheck() {
  var winScrollTop = $(this).scrollTop();
  var secondTop = $("#official").offset().top - 150; 
  if (winScrollTop >= secondTop) {
    $('.js-scroll').removeClass('scroll-view');//.js-scrollからscroll-viewクラスを除去
    $('.js-pagetop').addClass('scroll-view');//.js-pagetopにscroll-viewクラスを付与
  } else {//元に戻ったら
    $('.js-scroll').addClass('scroll-view');//.js-scrollからscroll-viewクラスを付与
    $('.js-pagetop').removeClass('scroll-view');//.js-pagetopからscroll-viewクラスを除去
  }

}

//クリック時の動作
$('.scroll-top a').click(function () {
  var elmHash = $(this).attr('href'); //hrefの内容を取得
  if (elmHash == "#official") {
    var pos = $(elmHash).offset().top;
    $('body,html').animate({ scrollTop: pos }, pos);
  } else {
    $('body,html').animate({ scrollTop: 0 }, 500); //数字が大きくなるほどゆっくりスクロール
  }
  return false;//リンク自体の無効化
});

// 画面スクロール時に動作したい場合の記述
$(window).scroll(function () {
  PageTopCheck();/* スクロール時の動作関数を呼ぶ*/
});

//  ページのリロード後に動作する記述
$(window).on('load', function () {
  PageTopCheck();/* スクロール時の動作関数を呼ぶ*/
});

$(window).scroll(function () {
  fadeAnime();//複数のスクロールアニメーションを呼ぶ
});


/*===========================================================
複数のスクロールアニメーション
===========================================================*/
function fadeAnime() {
  // ふわっ（下から）
$('.fadeUpTrigger').each(function () { //fadeUpTriggerクラス
  var elemPos = $(this).offset().top - 50;
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight) {
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpクラスを追記
    console.log("数値",scroll)
  } else {
    $(this).removeClass('fadeUp');// 画面外に出たらfadeUpクラスを外す
  }
});

  // ふわっ（右から）
$('.fadeRightTrigger').each(function () { //fadeUpTriggerクラス名
  var elemPos = $(this).offset().top - 50;
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight) {
    $(this).addClass('fadeRight');// 画面内に入ったらfadeUpクラスを追記
    console.log("数値",scroll)
  } else {
    $(this).removeClass('fadeRight');// 画面外に出たらfadeUpクラスを外す
  }
});

  // ふわっ（左から）
$('.fadeLeftTrigger').each(function () { //fadeUpTriggerクラス
  var elemPos = $(this).offset().top - 50;
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight) {
    $(this).addClass('fadeLeft');// 画面内に入ったらfadeUpクラスを追記
    console.log("数値",scroll)
  } else {
    $(this).removeClass('fadeLeft');// 画面外に出たらfadeUpクラスを外す
  }
});

//パタッ（左上へ）
$('.flipLeftTopTrigger').each(function () { //flipLeftTopTriggerクラス
  var elemPos = $(this).offset().top - 50;
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight) {
    $(this).addClass('flipLeftTop');// 画面内に入ったらflipLeftTopクラスを追記
  } else {
    $(this).removeClass('flipLeftTop');// 画面外に出たらflipLeftTopクラスを外す
  }
  });

//パタッ（右上へ）
$('.flipRightTopTrigger').each(function () { //flipLeftTopTriggerクラス
  var elemPos = $(this).offset().top - 50;
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight) {
    $(this).addClass('flipRightTop');// 画面内に入ったらflipLeftTopクラスを追記
  } else {
    $(this).removeClass('flipRightTop');// 画面外に出たらflipLeftTopクラスを外す
  }
  });
}

