$(document).ready(function() {
    //$('.hide_secondary').hide();
    $('.oe_secondary_menu_section').click(function(e) {
        if (e.target.nodeName == 'A')return;
        if($(this).next('.hide_secondary').length==0){
            //e.preventDefault();
            //e.stopPropagation();
            $(this).find('a').click();
        }
        if ($(this).attr('class') == 'oe_secondary_menu_section open_menu') {
            $(this).removeClass('open_menu');
            //$('.oe_secondary_menu_section').removeClass('open_menu');
            $(this).next('.hide_secondary').hide();
        } else {
            if($('body').hasClass('oe_leftbar_open')){
                $('.oe_secondary_menu_section').removeClass('open_menu');
                $('.hide_secondary').hide();
            }
            next_element = $(this).next();
            if (next_element && next_element.attr('class') && next_element.attr('class') == 'oe_secondary_submenu nav nav-pills nav-stacked hide_secondary') {
                next_element.show();
                $(this).addClass('open_menu');
            }
        }
    });
    $('.oe_application_menu_placeholder').click(function() {
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
});
