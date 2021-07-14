(()=>{
  let $hamburger = document.getElementById("js_hamburger");
  let $spMenu = document.getElementById("js_navMenuSp");
  let $burgerTop = document.getElementById("js_hamburgerTop");
  let $burgerMiddle = document.getElementById("js_hamburgerMiddle");
  let $burgerBottom = document.getElementById("js_hamburgerBottom");
  let $body = document.getElementById('body');

  //音声読み上げ用のメニューボタンの開閉状態の切り替え。
  function ariaExpand(){
    let x = $hamburger.getAttribute("aria-expanded");
    if(x == "true"){
      x = "false"
    }else{
      x = "true"
    }
    $hamburger.setAttribute("aria-expanded", x);
  }



  //小さい画面時のメニューボタンクリック時

  $hamburger.addEventListener('click',function(){
   
   $spMenu.classList.toggle('js_spMenuFadeIn');
   $burgerTop.classList.toggle('js_burgerSlideTop');
   $burgerMiddle.classList.toggle('js_burgerSlideMiddle');
   $burgerBottom.classList.toggle('js_burgerSlideBottom');
   $body.classList.toggle('js_overflowHidden');
   ariaExpand();
  })

  //小さい画面時のメニューリストのクリック時
  let $spMenuLink = $spMenu.getElementsByTagName('a');
  for(let i = 0; i < $spMenuLink.length; i++){
    $spMenuLink[i].addEventListener('click',function(){
      $burgerTop.classList.remove('js_burgerSlideTop');
      $burgerMiddle.classList.remove('js_burgerSlideMiddle');
      $burgerBottom.classList.remove('js_burgerSlideBottom');
      $body.classList.remove('js_overflowHidden');
      $spMenu.classList.remove('js_spMenuFadeIn');
      ariaExpand();
      console.log('clicked');
    })
  }

  //メニューバーのスクロール
  let $nav =  document.getElementById('js_nav');
  let $pagetop = document.getElementById('js_pagetop');
  setInterval(function(){
    let pagetopPosY = $pagetop.getBoundingClientRect().bottom;
    if(window.pageYOffset > pagetopPosY + window.pageYOffset){
      $nav.classList.add('js_navScroll');
    }else{
      $nav.classList.remove('js_navScroll');
    }
  },100)
  
})();