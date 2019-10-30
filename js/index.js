$(function(){
    $('.billboard .phase').css({ "left" : 100 },2000);
    $('.billboard .phase').css({ "opacity" : 1 },2000);  
    $('.billboard .phase2').css({ "opacity" : 1 },2000);  
    $('.billboard .phase2').css({ "top" : '38%' },1000);  
    
    // 스크롤 시 네비게이션 바 변화
    $(window).scroll(function(){
        var num = $(this).scrollTop();  // 스크롤값
        if( num > 60 ){
            $('.nav-gnb').addClass('active');
            $('.logo img').attr({'src':'img/logo.png'},2000)    
        }
        else if(num < 60){
            $('.logo img').attr('src','img/logo8.png')
            $('.nav-gnb').removeClass('active');
        }
    });
    
    // skill 드롭다운
    $('.menu .box a').click(function(e){
        e.preventDefault();
        
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).next().slideUp();
            $('.click_here').show(1000);
        }else{
            $('.menu .box a').removeClass();
            $('.menu .box .sub').slideUp();
            $(this).addClass('active');
            $(this).next().slideDown();
            $('.click_here').hide();
        }
    })

    // 스크롤했을때 메뉴 활성화
    $(window).scroll(function(){
        var i = $(this).scrollTop();
        
        var bb =$('.billboard').height();
        var about =$('#about').height();
        var skill =$('#skill').height();
        var pf = $('#portfolio').height();
        var contact =$('#contact').height();
        
        if( i <= 600 ){
            $('.menu li').removeClass('active');
        }else if(i <= 1400){//about 클릭했을때
            $('.menu li').removeClass('active');
            $('#bt1').addClass('active');
        }else if( i <= 2200){//skill 클릭했을때
            $('.menu li').removeClass('active');
            $('#bt2').addClass('active');
        }else if( i <= 2800){
            $('.menu li').removeClass('active');
            $('#bt3').addClass('active');
        }else if(i <= 3300){
            $('.menu li').removeClass('active');
            $('#bt4').addClass('active'); 
        }
    })

   

    // 각 영역으로 이동
    $('#bt1').click(function(){
        var offset = $('#about').offset();
        $('.menu li').removeClass('active');
        $('#bt1').addClass('active');
        $('html').animate({scrollTop : offset.top}, 400);
    });
    $('#bt2').click(function(){
        var offset = $('#skill').offset();
        $('.menu li').removeClass('active');
        $('#bt2').addClass('active');
        $('html').animate({scrollTop : offset.top}, 400);
    });
    $('#bt3').click(function(){
        var offset = $('#portfolio').offset();
        $('.menu li').removeClass('active');
        $('#bt3').addClass('active');
        $('html').animate({scrollTop : offset.top}, 400);
    });
    $('#bt4').click(function(){
        var offset = $('#contact').offset();
        $('.menu li').removeClass('active');
        $('#bt4').addClass('active');
        $('html').animate({scrollTop : offset.top}, 400);
    });


    $('.go-top').hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.go-top').fadeIn();
        }else {
            $('.go-top').fadeOut();
        }
    });
    $('.go-top').click(function(){
        $('html').animate({scrollTop : 0}, 400);
    });

})