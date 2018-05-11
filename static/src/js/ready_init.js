$(document).ready(function() {
    $('.hide_secondary').hide();
    $('.oe_secondary_menu_section').click(function() {
        if ($(this).attr('class') == 'oe_secondary_menu_section open_menu') {
            $('.oe_secondary_menu_section').removeClass('open_menu');
            $('.hide_secondary').hide();
        } else {
            $('.oe_secondary_menu_section').removeClass('open_menu');
            $('.hide_secondary').hide();
            next_element = $(this).next();
            if (next_element && next_element.attr('class') && next_element.attr('class') == 'oe_secondary_submenu nav nav-pills nav-stacked hide_secondary') {
                next_element.show();
                $(this).addClass('open_menu');
            }
        }
    });
    $('.oe_application_menu_placeholder').click(function() {
        $('.hide_secondary').css('display', 'none');
    })

});
