//メニューボタンクリック時のアクション
let $burger = document.getElementById("js_burger");
$burger.addEventListener('click',()=>{
  let $menu = document.getElementById("js_menu");
  let $logo = document.getElementById("js_logo");
  let $burgerTop = document.getElementById("js_burgerTop");
  let $burgerMiddle = document.getElementById("js_burgerMiddle");
  let $burgerBottom = document.getElementById("js_burgerBottom");
  let $body = document.getElementById("js_body");

  $menu.classList.toggle("js_fadeIn");
  $logo.classList.toggle("js_invisible");
  $burgerMiddle.classList.toggle("hamburger__middle--open");
  $burgerTop.classList.toggle("hamburger__top--open");
  $burgerBottom.classList.toggle("hamburger__bottom--open"); 
  $body.classList.toggle("js_overflowHidden");

  //スクロールサインをメニューページを開いた時に消す。(homeページのみ適用)
  if (document.URL.match('index')){
    let $scrollSign = document.getElementById("js_scrollSign");
    $scrollSign.classList.toggle("js_displayNone");
  }

 // メニュー画面からメイン画面に戻った時のメニューボタンのアニメーション実行 
  let isOpen = $burgerMiddle.classList.contains('hamburger__middle--open'); 
  if(!isOpen){
    $burgerBottom.classList.add('hamburger--close');
    $burgerTop.classList.add('hamburger--close');
  }else{
    $burgerBottom.classList.remove('hamburger--close');
    $burgerTop.classList.remove('hamburger--close');
  }

  //音声読み上げ用のメニューボタンの開閉状態の切り替え。
  let x = $burger.getAttribute("aria-expanded");
  if(x == "true"){
    x = "false"
  }else{
    x = "true"
  }
  $burger.setAttribute("aria-expanded", x);

})

//スクロール時のページトップへ戻るボタンの表示/非表示と
//メニューバーの背景色の変化
let $nav = document.getElementById("js_nav");
let $toPageTop = document.getElementById("js_toPageTop");
document.onscroll = function(){
  if(window.pageYOffset > 50){
    $nav.classList.add("js_navScrollColor");
    $toPageTop.classList.add("js_displayBlock");
  } else{
    $nav.classList.remove("js_navScrollColor");
    $toPageTop.classList.remove("js_displayBlock");
  }
}

//ページトップへ戻るボタンのアニメーション
$toPageTop.addEventListener('click', function toTop(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})
