$(document).ready(function() {

    $(".navbar-toggle").before("<span class='btn fa fa-bars' id='menu-toggle'></span>")

    $('#menu-toggle').click(
        function(e) {
            e.preventDefault(); // prevent the default action
            e.stopPropagation(); // stop the click from bubbling
            if(!$('body').hasClass('oe_leftbar_open')){
                $('.o_sub_menu_logo').hide();
                $('.o_sub_menu_footer').hide();
                $('.hide_secondary').hide();
                $('.oe_secondary_menu_section').removeClass('open_menu');
            }else{
                $('.o_sub_menu_logo').show();
                $('.o_sub_menu_footer').show();
            }
            $('body').toggleClass('oe_leftbar_open');
        });


    //$('.hide_secondary').hide();
    $('.oe_secondary_menu_section').click(function(e) {
        if (e.target.nodeName == 'A')return;//二级菜单无子菜单时
        if($(this).next('.hide_secondary').length==0){
            //e.preventDefault();
            //e.stopPropagation();
            $(this).find('a').click();
        }
        if ($(this).attr('class') == 'oe_secondary_menu_section open_menu') {
            //点击二级菜单关闭其子菜单
            $(this).removeClass('open_menu');
            //$('.oe_secondary_menu_section').removeClass('open_menu');
            $(this).next('.hide_secondary').hide();
        } else {
            //点击缩小的二级菜单时默认关闭此菜单及其子菜单的显示
            if($('body').hasClass('oe_leftbar_open')){
                $('.oe_secondary_menu_section').removeClass('open_menu');
                $('.hide_secondary').hide();
            }
            next_element = $(this).next();
            //点击二级菜单展开其子菜单
            if (next_element && next_element.attr('class') && next_element.attr('class') == 'oe_secondary_submenu nav nav-pills nav-stacked hide_secondary') {
                next_element.show();
                $(this).addClass('open_menu');
            }
        }
    });
    $('.oe_application_menu_placeholder').click(function() {
        // 当点击主菜单时
        //$('.hide_secondary').css('display', 'none');
    })

/*
    $(".oe_secondary_menu_section").hover(function(){
        if($('body').hasClass('oe_leftbar_open')){
            $(this).click();
        }
    },function(){
        if($('body').hasClass('oe_leftbar_open')){
            $(this).click();
        }
    });
*/
    $('ul.oe_secondary_submenu a.oe_menu_leaf').click(function() {
        //点击非二级菜单的叶子菜单a
        if($('body').hasClass('oe_leftbar_open')){
            $('.oe_secondary_menu_section').removeClass('open_menu');
            $('.hide_secondary').hide();
        }
    })
});
