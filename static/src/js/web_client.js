odoo.define('oejia.WebClient', function (require) {
"use strict";

var core = require('web.core');
var session = require('web.session');
var Menu = require('oejia.Menu');
var AbstractWebClient = require('web.AbstractWebClient');
var WebClient = require('web.WebClient');
var data_manager = require('web.data_manager');

WebClient.include({
    
    do_reload: function () {   
        var self = this;       
        return session.session_reload().then(function () {
            session.load_modules(true).then(function(){
                self.menu.proxy('do_reload');self.menu0.proxy('do_reload')
			});  
        });                    
    },
	instanciate_menu_widgets: function () {
        var self = this;       
        this.menu = new Menu(this);     
        this.menu.setElement($('.oe_application_menu_placeholder'));
		this.menu.on('menu_click', this, this.on_menu_action);
		//return this._super.apply(this, arguments);
		return this.menu.load_systray_menu().then(function(){
            self.menu.start();
        });

	},

    on_menu_action: function(options) {
        var self = this;
        return this.menu_dm.add(data_manager.load_action(options.action_id))
            .then(function (result) {
                return self.action_mutex.exec(function() {
                    var completed = $.Deferred();
                    $.when(self.action_manager.do_action(result, {
                        clear_breadcrumbs: true,
                        action_menu_id: self.menu.current_menu,
                    })).fail(function() {
                        self.menu.open_menu(options.previous_menu_id);
                    }).always(function() {
                        completed.resolve();
                    }); 
                    setTimeout(function() {
                        completed.resolve();
                    }, 2000);
                    // We block the menu when clicking on an element until the action has correctly finished
                    // loading. If something crash, there is a 2 seconds timeout before it's unblocked.
                    return completed;
                }); 
            }); 
    },

    toggle_fullscreen: function(fullscreen) {
        this._super(fullscreen);
        if (!fullscreen) {
            this.menu.reflow();
        }
    },

});

});
