(()=>{

  let $body = document.querySelector("body");
  let $nav = document.getElementById("nav-js");
  let $navMenu = document.getElementById("navMenu-js");
  let $logoMenuOpen = document.getElementById("logo-js")
  let $burger = document.getElementById("burger-js");
  let $burgerTop = document.getElementById("burger-top-js");
  let $burgerMiddle = document.getElementById("burger-middle-js");
  let $burgerBottom = document.getElementById("burger-bottom-js");

  // スマホ画面のナビゲーションボタンクリック時のアクション
  $burger.addEventListener('click', function(){
    $body.classList.toggle("overflow-hidden");
    $nav.classList.toggle("main-nav__wrapper--is-open")
    $logoMenuOpen.classList.toggle("logo--theme-color");
    $burgerTop.classList.toggle("hamburger__top--is-open");
    $burgerMiddle.classList.toggle("hamburger__middle--is-open");
    $burgerBottom.classList.toggle("hamburger__bottom--is-open");
    $navMenu.classList.toggle("main-nav__palm-menu--is-open");
    navAriaHidden();
    navAriaExpanded();
  })

  // スマホ画面メニューリンクボタンクリック時
  let $navMenuLink = document.getElementsByClassName("main-nav__palm-link");
  for(let i = 0; i < $navMenuLink.length; i++){
    $navMenuLink[i].addEventListener('click',function(){
      $body.classList.remove("overflow-hidden");
      $nav.classList.remove("main-nav__wrapper--is-open")
      $logoMenuOpen.classList.toggle("logo--theme-color");
      $burgerTop.classList.remove("hamburger__top--is-open");
      $burgerMiddle.classList.remove("hamburger__middle--is-open");
      $burgerBottom.classList.remove("hamburger__bottom--is-open");
      $navMenu.classList.remove("main-nav__palm-menu--is-open");
      navAriaHidden();
      navAriaExpanded();
    })
  }


  // フッターのドロップダウンのアイコンクリック時のアクション
  let $dropdownIcon = document.getElementById("dropdown-icon-js");
  let $dropdownIconMinus = document.getElementById("dropdown-icon-minus-js");
  $dropdownIcon.addEventListener("click",function(){
    $dropdownIcon.parentNode.nextElementSibling.classList.toggle("dropdown__contents--open");
    this.classList.toggle("dropdown__icon--open");
    $dropdownIconMinus.classList.toggle("dropdown__icon-minus");
    footerAriaExpanded();
  })

  function navAriaHidden(){
    let navMenuAriaHidden = $navMenu.getAttribute("aria-hidden");
    if(navMenuAriaHidden == "true"){
      navMenuAriaHidden = "false";
    }else{
      navMenuAriaHidden = "true";
    }
    $navMenu.setAttribute("aria-hidden", navMenuAriaHidden);
  }
  function navAriaExpanded(){
    let x = $burger.getAttribute("aria-expanded");
    if(x == "true"){
      x = "false";
    }else{
      x = "true"
    }
    $burger.setAttribute("aria-expanded", x);
  }
  function footerAriaExpanded(){
    let a = $dropdownIcon.getAttribute("aria-expanded");
    if(a == "true"){
      a = "false";
    }else{
      a = "true";
    }
    $dropdownIcon.setAttribute("aria-expanded", a);
  }


})();