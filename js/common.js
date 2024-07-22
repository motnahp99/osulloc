$(document).ready(function () {

    //depth2
    $(".depth2, .depth2_bg").hide();
    $(".gnb>li").mouseenter(function () {
        $(this).find(".depth2").stop().fadeIn();
        $(".depth2_bg").stop().fadeIn();
    });
    $(".gnb>li").mouseleave(function () {
        $(this).find(".depth2").stop().fadeOut();
        $(".depth2_bg").stop().fadeOut();
    });

    //search
    $(".search").hide();
    $(".btn_search").click(function () {
        $(".search").stop().fadeIn()
    });
    $(".search_close").click(function () {
        $(".search").stop().fadeOut()
    });

    //all_gnb
    $(".all_wrap").hide();
    $(".btn_sitemap").click(function () {
        $(".all_wrap").stop().fadeIn()
    });
    $(".all_close").click(function () {
        $(".all_wrap").stop().fadeOut()
    });

    //language
    $(".language ul").hide();
    $(".language").click(function () {
        $(".language i").toggleClass("active");
        $(".language ul").slideToggle();
    });

    //popup
    $(".popup i").click(function () {
        $(".popup").slideUp();
    });

    $(".mdepth2").hide();
    $(".mgnb>li").click(function (e) {
        e.preventDefault(); //클릭 이벤트 방지
        $(this).find(".mdepth2").slideDown();
    });

    //mgnb
    $(".mgnb_wrap").hide();
    $(".btn_mgnb").click(function () {
        $(".mgnb_wrap").fadeIn();
    });
    $(".mgnb_close").click(function () {
        $(".mgnb_wrap").fadeOut();
    });

});