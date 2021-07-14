(() =>{
  $(document).ready(function(){
    // 小さい画面のメニューボタンクリック時のアクション
    $(".hamburger").on("click",function(){
        $(".hamburger__content").toggleClass('hamburger__action');
        $(".mainNav__menuSp").stop().slideToggle();
        $("body").toggleClass('overflow__hidden');
        ariaExpand();
    })

    // 小さい画面のメニューリンククリック時の動作
    $(".mainNav__linkSp").on("click",function(){
        $(".hamburger__content").toggleClass('hamburger__action');
        $(".mainNav__menuSp").stop().slideToggle();
        $("body").toggleClass('overflow__hidden');
        ariaExpand();
        let adjust = -30;
        let speed = 400;
        let href= $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top + adjust;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    })
    // スクリーンリーダー用のメニュー開閉の表示
    function ariaExpand(){
        let a = $(".hamburger").attr("aria-expanded");
        let b = $(".hamburger").attr("aria-label");
        if(a == "false"){
            a = 'true';
            b = 'menu button. click to close'
        }else{
            a = 'false';
            b = 'menu button. click to open'
        }
        $(".hamburger").attr("aria-expanded",a);
        $(".hamburger").attr("aria-label",b);
    }
})
})();