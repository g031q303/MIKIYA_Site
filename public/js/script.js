/*===========================================================
クリック時に円形背景が拡大（上から）
===========================================================*/
$(".openbtn").click(function () {
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
});

$("#g-nav a").click(function () {
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
    $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
});


/*===========================================================
リンクボタン、クリック時に形状変化
===========================================================*/
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 100){
		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveクラスを除く
		$('#page-top').addClass('UpMove');//#page-topについているUpMoveクラスを付与
	}else{
		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveクラスがついている場合
			$('#page-top').removeClass('UpMove');//UpMoveクラスを除き
			$('#page-top').addClass('DownMove');//DownMoveクラスを#page-topに付与
		}
	}
}

// #page-topをクリック時
$('#page-top').click(function () {
	var scroll = $(window).scrollTop(); //スクロール値取得
	if(scroll > 0){
		$(this).addClass('floatAnime');//クリックしたらfloatAnimeクラスが付与
        $('body,html').animate({
            scrollTop: 0
        }, 800,function(){//スクロールの速さ。数字が大きくなるほど遅く
            $('#page-top').removeClass('floatAnime');//上までスクロールしたらfloatAnimeクラスを除く
        });	
	}
    return false;//リンク自体の無効化
});


/*===========================================================
横移動させ全画面表示
===========================================================*/
	$('.slider').slick({
		autoplay: true,//自動的に動作。初期値はfalse。
		autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
		speed:500,//スライドスピード。初期値は300。
		infinite: true,//スライドのループ。初期値はtrue。
		slidesToShow: 1,//スライド画面を3枚
		slidesToScroll: 1,//1回のスクロールで3枚の写真を移動
		arrows:false,//左右の矢印なし
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
    pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
    $('.slider').slick('slickPlay');
});


/*===========================================================
複数画像のスライドショー
===========================================================*/
	$('.slider2').slick({
		arrows: false,//左右の矢印はなし
		autoplay: true,//自動的に動作。初期値はfalse。
		autoplaySpeed: 0,//自動的に動作待ち時間。初期値は3000。
		speed: 6900,//スライドスピード。初期値は300。
		infinite: true,//スライドのループ。初期値はtrue。
		pauseOnHover: false,//オンマウスでスライドを一時停止。初期値はtrue。
		pauseOnFocus: false,//フォーカス時にスライドを一時停止。初期値はtrue。
		cssEase: 'linear',//動き方。初期値はease。スムースな動きはlinear。
		slidesToShow: 4,//スライドを画面に4枚
		slidesToScroll: 1,//1回のスライドで動かす要素数
		responsive: [
			{
			breakpoint: 769,//モニターの横幅が769px以下の場合
			settings: {
				slidesToShow: 2,//画面にスライドを2枚
			}
		},
		{
			breakpoint: 426,//モニターの横幅が426px以下の場合
			settings: {
				slidesToShow: 1.5,//画面にスライドを1.5枚
			}
		}
	]
	});


/*===========================================================
複数のスクロールアニメーション
===========================================================*/
function fadeAnime(){
    
    //ふわっ(その場で)
    $('.fadeInTrigger').each(function(){ //fadeInTriggerクラス
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeIn');// 画面内に入ったらfadeInクラスを追記
		}else{
		$(this).removeClass('fadeIn');// 画面外に出たらfadeInクラスを外す
		}
		});
    //ふわっ(下から)
	$('.fadeUpTrigger').each(function(){ //fadeUpTriggerクラス
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeUp');// 画面内に入ったらfadeUpクラスを追記
		}else{
		$(this).removeClass('fadeUp');// 画面外に出たらfadeUpクラスを外す
		}
		});

	//パタッ(左上へ)
	$('.flipLeftTopTrigger').each(function(){ //flipLeftTopTriggerクラス
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('flipLeftTop');// 画面内に入ったらflipLeftTopクラスを追記
		}else{
		$(this).removeClass('flipLeftTop');// 画面外に出たらflipLeftTopクラスを外す
		}
		});
    
    //パタッ(右上へ)
    $('.flipRightTopTrigger').each(function(){ //flipRightTopTriggerクラス名
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('flipRightTop');// 画面内に入ったらflipRightTopクラスを追記
		}else{
		$(this).removeClass('flipRightTop');// 画面外に出たらflipRightTopクラスを外す
		}
		});
	
	//ボンッ（拡大）
	$('.zoomInTrigger').each(function(){ //zoomInTriggerクラス
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('zoomIn');// 画面内に入ったらzoomInクラスを追記
		}else{
		$(this).removeClass('zoomIn');// 画面外に出たらzoomInクラスを外す
		}
		});	
}


/*===========================================================
PNG アニメーション（APNG）
===========================================================*/
APNG.ifNeeded().then(function () {
	var images = document.querySelectorAll(".apng-image");
	for (var i = 0; i < images.length; i++) APNG.animateImage(images[i]);
});


/*===========================================================
プロフィールのマウスオーバー時の処理
===========================================================*/
function mouseOn() {
	var obj = document.getElementById("img1");
	obj.src = "img/concept.png";
}

function mouseOff() {
	var obj = document.getElementById("img1");
	obj.src = "img/concept1.png";
}


/*===========================================================
モーダルウィンドウの表示
===========================================================*/
$(".info").modaal({
	overlay_close: true,
	before_open: function () {// モーダルが開く前に行う
		$('html').css('overflow-y', 'hidden');//縦スクロールバーを出さない
	},
	after_close: function () {// モーダルが閉じた後に行う
		$('html').css('overflow-y', 'scroll');//縦スクロールバーを出す
	}
});


/*===========================================================
画像をクリックしたら現れる画面の設定
===========================================================*/	
$(".gallery-list").modaal({
	fullscreen:'true', //フルスクリーンモード
	before_open:function(){// モーダルが開く前に行う動作
		$('html').css('overflow-y','hidden');//縦スクロールバーを出さない
	},
	after_close:function(){// モーダルが閉じた後に行う動作
		$('html').css('overflow-y','scroll');//縦スクロールバーを出す
	}
});


/*===========================================================
関数まとめ
===========================================================*/
// 画面スクロール時に動作したい場合の記述
$(window).scroll(function () {
    PageTopAnime();//リンクボタンをクリック時、形状が変化
	fadeAnime();//複数のスクロールアニメーションの関数を呼ぶ
});


// ページのリロード後に動作する記述
$(window).on('load',function(){
	
  $("#splash-logo").delay(1200).fadeOut('slow');//ロゴが1.2秒でフェードアウト

    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSを記述
		$("#splash").delay(1500).fadeOut('slow',function(){
        
			$('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
		
        var h = $(window).height();//ブラウザの高さ取得
			$(".splashbg").css({
				"border-width":h,//ボーダーの太さにブラウザの高さ代入
				"animation-name":"backBoxAnime"//animation-nameを定義
			});	

        PageTopAnime();//リンクボタン、クリック時の関数を呼ぶ
    
    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSJSを記述

  /*===========================================================
  背景色が四角に拡大（四隅へ）
  ===========================================================*/
    //=====ここから背景が伸びた後に動かしたいJSをまとめる
    $('.splashbg').on('animationend', function() {        
        fadeAnime();//複数のスクロールアニメーションの関数を呼ぶ
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる
		
});// ここまでページが読み込まれたらすぐに動かしたい場合の記述