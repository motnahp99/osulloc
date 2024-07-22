$(document).ready(function () {

    /* gotop */
    $(".gotop").hide();
    // 스크롤 위치가 100이상일 경우
    // 맨 위로 가기 버튼이 fadeIn
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".gotop").stop().fadeIn();
        }
        else {
            $(".gotop").stop().fadeOut();
        }
    }); // 스크롤 값이 500보다 클 때 .gotop을 보이게

    $(".gotop").click(function () {
        $("html").animate({
            scrollTop: 0
        }, 1000);
    }); // gotop을 눌렀을 때 맨 위로 올라가기

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1900 && $(this).scrollTop() < 3000) {
            $("body").addClass("on");
        }
        else {
            $("body").removeClass("on");
        }
    }); // 스크롤 위치에 따른 클래스토글

    /* #main_banner */
    const mb = new Swiper('.mb', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            clickable: true,
        },
    });

    /* play, pause 버튼 */
    $(".play").hide();
    // .pause를 클릭했을 때
    // mb슬라이드의 자동재생(autoplay)을 멈추어라
    $(".pause").click(function () {
        mb.autoplay.stop();
        $(".pause").hide();
        $(".play").show();
    });
    $(".play").click(function () {
        mb.autoplay.start();
        $(".pause").show();
        $(".play").hide();
    });

    /* #news */
    const news = new Swiper('.news', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1000,
        direction: "vertical", // 수직 슬라이드
    });

    /* #prd */
    const prd_list = new Swiper('.prd_list', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1000,
        slidesPerView: "1.5",
        spaceBetween: 20,
        breakpoints: {
            768: { //min-width 768px 이상에서 보이는 개수
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1400: { //min-width 1400px 이상에서 보이는 개수
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            dragSize: 200,
            draggable: true,
        },

    });

    $(".prd_list li a img:nth-child(2)").hide();

    $(".prd_list li").hover(function () {
        $(this).find("img:nth-child(2)").stop().fadeToggle();
    });

    /* #teaware */
    // .tab_btn li 1,2,3,4를 클릭했을 때
    // .tab_img li 1,2,3,4를 보여라(형제들은 숨겨라)
    /* $(".tab_img li:not(:first-child)").hide();

    $(".tab_btn li:nth-child(1)").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        $(".tab_img li:nth-child(1)").fadeIn().siblings().fadeOut();
    });
    $(".tab_btn li:nth-child(2)").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        $(".tab_img li:nth-child(2)").fadeIn().siblings().fadeOut();
    });
    $(".tab_btn li:nth-child(3)").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        $(".tab_img li:nth-child(3)").fadeIn().siblings().fadeOut();
    });
    $(".tab_btn li:nth-child(4)").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        $(".tab_img li:nth-child(4)").fadeIn().siblings().fadeOut();
    }); */

    $(".tab_btn li").click(function () {
        let idx = $(this).index(); // .tab_btn li 클릭한 요소 번호 찾기
        $(this).addClass("on").siblings().removeClass("on"); // 탭 클릭 시 호버
        $(".tab_img li").eq(idx).stop().fadeIn().siblings().stop().fadeOut();
    });

    $(".museum_list li:nth-child(1)").addClass("active");
    $(".museum_list li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
});