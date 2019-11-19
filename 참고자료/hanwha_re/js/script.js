$(function () {
    var menu = 1
    var width = $(window).width();

    $('#gnb').mouseover(function () {
        $('#header').addClass('on');
    })
    $('#gnb').mouseout(function () {
        $('#header').removeClass('on');
    })
    
    $('.menubar').click(function () {
        width = $(window).width();
        // console.log(menu)
        if (menu == 1) {
            menu = 0;
            // console.log(menu+'눌렀');
            if (width > 1100) {
                $('.barTop').css({
                    'transform': 'translateY(11px) rotate(45deg)',
                    'transition': '0.3s',
                    'background-color': '#333'
                });
                $('.barMiddle').css({
                    'opacity': '0',
                    'transition': '0.3s'
                });
                $('.barBottom').css({
                    'transform': 'translateY(-11px) rotate(-45deg)',
                    'transition': '0.3s',
                    'background-color': '#333'
                });
            } else {
                $('.barTop').css({
                    'transform': 'translateY(8.5px) rotate(45deg)',
                    'transition': '0.4s',
                    'background-color': '#333'
                });
                $('.barMiddle').css({
                    'opacity': '0',
                    'transition': '0.4s'
                });
                $('.barBottom').css({
                    'transform': 'translateY(-8.5px) rotate(-45deg)',
                    'transition': '0.4s',
                    'background-color': '#333'
                });
            }

            $('#allMenu> div').css('right', '0');
            $('#allMenu').css({ 'right': '0' });
            $('#fp-nav').css('opacity', '0');
        } else {
            menu = 1;
            // console.log(menu+'안눌렀');
            $('.barTop').css({
                'transform': 'translateY(0) rotate(0deg)',
                'background-color': 'white'
            });
            $('.barMiddle').css({
                'opacity': '1',
                'background-color': 'white'
            });
            $('.barBottom').css({
                'transform': 'translateY(0) rotate(0deg)',
                'background-color': 'white'
            });
            $('#allMenu> div').css({ 'right': '-100%', 'transition': '0.5s' });
            $('#allMenu').css('right', '-100%');
            $('#fp-nav').css('opacity', '1');
        }
    })
    // 컨텐츠 페이드인
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        
    })
    // 슬릭 이미지 반응형 
    $('.slick').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        // arrows: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },{
                breakpoint: 756,
                settings: {
                    slidesToShow:1,
                    slidesToScroll: 1
                }
            }
            
        ]
    })
    // if( width <= 765){
    //     $('.explain').find('br').remove();
    //     // console.log($('.explain br'));
    // }else {

    // }
    // $(window).scroll(function(){
    //     var scroll = $(window).scrollTop();
    //     console.log(scroll)
    // })
    
    /////////////////// resize event///////////////////
    // $(window).resize(function () {
    //     // width = $(window).width();        

    // })
    /////////////////// resize event///////////////////
});