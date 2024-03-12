$(function(){
    //a링크 상단이동방지
     $("a").click(function(e) {
    e.preventDefault();
    });

     //💛팝업닫기 pc&mobile
    let popUp = $('.popup');
    let colseBtn = $('.popup_close');
    let colseMobile = $('.popup_mobile a');

    colseBtn.click(function(){
        popUp.css ({
            'display' : 'none'
        });
    });//colseBtn.click

    colseMobile.click(function(){
        popUp.css ({
            'opacity' : '0'
        });
    });//colseMobile.click

    //💛장바구니&2차메뉴
    let depth01 = $('.gnb_pc .depth01');
    let depth02 = $('.gnb_pc .depth02');

    depth01.mouseenter(function(){
        $(this).children().stop().slideDown();
    });//depth01.mouseenter

    depth01.mouseleave(function(){
        depth02.stop().slideUp();
    });//depth01.mouseleave
    
    let bigImage = $('.insta_big img');
    let smallItem = $('.samall_item');
    
    smallItem.mouseenter(function(){
        smallItem.find('img').css({
            opacity:'0.3',
        });

        $(this).find('img').css({
            opacity: '1',
        });

        let thisImage = $(this).find('img').attr('src');

        bigImage.attr('src', thisImage);
    });//smallItem.mouseenter

    //💛모바일메뉴
    let body = $('body');
    let depth01M = $('.gnb_mobile .depth01 > a');//1차메뉴
    let depth02M = $('.gnb_mobile .depth02');//2차메뉴

    let menuBtn = $('.mobile_btn');//메뉴버튼
    let nav =  $('.gnb_mobile');//메뉴

    menuBtn.click(function(){
        nav.slideToggle(600);
    });// menuBtn.click

    depth01M.click(function(){
        if($(this).next().css('display') === 'none') {
            depth02M.slideUp();
            $(this).next().slideDown();
        } else {
            $(this).next().slideUp();
        }
    });// depth01M.click

    var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 24,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween:10
        },

        480: {
            slidesPerView: 2,
            spaceBetween:10
        },
        
        767: {
            slidesPerView:3,
            spaceBetween:12
        },
        1024: {
            slidesPerView:3,
            spaceBetween:12
        }
    }
    });//.mySwiper

    var swiper = new Swiper(".image", {
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    });//.image Swiper

    //검색창
    let searchBtn = $('.depth01_search');
    let searchBox = $('.search_box');

    searchBtn.click(function(){
    if(searchBox.css('display') === 'none') {
        searchBox.css({
            'display' : 'block'
        }) 
    } else {
        searchBox.css({
            'display' : 'none'
        })
    }
    });//searchBtn.click
});//jquart end
