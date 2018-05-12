odoo.define('web.backend_oejia_theme', function(require) {
    "use strict";

    var core = require('web.core');
    var session = require('web.session');
    var Menu = require('web.Menu');
    var web_client = require('web.web_client');

    $(document).ready(function() {
        $(".navbar-toggle").before("<span class='btn fa fa-bars' id='menu-toggle'></span>")

        $('#menu-toggle').click(
            function(e) {
                e.preventDefault(); // prevent the default action
                e.stopPropagation(); // stop the click from bubbling
                if(!$('body').hasClass('oe_leftbar_open')){
                    $('.o_sub_menu_logo').hide()
                    $('.hide_secondary').hide();
                    $('.oe_secondary_menu_section').removeClass('open_menu');
                }else{
                    $('.o_sub_menu_logo').show();
                }
                $('body').toggleClass('oe_leftbar_open');
            });
    });
});

