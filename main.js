$(document).ready(function(){
        $('.gnb>li').hover(function(){
            $('.sub').stop().slideDown();
        },function()
        {$('.sub').stop().slideUp()
    })

    setInterval(function(){
        $('.frame').animate({left : '-1200px'},function(){
            $('.frame>li').eq(0).appendTo(".frame")
            $('.frame').css({left : 0})
        })
    },3000)

    $('.tab>li').on('click',function(){
        $('.tab').find('li').removeClass('on');
        $('.content').find('div').removeClass('on');
        $(this).addClass('on')

        var conId = $(this).children('a').attr("href");
        $(conId).addClass('on');
    })

    $('#notice>ul>li').eq(0).on('click',function(){
        $('.popup').css('display','block')
    })
    $('.close').click(function(){
        $('.popup').css('display','none')
    })
})