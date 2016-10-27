/*  Mondido mondido.payment.js v2.0, (c) Mondido Payments AB 2016, hello@mondido.com */

/** * bootstrap.js v3.0.0 by @fat and @mdo * Copyright 2013 Twitter Inc.  * http://www.apache.org/licenses/LICENSE-2.0 */
if(!jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(window.jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]');if(a.length){var b=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");"radio"===b.prop("type")&&a.find(".active").removeClass("active")}this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(window.jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("dropdown");d||c.data("dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(window.jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(window.jQuery);

// Mondido settings
(function($) {

  var do_log = function(str) {
    if (window.console) {
      console.log(str);
    }
  };

  if (mondidoSettings.config.development == true) { do_log("Development mode is on");  }

  if (typeof Mondido === "undefined") {
    console.log("Error could not load Mondido object");
    Mondido = {
      token: "Mondido",
      transaction: {
        id: "0"
      },
      merchant: {
        id: "0"
      }
    };
  }
  $_mondido_ssn_load_value = "";

  // Preload
  if (!isBlank(mondidoSettings.customer.name) && isBlank($('#input_card_holder').val())) {
    $('#input_card_holder').val(mondidoSettings.customer.name);
  }
  if (!isBlank(mondidoSettings.customer.phone) && isBlank($('#phone').val())) {
    $('#phone').val(mondidoSettings.customer.phone);
  }
  if (!isBlank(mondidoSettings.customer.phone) && isBlank($('#swish_number').val())) {
    $('#swish_number').val(mondidoSettings.customer.phone);
  }
  if (!isBlank(mondidoSettings.customer.email) && isBlank($('#email').val())) {
    $('#email').val(mondidoSettings.customer.email);
  }
  if (!isBlank(mondidoSettings.customer.billing.first_name) && isBlank($('#first_name').val())) {
    $('#first_name').val(mondidoSettings.customer.billing.first_name);
  }
  if (!isBlank(mondidoSettings.customer.billing.last_name) && isBlank($('#last_name').val())) {
    $('#last_name').val(mondidoSettings.customer.billing.last_name);
  }
  if (!isBlank(mondidoSettings.customer.billing.zip) && isBlank($('#zip').val())) {
    $('#zip').val(mondidoSettings.customer.billing.zip);
  }
  if (!isBlank(mondidoSettings.customer.billing.city) && isBlank($('#city').val())) {
    $('#city').val(mondidoSettings.customer.billing.city);
  }
  if (!isBlank(mondidoSettings.customer.billing.address1) && isBlank($('#address_1').val())) {
    $('#address_1').val(mondidoSettings.customer.billing.address1);
  }
  if (!isBlank(mondidoSettings.customer.billing.city) && isBlank($('#address_2').val())) {
    $('#address_2').val(mondidoSettings.customer.billing.address2);
  }

  setCountryCode(mondidoSettings.country_code);

  function setCountryCode(str) {
    mondidoSettings.country_code = str;
    $('#country_code').val(str);
  }

  switch (mondidoSettings.metadataCountry.toLowerCase()) {
    case 'sweden':
      setCountryCode('swe');
      break;
    case 'norway':
      setCountryCode('nor');
      break;
    case 'finland':
      setCountryCode('fin');
      break;
    default:
      setCountryCode('swe');
  }

})(jQuery);

/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2014 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.0
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(a.length<o.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a)},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});

// https://github.com/stripe/jquery.payment - 2.0.0
(function(){var t,e,n,r,a,o,i,l,u,s,c,h,p,g,v,f,d,m,y,C,T,w,$,D,S=[].slice,k=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};t=window.jQuery||window.Zepto||window.$,t.payment={},t.payment.fn={},t.fn.payment=function(){var e,n;return n=arguments[0],e=2<=arguments.length?S.call(arguments,1):[],t.payment.fn[n].apply(this,e)},a=/(\d{1,4})/g,t.payment.cards=r=[{type:"elo",patterns:[401178,401179,431274,438935,451416,457393,457631,457632,504175,506699,5067,509,627780,636297,636368,650,6516,6550],format:a,length:[16],cvcLength:[3],luhn:!0},{type:"maestro",patterns:[5018,502,503,506,56,58,639,6220,67],format:a,length:[12,13,14,15,16,17,18,19],cvcLength:[3],luhn:!0},{type:"forbrugsforeningen",patterns:[600],format:a,length:[16],cvcLength:[3],luhn:!0},{type:"dankort",patterns:[5019],format:a,length:[16],cvcLength:[3],luhn:!0},{type:"visa",patterns:[4],format:a,length:[13,16],cvcLength:[3],luhn:!0},{type:"mastercard",patterns:[51,52,53,54,55,22,23,24,25,26,27],format:a,length:[16],cvcLength:[3],luhn:!0},{type:"amex",patterns:[34,37],format:/(\d{1,4})(\d{1,6})?(\d{1,5})?/,length:[15],cvcLength:[3,4],luhn:!0},{type:"dinersclub",patterns:[30,36,38,39],format:/(\d{1,4})(\d{1,6})?(\d{1,4})?/,length:[14],cvcLength:[3],luhn:!0},{type:"discover",patterns:[60,64,65,622],format:a,length:[16],cvcLength:[3],luhn:!0},{type:"unionpay",patterns:[62,88],format:a,length:[16,17,18,19],cvcLength:[3],luhn:!1},{type:"jcb",patterns:[35],format:a,length:[16],cvcLength:[3],luhn:!0}],e=function(t){var e,n,a,o,i,l,u,s;for(t=(t+"").replace(/\D/g,""),o=0,l=r.length;l>o;o++)for(e=r[o],s=e.patterns,i=0,u=s.length;u>i;i++)if(a=s[i],n=a+"",t.substr(0,n.length)===n)return e},n=function(t){var e,n,a;for(n=0,a=r.length;a>n;n++)if(e=r[n],e.type===t)return e},p=function(t){var e,n,r,a,o,i;for(r=!0,a=0,n=(t+"").split("").reverse(),o=0,i=n.length;i>o;o++)e=n[o],e=parseInt(e,10),(r=!r)&&(e*=2),e>9&&(e-=9),a+=e;return a%10===0},h=function(t){var e;return null!=t.prop("selectionStart")&&t.prop("selectionStart")!==t.prop("selectionEnd")?!0:null!=("undefined"!=typeof document&&null!==document&&null!=(e=document.selection)?e.createRange:void 0)&&document.selection.createRange().text?!0:!1},$=function(t,e){var n,r,a,o,i,l;try{r=e.prop("selectionStart")}catch(u){o=u,r=null}return i=e.val(),e.val(t),null!==r&&e.is(":focus")?(r===i.length&&(r=t.length),i!==t&&(l=i.slice(r-1,+r+1||9e9),n=t.slice(r-1,+r+1||9e9),a=t[r],/\d/.test(a)&&l===""+a+" "&&n===" "+a&&(r+=1)),e.prop("selectionStart",r),e.prop("selectionEnd",r)):void 0},m=function(t){var e,n,r,a,o,i,l,u;for(null==t&&(t=""),r="０１２３４５６７８９",a="0123456789",i="",e=t.split(""),l=0,u=e.length;u>l;l++)n=e[l],o=r.indexOf(n),o>-1&&(n=a[o]),i+=n;return i},d=function(e){var n;return n=t(e.currentTarget),setTimeout(function(){var t;return t=n.val(),t=m(t),t=t.replace(/\D/g,""),$(t,n)})},v=function(e){var n;return n=t(e.currentTarget),setTimeout(function(){var e;return e=n.val(),e=m(e),e=t.payment.formatCardNumber(e),$(e,n)})},l=function(n){var r,a,o,i,l,u,s;return o=String.fromCharCode(n.which),!/^\d+$/.test(o)||(r=t(n.currentTarget),s=r.val(),a=e(s+o),i=(s.replace(/\D/g,"")+o).length,u=16,a&&(u=a.length[a.length.length-1]),i>=u||null!=r.prop("selectionStart")&&r.prop("selectionStart")!==s.length)?void 0:(l=a&&"amex"===a.type?/^(\d{4}|\d{4}\s\d{6})$/:/(?:^|\s)(\d{4})$/,l.test(s)?(n.preventDefault(),setTimeout(function(){return r.val(s+" "+o)})):l.test(s+o)?(n.preventDefault(),setTimeout(function(){return r.val(s+o+" ")})):void 0)},o=function(e){var n,r;return n=t(e.currentTarget),r=n.val(),8!==e.which||null!=n.prop("selectionStart")&&n.prop("selectionStart")!==r.length?void 0:/\d\s$/.test(r)?(e.preventDefault(),setTimeout(function(){return n.val(r.replace(/\d\s$/,""))})):/\s\d?$/.test(r)?(e.preventDefault(),setTimeout(function(){return n.val(r.replace(/\d$/,""))})):void 0},f=function(e){var n;return n=t(e.currentTarget),setTimeout(function(){var e;return e=n.val(),e=m(e),e=t.payment.formatExpiry(e),$(e,n)})},u=function(e){var n,r,a;return r=String.fromCharCode(e.which),/^\d+$/.test(r)?(n=t(e.currentTarget),a=n.val()+r,/^\d$/.test(a)&&"0"!==a&&"1"!==a?(e.preventDefault(),setTimeout(function(){return n.val("0"+a+" / ")})):/^\d\d$/.test(a)?(e.preventDefault(),setTimeout(function(){var t,e;return t=parseInt(a[0],10),e=parseInt(a[1],10),e>2&&0!==t?n.val("0"+t+" / "+e):n.val(""+a+" / ")})):void 0):void 0},s=function(e){var n,r,a;return r=String.fromCharCode(e.which),/^\d+$/.test(r)?(n=t(e.currentTarget),a=n.val(),/^\d\d$/.test(a)?n.val(""+a+" / "):void 0):void 0},c=function(e){var n,r,a;return a=String.fromCharCode(e.which),"/"===a||" "===a?(n=t(e.currentTarget),r=n.val(),/^\d$/.test(r)&&"0"!==r?n.val("0"+r+" / "):void 0):void 0},i=function(e){var n,r;return n=t(e.currentTarget),r=n.val(),8!==e.which||null!=n.prop("selectionStart")&&n.prop("selectionStart")!==r.length?void 0:/\d\s\/\s$/.test(r)?(e.preventDefault(),setTimeout(function(){return n.val(r.replace(/\d\s\/\s$/,""))})):void 0},g=function(e){var n;return n=t(e.currentTarget),setTimeout(function(){var t;return t=n.val(),t=m(t),t=t.replace(/\D/g,"").slice(0,4),$(t,n)})},w=function(t){var e;return t.metaKey||t.ctrlKey?!0:32===t.which?!1:0===t.which?!0:t.which<33?!0:(e=String.fromCharCode(t.which),!!/[\d\s]/.test(e))},C=function(n){var r,a,o,i;return r=t(n.currentTarget),o=String.fromCharCode(n.which),/^\d+$/.test(o)&&!h(r)?(i=(r.val()+o).replace(/\D/g,""),a=e(i),a?i.length<=a.length[a.length.length-1]:i.length<=16):void 0},T=function(e){var n,r,a;return n=t(e.currentTarget),r=String.fromCharCode(e.which),/^\d+$/.test(r)&&!h(n)?(a=n.val()+r,a=a.replace(/\D/g,""),a.length>6?!1:void 0):void 0},y=function(e){var n,r,a;return n=t(e.currentTarget),r=String.fromCharCode(e.which),/^\d+$/.test(r)&&!h(n)?(a=n.val()+r,a.length<=4):void 0},D=function(e){var n,a,o,i,l;return n=t(e.currentTarget),l=n.val(),i=t.payment.cardType(l)||"unknown",n.hasClass(i)?void 0:(a=function(){var t,e,n;for(n=[],t=0,e=r.length;e>t;t++)o=r[t],n.push(o.type);return n}(),n.removeClass("unknown"),n.removeClass(a.join(" ")),n.addClass(i),n.toggleClass("identified","unknown"!==i),n.trigger("payment.cardType",i))},t.payment.fn.formatCardCVC=function(){return this.on("keypress",w),this.on("keypress",y),this.on("paste",g),this.on("change",g),this.on("input",g),this},t.payment.fn.formatCardExpiry=function(){return this.on("keypress",w),this.on("keypress",T),this.on("keypress",u),this.on("keypress",c),this.on("keypress",s),this.on("keydown",i),this.on("change",f),this.on("input",f),this},t.payment.fn.formatCardNumber=function(){return this.on("keypress",w),this.on("keypress",C),this.on("keypress",l),this.on("keydown",o),this.on("keyup",D),this.on("paste",v),this.on("change",v),this.on("input",v),this.on("input",D),this},t.payment.fn.restrictNumeric=function(){return this.on("keypress",w),this.on("paste",d),this.on("change",d),this.on("input",d),this},t.payment.fn.cardExpiryVal=function(){return t.payment.cardExpiryVal(t(this).val())},t.payment.cardExpiryVal=function(t){var e,n,r,a;return a=t.split(/[\s\/]+/,2),e=a[0],r=a[1],2===(null!=r?r.length:void 0)&&/^\d+$/.test(r)&&(n=(new Date).getFullYear(),n=n.toString().slice(0,2),r=n+r),e=parseInt(e,10),r=parseInt(r,10),{month:e,year:r}},t.payment.validateCardNumber=function(t){var n,r;return t=(t+"").replace(/\s+|-/g,""),/^\d+$/.test(t)?(n=e(t),n?(r=t.length,k.call(n.length,r)>=0&&(n.luhn===!1||p(t))):!1):!1},t.payment.validateCardExpiry=function(e,n){var r,a,o;return"object"==typeof e&&"month"in e&&(o=e,e=o.month,n=o.year),e&&n?(e=t.trim(e),n=t.trim(n),/^\d+$/.test(e)&&/^\d+$/.test(n)&&e>=1&&12>=e?(2===n.length&&(n=70>n?"20"+n:"19"+n),4!==n.length?!1:(a=new Date(n,e),r=new Date,a.setMonth(a.getMonth()-1),a.setMonth(a.getMonth()+1,1),a>r)):!1):!1},t.payment.validateCardCVC=function(e,r){var a,o;return e=t.trim(e),/^\d+$/.test(e)?(a=n(r),null!=a?(o=e.length,k.call(a.cvcLength,o)>=0):e.length>=3&&e.length<=4):!1},t.payment.cardType=function(t){var n;return t?(null!=(n=e(t))?n.type:void 0)||null:null},t.payment.formatCardNumber=function(n){var r,a,o,i;return n=n.replace(/\D/g,""),(r=e(n))?(o=r.length[r.length.length-1],n=n.slice(0,o),r.format.global?null!=(i=n.match(r.format))?i.join(" "):void 0:(a=r.format.exec(n),null!=a?(a.shift(),a=t.grep(a,function(t){return t}),a.join(" ")):void 0)):n},t.payment.formatExpiry=function(t){var e,n,r,a;return(n=t.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/))?(e=n[1]||"",r=n[2]||"",a=n[3]||"",a.length>0?r=" / ":" /"===r?(e=e.substring(0,1),r=""):2===e.length||r.length>0?r=" / ":1===e.length&&"0"!==e&&"1"!==e&&(e="0"+e,r=" / "),e+r+a):""}}).call(this);

/* Mulang 1.2 -  Multi Language Template Plugin -  By Robert@mondido.com - Requires JQuery to work. -*/
function initMulang(n){var a={ignore_locale:!0};n&&(a.lang=n),$(".mulang").mulang(a)}function createLangSwitch(n){var a=$('<ul class="langswitch"></ul>'),l="";$(window.__mulang.languages).each(function(){l=window.__mulang.current===this.code?"active":"";var n=$('<a href="#" data-langcode="'+this.code+'">'+this.name+"</a>");n.addClass(l);var e=$("<li></li>");e.append(n),$(a).append(e)}),$(n).append(a),$(n).find("a").on("click",function(n){n.preventDefault,$(".langswitch .active").removeClass("active"),$(".mulang").mulang({lang:$(this).attr("data-langcode")}),$(this).addClass("active")})}!function($){var methods={init:function(n){},getCountry:function(n){var a=[{r:"(usa|united states|en_US)",c:"us",l:"en"},{r:"(austria|Ã¶sterreich|de_AT)",c:"at",l:"de"},{r:"(belgium|belgiÃ«|nl_BE)",c:"be",l:"nl"},{r:"(belgium|belgique|fr_BE)",c:"be",l:"fr"},{r:"(bulgaria|Ð‘ÑŠÐ»Ð³Ð°Ñ€Ð¸Ñ|bg_BG)",c:"bg",l:"en"},{r:"(croatia|hrvatska|hr_HR)",c:"hr",l:"en"},{r:"(czech republic|ÄeskÃ¡ republika|cs_CZ)",c:"cz",l:"en"},{r:"(cyprus|kÏÏ€ÏÎ¿Ï‚|el_CY)",c:"cy",l:"en"},{r:"(denmark|danmark|da_DK)",c:"dk",l:"da"},{r:"(estonia|eesti|et_EE)",c:"ee",l:"en"},{r:"(finland|suomi|fi_FI)",c:"fi",l:"fi"},{r:"(finland|finland|sv_FI)",c:"fi",l:"sv"},{r:"(france|france|fr_FR)",c:"fr",l:"fr"},{r:"(germany|deutschland|de_DE)",c:"de",l:"de"},{r:"(greece|eÎ»Î»Î¬Î´Î±|el_GR)",c:"gr",l:"en"},{r:"(hungary|magyarorszÃ¡g|hu_HU)",c:"hu",l:"en"},{r:"(ireland|ireland|en_IE)",c:"ie",l:"en"},{r:"(italy|italia|it_IT)",c:"it",l:"en"},{r:"(latvia|latvija|lv_LV)",c:"lv",l:"en"},{r:"(lithuania|lietuva|lt_LT)",c:"lt",l:"en"},{r:"(luxembourg|luxembourg|fr_LU)",c:"lu",l:"fr"},{r:"(luxembourg|luxemburg|de_LU)",c:"lu",l:"de"},{r:"(malta|malta|mt_MT)",c:"mt",l:"en"},{r:"(netherlands|nederland|nl_NL)",c:"nl",l:"nl"},{r:"(norway|norge|no_NO)",c:"no",l:"en"},{r:"(poland|polska|pl_PL)",c:"pl",l:"en"},{r:"(portugal|portugal|pt_PT)",c:"pt",l:"en"},{r:"(romania|romÃ¢nia|ro_RO)",c:"ro",l:"en"},{r:"(slovakia|slovensko|sk_SK)",c:"sk",l:"en"},{r:"(slovenia|slovenija|sl_SI)",c:"si",l:"en"},{r:"(spain|espaÃ±a|es_ES)",c:"es",l:"es"},{r:"(united kingdom|uk|en_GB)",c:"gb",l:"en"},{r:"(sweden|sverige|se_SE)",c:"se",l:"sv"}],l=[];return $(a).each(function(){var a=new RegExp(this.r,"gi"),e=n.match(a);e&&l.splice(e.length,0,this)}),l.length>0?l[l.length-1]:null}};$.fn.mulang=function(options){if(methods[options])return methods[options].apply(this,Array.prototype.slice.call(arguments,1));options||(options={}),options.fallback||(options.fallback="en");var do_log=function(n){window.console&&console.log(n)};if(options.lang?do_log("mulang is grabbing "+options.lang+" from options"):(options.lang=window.navigator.userLanguage||window.navigator.language,langFromData=$.fn.mulang("getCountry",options.data+" "+options.lang.replace("-","_")),langFromData&&(options.lang=langFromData.l),do_log("mulang is grabbing "+options.lang+" from browser and metadata"),options.ignore_locale&&(options.lang=options.lang.substr(0,options.lang.indexOf("-")),do_log("mulang is ignoring locale and using "+options.lang))),void 0===window.__mulang)return do_log("mulang languages file not loaded"),!1;if(!__mulang[options.lang]&&(do_log(options.lang+" is not found in mulang language file"),options.fallback&&(do_log("mulang is trying fallback language "+options.fallback),options.lang=options.fallback,!__mulang[options.lang])))return do_log(options.lang+" is not found in mulang language file"),!1;window.__mulang.current=options.lang;var find_ph=function(n){var a,l=/.*(\[.*]).*/;return null!==(a=l.exec(n))?(a.index===l.lastIndex&&l.lastIndex++,a[1]):null},contains_html=function(n){var a,l=/.*<.*>.*/;return null!==(a=l.exec(n))?!0:!1},parse_ph=function(str,arr_str){var arr=eval(arr_str);"[object Array]"!=Object.prototype.toString.call(arr)&&do_log("placeholder parameters for is not an Array ("+arr_str+")");for(var i=0;i<arr.length;i++)str=str.replace("{"+i+"}",arr[i]);return str};this.each(function(){var n=!1,a="mulang";if(void 0!==$(this).attr(a)&&(n=!0),!n&&(a="data-mulang",void 0===$(this).attr(a)))return!0;var l=$(this).attr(a),e="text",t=null;l.indexOf("[")>-1&&(t=find_ph(l),l=l.substr(0,l.indexOf("["))),l.indexOf(":")>-1&&(e=l.substr(l.indexOf(":")+1),l=l.substr(0,l.indexOf(":")));var r=__mulang[options.lang][l];void 0===r&&(r=$(this).attr(a)),null!==t&&(r=parse_ph(r,t)),"text"==e?contains_html(r)?$(this).html(r):$(this).text(r):$(this).attr(e,r)})}}(jQuery),$(".mulang").mulang({data:mondidoSettings.metadata}),createLangSwitch($("#languages"));

/* mondido lib 1.1*/
jQuery(function($) {
  $('#mondidoPaymentTab li').hide();

  var tarr = [];
  var lang = window.navigator.userLanguage || window.navigator.language;
  if (window.navigator.languages) {
    lang += ' ' + window.navigator.languages.toString();
  }
  var country = $.fn.mulang('getCountry', mondidoSettings.metadata + ' ' + lang.replace('-', '_'));
  var tab_active = 0;

  $(mondidoSettings.supportedPaymentMethods).each(function() {
    var name = this.name;
    var keep = false;

    if (this.active) {
      if ($.inArray('all', this.currencies) > -1 || $.inArray(mondidoSettings.currency, this.currencies) > -1) { // allowed currency
        if ($.inArray('all', this.countries) > -1 || $.inArray(country.c, this.countries) > -1) { // allowed country
          $('.' + name).show();
          keep = true;
        }
      }
      tab_active++;
    }

    if (keep) {
      tarr.push($($('.' + name)[0]).detach());
    } else {
      $($('.' + name)[0]).detach();
    }
  });

  $(tarr).each(function() {
    $('#mondidoPaymentTab').append(this);
    this.show();
  });

  if (document.location.href.indexOf('payment.selected') > -1) {
    var tabName = getParameterByName('payment.selected') + "_tab";
    if ($('.' + tabName + ' a').length > 0) {
      mondidoSettings.activePaymentMethod = tabName;
    }
  }

  $('.' + mondidoSettings.activePaymentMethod + ' a').trigger('click');
  $('[data-numeric]').payment('restrictNumeric');
  $('.cc-number').payment('formatCardNumber');
  $('.cc-cvc').payment('formatCardCVC');

  $.fn.toggleInputError = function(erred) {
    this.parent('.form-group').toggleClass('has-error', erred);
    return this;
  };

  if ($('#mondidoPaymentTab li').length == 1) {
    $(".text-choose-payment").addClass("hidden");
    $("#payment-tabpanel").addClass("hidden");
    $('#mondidoPaymentTab a:last').tab('show')
  } else {
    $("#mondidoPaymentTab a[href='#" + mondidoSettings.activePaymentMethod + "']").tab('show')
  }

  ///// invoice
  invoice = $.grep(mondidoSettings.supportedPaymentMethods, function(e) {
    return e.name == "invoice_tab";
  });
  segmentation = invoice[0].segmentation;

  $("#accept_collector").attr("data-mulang", "invoice_accept_conditions['" + mondidoSettings.layout.name + "','" + mondidoSettings.layout.terms_and_conditions_url + "','" + invoice[0].AgreementCode + "','" + invoice[0].AgreementCode + "']");

  if (isBlank($('#segmentation').val())) {
    set_segmentation(segmentation.defualt);
  } else {
    set_segmentation($('#segmentation').val());
  }

  if (invoice[0].segmentation.b2b == true && invoice[0].segmentation.b2c == true) {
    $('#segmentation_toggle').removeClass('hidden');

    $(".segmentation_select").click(function() {
      set_segmentation($(this).attr('data-value'));
    });

  } else {

    if (invoice[0].segmentation.b2c == true) {
      $('#row-ssn-details').removeClass('hidden');

      $(".invoice-input").each(function() {
        $(this).attr('disabled', 'disabled');
      });

    } else {
      $('#segmentation').val("b2b");
    }

    $('#segmentation').addClass('hidden');
  }

  function set_segmentation(segmentation) {
    if (segmentation == "b2c" || segmentation == "b2b") {} else {
      segmentation = "b2c";
    }

    if (segmentation == "b2c") {

      $('#b2c').addClass('btn-primary');
      $('#b2c').removeClass('btn-secondary');

      $('#b2b').removeClass('btn-primary');
      $('#b2b').addClass('btn-secondary');

    } else {

      $('#b2b').addClass('btn-primary');
      $('#b2b').removeClass('btn-secondary');

      $('#b2c').removeClass('btn-primary');
      $('#b2c').addClass('btn-secondary');

    }

    $('#segmentation').val(segmentation);

    $('#ssn').val("");
    $('#row-customer-details').addClass('hidden');

  }

  var ssn_on_load = $('#ssn').val();

  if (isBlank($('#ssn').val())) {
    $('#row-ssn-details').addClass('hidden');
  }

  var lastKey = null;
  var loading_ssn = $("#row-ssn-details-loading");
  var last_ssn = $('#ssn').val();

  if (isBlank($('#country_code').val())) {

    $('#country_code').val("swe");
  }

  function ssn_lookup(ssn_value) {
    var ssn = ssn_value;
    var is_test = 'true';
    var country_code = mondidoSettings.country_code.toLowerCase();
    var api_url = mondidoSettings.config.system.endpoint;

    if (/^19/i.test(ssn) == true && country_code.toLowerCase() == "swe"){
      ssn = ssn.slice(2);
    }
    if (/^20/i.test(ssn) == true && country_code.toLowerCase() == "swe"){
      ssn = ssn.slice(2);
    }

    do_log("country_code ->" + country_code.toLowerCase());
    do_log("ssn length ->" +ssn.length);
    do_log( $_mondido_ssn_load_value);

    if (ssn_value == $_mondido_ssn_load_value) {
      return false;
    }

    if (country_code.toLowerCase() == "swe" && ssn.length < 10) {
      $('#row-customer-details').addClass('hidden');
      $('#row-ssn-details-loading').addClass('hidden');
      do_log("lock ssn" + country_code.toLowerCase());
      return false;
    }


    if (country_code.toLowerCase() != "swe") {
      $('#row-ssn-details').removeClass('hidden');
      $('#row-customer-details').removeClass('hidden');
      $('#ssn').addClass('valid');
      $('#row-ssn-details-loading').addClass('hidden');
      ssn_on_load = 0;

    } else if (isSwedishSocialSecurityNumber(ssn_on_load)) {
      var first_name = $('#first_name').val();
      var last_name = $('#last_name').val();
      var zip = $('#zip').val();
      var city = $('#city').val();
      var address_1 = $('#address_1').val();

      if (!isBlank(first_name) && !isBlank(last_name) && !isBlank(zip) && !isBlank(city) && !isBlank(address_1)) {
        $('#row-ssn-details').removeClass('hidden');
        $('#row-customer-details').removeClass('hidden');
        $('#ssn').addClass('valid');
        $('#ow-ssn-details-loading').addClass('hidden');
        ssn_on_load = 0;
        return true;
      }
    }

    var ssn_url = api_url + "ssn?token=" + Mondido.token + "&transaction_id=" + Mondido.transaction.id + "&merchant_id=" + Mondido.merchant.id + "&test=" + is_test + "&ssn=" + ssn + "&country=" + country_code;

    $('#row-ssn-details-loading').removeClass('hidden');

    if (mondidoSettings.config.development == true || $('#segmentation').val() == "b2b" || country_code.toLowerCase() != "swe") {
      $('#row-ssn-details').removeClass('hidden');

      if ($('#segmentation').val() == "b2b" || country_code.toLowerCase() != "swe") {
        $('#row-ssn-details').removeClass('hidden');

        $(".invoice-input").each(function() {
          $(this).prop("disabled", false);
        });
        $('#ssn').removeClass('invalid');
        $('#ssn').addClass('valid');

      } else {

        $(".invoice-input").each(function() {
          $(this).val($(this.name).selector + " - Development").addClass('valid');
        });

        $('#pending_payment_customer').val("");

        $(".invoice-input").each(function() {
          $(this).attr('disabled', 'disabled');
        });
      }

      $('#row-customer-details').removeClass('hidden');
      $('#row-ssn-details-error').addClass('hidden');
      $('#row-ssn-details-loading').addClass('hidden');

    } else {

      $('#ssn').addClass('hidden');
      var loading_ssn = $("#row-ssn-details-loading");

      loading_ssn.removeClass('hidden');
      var jqxhr = $.get(ssn_url, function() {}).done(function(address) {
          $_mondido_ssn_load_value = ssn;

          $('#row-ssn-details').removeClass('hidden');
          $('#first_name').val(address.first_name).addClass('valid');
          $('#last_name').val(address.last_name).addClass('valid');
          $('#zip').val(address.zip).addClass('valid');
          $('#country_code').val(address.country).addClass('valid');
          $('#city').val(address.city).addClass('valid');
          $('#address_1').val(address.address_1).addClass('valid');
          $('#address_2').val(address.address_2).addClass('valid');
          $('#pending_payment_customer').val(address.id);

          if (address.address_2 === undefined || address.address_2 === null || isBlank(address.address_2)) {
            $('#invoice-address-2').addClass('hidden');
          }

          $('#row-customer-details').removeClass('hidden');
          $('#row-ssn-details-error').addClass('hidden');

          $('#row-ssn-details-loading').addClass('hidden');
          $('#row-ssn-details-error').addClass('hidden');
          $('#ssn').removeClass('hidden');
          $('#ssn').removeClass('invalid');
          $('#ssn').addClass('valid');

          //success


            $(document).ajaxStart(function() {
    
  });

  $(document).ajaxStop(function() {
  });
        })
        .fail(function(data) {
          loading_ssn.addClass('hidden');
          $('#row-ssn-details-error').removeClass('hidden');
          $('#ow-ssn-details-loading').addClass('hidden');
          $('#ssn').addClass('invalid');
          $('#ssn').removeClass('hidden');

          //fail
        })
        .done(function() {
          $_mondido_ssn_load_value = "";
          $('#ssn').removeClass('hidden');
          $('#row-ssn-details-loading').addClass('hidden');
        })
        .always(function() {
          if ($('#segmentation').val() == "b2c") {

            $(".invoice-input").each(function() {
              $(this).attr('disabled', 'disabled');
            });

          }
          loading_ssn.addClass('hidden');
        });
    }
  }

  $("#trustlyform").attr("action", $("#mondidopayform").attr("action"));
  $("#swishform").attr("action", $("#mondidopayform").attr("action"));
  $("#paypalform").attr("action", $("#mondidopayform").attr("action"));

  $('#mondidoPaymentTab a').click(function(e) {
    e.preventDefault();
    var set_payment_method = function(m) {
      $('#payment_method').val(m);
    };
    set_payment_method('credit_card_'); //default

    if ($(this).attr("href") == "#trustly_tab") {
      set_payment_method('bank');
      $('#trustlyform').submit();

    } else if ($(this).attr('href') == '#invoice_tab') {
      set_payment_method('invoice');
    } else if ($(this).attr('href') == '#swish_tab') {
      set_payment_method('swish');
    }
    $('input:enabled').blur();

    $(this).tab('show');

    var is_focus = false;
    $('input:visible:enabled').each(function(i) {
      if (isBlank($(this).val()) && is_focus == false) {
        $(this).focus();
        is_focus = true
      }
    });
    if (is_focus == false) {
      $('input:visible:enabled:last').focus();
    }
  });

  $('#mondidoPaymentTab li[class="active"] a').trigger('click');

  $.changeFocus = function(object) {
    // Enable Pay Button
    if (object.attr("id") == "card_cvv") {
      $("#paybtn-cc").prop("disabled", false);
    }
  };

  // Mobile Modifications
  if ((/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent)) {
    $("#card_number").attr("pattern", "\\d*");
  }

  var current_y = parseInt((new Date()).getFullYear().toString().substr(2, 2));
  $("#card_number").keydown(function(e) {
    $("#card_number").validateCreditCard(function(result) {
      $(".cards").show();
      if (result.card_type) {
        $(".cards").removeClass("visa");
        $(".cards").removeClass("visa_electron");
        $(".cards").removeClass("electron");
        $(".cards").removeClass("maestro");
        $(".cards").removeClass("mastercard");
        $(".cards").removeClass("discover");
        $(".cards").removeClass("amex");

        $(".cards").addClass(result.card_type.name);
        $(".cards").addClass("active");
      } else {
        $(".cards").hide();
        $(".cards").removeClass("active");
      }
    });
  });

  $("#card_number, #expMM, #expYY, #card_cvv").focusout(function() {

    // On blur, verify if field is valid
    // If valid, add "valid" css class
    // Else, add "invalid" css class
    var valid = false;
    switch ($(this).attr("id")) {
      case "card_number":
        $(this).validateCreditCard(function(result) {
          if (result.luhn_valid && result.length_valid && result.card_accepted) {
            $("#card_type").val(result.card_type.name);
            valid = true;
            ccvalid = true;
          }
        });
        break;
      case "expMM":
        expmm = parseInt($(this).val())
        if (!isNaN(expmm)) {
          if (expmm >= 1 && expmm <= 12) {
            valid = true;
          }
        }
        break;
      case "expYY":
        expyy = parseInt($(this).val());
        if (!isNaN(expyy)) {
          if (expyy >= current_y && expyy <= (current_y + 20)) {
            valid = true;
          }
        }
        break;
      case "card_cvv":
        cvv = parseInt($(this).val());
        if (!isNaN(cvv)) {
          if (cvv >= 0 && cvv <= 9999) {
            valid = true;
          }

        }
        if (cvv == 0) {
          $(this).removeClass('invalid');
        }
        break;
    }

    // Cleaning CSS
    $(this).removeClass('valid');
    $(this).removeClass('invalid');

    if (valid) {
      $(this).addClass('valid');
    } else {
      if (isEmpty($(this).val())) {
        $(this).removeClass('valid');
        $(this).removeClass('invalid');

      } else {
        $(this).addClass('invalid');
      }
    }
  });

  if (!isBlank($('#input_card_holder').val())) {
    $('#input_card_holder').addClass("semi");
    $('#label_card_holder').addClass("hidden");
  }

  $('#swishform').submit(function(e) {
    sn = $('#swish_number').val();
    sn = sn.replace(/[^0-9.]/g, "");

    if (sn.substr(0, 2) != '46') {
      sn = sn.substring(1);
      sn = '46' + sn;
    }

    if (sn.length < 5) {
      $('#swish_number').removeClass('valid');
      $('#swish_number').addClass('invalid');
      return false;
    } else {
      $('#swish_number').removeClass('invalid');
      $('#swish_number').addClass('valid');
    }

    $('#swish_number').val(sn);
  });

  $('#invoiceform').submit(function(e) {
    if ($('#accept')[0].checked == false) {
      alert('Du behöver godkänna villkoren.');
      return false;
    }
    return true;
  });


  $('#mondidopayform').submit(function(e) {
    var errString = $("#validation-error").text() + "\n";

    $.errFields = Array();
    $("#card_number, #expMM, #expYY, #card_cvv").each(function() {
      if (!$(this).hasClass("valid")) {
        $.errFields.push($(this).attr("placeholder"));
      }
    });
    errString = errString + $.errFields.join(", ");

    if ($.errFields.length > 0 && $("#trustly1").length === 0) {
      $("#errors").html(errString);
      $("#errors").show();

      $('#paybtn-cc').show();
      $('#loading-cc').addClass('hidden');
      $('.footer').show();
      return false;
    }

    $("#card_expiry").val(
      $("#expMM").val() + $("#expYY").val()
    );

    $("#errors").hide();
    return true;
  });

  var errMsg = getParameterByName('error_name');
  if (errMsg) {
    switch (errMsg) {
      case 'errors.personal_number.missing':
        alert('personnummer saknas');
        break;
      case 'errors.missing_or_invalid.phone_number':
        alert('Telefonnummer saknas');
        break;
      case 'errors.invalid.email':
        alert('E-post Ãr inte korrekt');
        break;
      case 'errors.invoice.credit_approval_failed':
        alert('Kreditypplysningen misslyckades');
        break;
      case 'errors.invoice.credit_not_approved':
        alert('Kreditupplysningen nekades');
        break;
      case 'errors.invoice.amount.requested.lower_than_minimum_purchase_amount':
        alert('Beloppet är för lågt för fakturabetalning');
        break;
      case 'errors.invoice.amount.requested.higher_than_maximum_purchase_amount':
        alert('Beloppet är för högt för fakturabetalning');
        break;
      case 'errors.invoice.account_error':
        alert('Fakturakontot är felinställt');
        break;
      case 'errors.invoice.account_was_overdrawn':
        alert('Kontot är övertrasserat');
        break;
      default:
        break;
    }
  }

  function input_change() {
    if (this.id === 'email') {
      if (validate_email(this.value)) {
        $("#row-phone-details").removeClass('hidden');
      }
    }

    if (this.id === 'phone') {
      if (validate_phone(this.value)) {
        $("#row-ssn-details").removeClass('hidden');
      }
    }

    if (this.id === 'ssn') {
      if (isSwedishSocialSecurityNumber(this.value)) {
        ssn_lookup(this.value, ssn_lookup);
      }
    }
  }

  $(function() {
    $(':input').change(input_change).keyup(input_change);
  });

  function isSwedishSocialSecurityNumber(ssn) {
    valid = false;

    if (mondidoSettings.country_code.toLowerCase() != "swe") {

      if (ssn.length == 12) {
        valid = true;
        $('#row-customer-details').addClass('hidden');
      }
    } else {
      valid = /^(\d{6}|\d{8})[-|(\s)]{0,1}\d{4}$/.test(ssn);
      if (!valid) {
        $('#row-customer-details').addClass('hidden');
      }
    }

    return valid;
  }

  /// ON LOAD
  if (validate_email($('#email').val())) {
    $("#row-phone-details").removeClass('hidden');
  }

  if (validate_phone($('#phone').val())) {
    $("#row-ssn-details").removeClass('hidden');
  }

  if (isSwedishSocialSecurityNumber($('#ssn').val())) {
    ssn_lookup($('#ssn').val(), ssn_lookup);
  }


});

function validate_email(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!regex.test(email)) {
    if (isBlank(email)) {
      $('#email').removeClass('valid');
      $('#email').removeClass('invalid');
    } else {
      $('#email').addClass('invalid');
    }
    return false;
  } else {
    $('#email').addClass('valid');
    return true;
  }
}

function isEmpty(s) {
  return !s.length;
}

function isBlank(s) {
  if (s) {
    return isEmpty(s.trim());
  }
  return true;
}

function validate_phone(phone_number) {
  if (phone_number == null) {
    return false
  }
  phone_number = phone_number.replace(/\s/g,'');
  if (phone_number.charAt(0) === "0") {
      phone_number = phone_number.slice(1);
  }
  $('#phone').val(phone_number);
  valid = ((phone_number.length >= 8) && (phone_number.length <= 11));
  if (valid) {
    $('#phone').addClass('valid');
  } else {
    if (isBlank(phone_number)) {
      $('#phone').removeClass('valid');
      $('#phone').removeClass('invalid');
    } else {
      $('#phone').addClass('invalid');
    }
  }

  return valid;
}

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function canceled() {
  alert($('#try-again').text());
  $("#errors").hide();
  $('.card-tab').tab('show');
}

// payment card scripts
(function() {
  var $,
    __indexOf = [].indexOf || function(item) {
      for (var i = 0, l = this.length; i < l; i++) {
        if (i in this && this[i] === item) return i;
      }
      return -1;
    };

  $ = jQuery;
  $.fn.validateCreditCard = function(callback, options) {
    var card, card_type, card_types, get_card_type, is_card_accepted, is_valid_length, is_valid_luhn, normalize, validate, validate_number, _i, _len, _ref, _ref1;
    card_types = [{
      name: 'amex',
      pattern: /^3[47]/,
      valid_length: [15]
    }, {
      name: 'diners',
      pattern: /^30[0-5]/,
      valid_length: [14]
    }, {
      name: 'diners',
      pattern: /^36/,
      valid_length: [14]
    }, {
      name: 'jcb',
      pattern: /^35(2[89]|[3-8][0-9])/,
      valid_length: [16]
    }, {
      name: 'laser',
      pattern: /^(6304|670[69]|6771)/,
      valid_length: [16, 17, 18, 19]
    }, {
      name: 'electron',
      pattern: /^(4026|417500|4508|4844|491(3|7))/,
      valid_length: [16]
    }, {
      name: 'visa',
      pattern: /^4/,
      valid_length: [16, 13]
    }, {
      name: 'mastercard',
      pattern: /^5[1-5]/,
      valid_length: [16]
    }, {
      name: 'maestro',
      pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
      valid_length: [12, 13, 14, 15, 16, 17, 18, 19]
    }, {
      name: 'discover',
      pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
      valid_length: [16]
    }];
    if (options == null) {
      options = {};
    }
    if ((_ref = options.accept) == null) {
      options.accept = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = card_types.length; _i < _len; _i++) {
          card = card_types[_i];
          _results.push(card.name);
        }
        return _results;
      })();
    }
    _ref1 = options.accept;
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      card_type = _ref1[_i];
      if (__indexOf.call((function() {
          var _j, _len1, _results;
          _results = [];
          for (_j = 0, _len1 = card_types.length; _j < _len1; _j++) {
            card = card_types[_j];
            _results.push(card.name);
          }
          return _results;
        })(), card_type) < 0) {
        throw "Credit card type '" + card_type + "' is not supported";
      }
    }
    get_card_type = function(number) {
      var _j, _len1, _ref2;
      _ref2 = (function() {
        var _k, _len1, _ref2, _results;
        _results = [];
        for (_k = 0, _len1 = card_types.length; _k < _len1; _k++) {
          card = card_types[_k];
          if (_ref2 = card.name, __indexOf.call(options.accept, _ref2) >= 0) {
            _results.push(card);
          }
        }
        return _results;
      })();
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        card_type = _ref2[_j];
        if (number.match(card_type.pattern)) {
          return card_type;
        }
      }
      return null;
    };
    is_valid_luhn = function(number) {
      var digit, n, sum, _j, _len1, _ref2;
      sum = 0;
      _ref2 = number.split('').reverse();
      for (n = _j = 0, _len1 = _ref2.length; _j < _len1; n = ++_j) {
        digit = _ref2[n];
        digit = +digit;
        if (n % 2) {
          digit *= 2;
          if (digit < 10) {
            sum += digit;
          } else {
            sum += digit - 9;
          }
        } else {
          sum += digit;
        }
      }
      return sum % 10 === 0;
    };
    is_valid_length = function(number, card_type) {
      var _ref2;
      return _ref2 = number.length, __indexOf.call(card_type.valid_length, _ref2) >= 0;
    };
    is_card_accepted = function(card_type) {
      var brand = card_type.name;
      var rule = mondidoSettings.supportedCards[brand];

      if (rule && rule.active) {
        if (rule.currencies.indexOf('all') > -1 || rule.currencies.indexOf(mondidoSettings.currency.toLowerCase()) > -1) {
          return true;
        }
      }
      return false;
    };
    validate_number = function(number) {
      var length_valid, luhn_valid, card_accepted;
      card_type = get_card_type(number);
      luhn_valid = false;
      length_valid = false;
      if (card_type != null) {
        luhn_valid = is_valid_luhn(number);
        length_valid = is_valid_length(number, card_type);
        card_accepted = is_card_accepted(card_type);
      }
      return callback({
        card_type: card_type,
        luhn_valid: luhn_valid,
        length_valid: length_valid,
        card_accepted: card_accepted
      });
    };
    validate = function() {
      var number;
      number = normalize($(this).val());
      return validate_number(number);
    };
    normalize = function(number) {
      return number.replace(/[ -]/g, '');
    };
    this.bind('input', function() {
      $(this).unbind('keyup');
      return validate.call(this);
    });
    this.bind('keyup', function() {
      return validate.call(this);
    });
    if (this.length !== 0) {
      validate.call(this);
    }
    return this;
  };

}).call(this);

var ccvalid = false;
var cardholdervalid = false;
var cardcvvvalid = false;
var cardexpiryvaid = false;
String.prototype.endsWith = function(suffix) {
  return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
String.prototype.removeEnd = function(s) {
  if (this.endsWith(s)) {
    return this.substring(0, this.length - s.length);
  }
  return this;
};

(function() {

  $('#mondidopayform').on('submit', function() {
    var checks = true;
    var errString = $('#validation-error').text().replace(/\s+/, "");
    var eventName = 'keyup';
    $('input[name="card_number"]').trigger(eventName);
    $('input[name="card_holder"]').trigger('keydown');
    $('input[name="card_cvv"]').trigger('keydown');
    $('input[name="expMM"], input[name="expYY"]').trigger('change');

    $('input[name="card_number"]').removeClass('not-valid');
    $('input[name="card_holder"]').removeClass('invalid');
    $('input[name="card_cvv"]').removeClass('not-valid');
    $('input[name="expMM"], input[name="expYY"]').removeClass('not-valid');

    if (!ccvalid) {
      errString += $('#err_cardnumber').text().replace(/\s+/, "") + ', ';
      // $('input[name="card_number"]').addClass('not-valid');
      checks = false;
    }
    if (!cardholdervalid) {
      errString += $('#err_cardholder').text().replace(/\s+/, "") + ', ';
      checks = false;
      $('input[name="card_holder"]').addClass('invalid');
    }
    if (!cardcvvvalid) {
      errString += $('#err_cvv').text().replace(/\s+/, "") + ', ';
      checks = false;
      // $('input[name="card_cvv"]').addClass('not-valid');
    }
    if (!cardexpiryvaid) {
      errString += $('#err_expiry').text().replace(/\s+/, "");
      checks = false;
      //     $('input[name="expMM"], input[name="expYY"]').addClass('not-valid');
    }
    if (!checks) {
      $('#paybtn-cc').show();
      $('#loading-cc').addClass('hidden');

      alert(errString.removeEnd(', '));
      return false;
    } else {
      $('#paybtn-cc').hide();
      $('#loading-cc').removeClass('hidden');
    }
    return true;
  });

  $('input[name="card_number"]').validateCreditCard(function(result) {
    if (result && result.card_type != null) {
      var text = $('#badcard').text();
      text = text.replace('{card}', result.card_type.name.toUpperCase());
      $('.arrow_box').text(text);
    }
    if (result.length_valid && result.luhn_valid && result.card_accepted) {
      ccvalid = true;
      $('div.card_number_div .cards').removeClass('not_accepted');
      $('input[name="card_number"]').removeClass('not-valid');
      $('input[name="card_number"]').addClass('valid');
      $('input[name="card_type"]').val(result.card_type.name.toUpperCase());
      $('input[name="card_type"]').addClass('valid');
      $('input[name="card_type"]').removeClass('not-valid');
    } else {
      ccvalid = false;
      if ($('input[name="card_number"]').val().length > 1) {
        if (!result.card_accepted) {
          $('div.card_number_div .cards').addClass('not_accepted');
        } else {
          $('div.card_number_div .cards').removeClass('not_accepted');
        }
        $('input[name="card_number"]').addClass('not-valid');
        $('input[name="card_type"]').addClass('not-valid');
      } else {
        $('div.card_number_div .cards').removeClass('not_accepted');
      }
      $('input[name="card_number"]').removeClass('valid');
      $('input[name="card_type"]').removeClass('valid');
      if (!result.card_accepted && result.card_type != null) {
        var badCard = $('#badcard').text().replace(/\s+/, "");
        $('input[name="card_type"]').val(badCard.replace('{card}', result.card_type.name.toUpperCase()));
      }
    }
  });

  $('input[name="card_holder"]').on('keydown blur', function(event) {
    if (event.which == 13) {
      event.preventDefault();
    }
    var val = $('input[name="card_holder"]').val();
    var isValid = val.trim().split(' ').length;
    if (isValid > 1) {
      $('input[name="card_holder"]').addClass('valid');
      $('input[name="card_holder"]').removeClass('invalid');
      cardholdervalid = true;
    } else {
      $('input[name="card_holder"]').removeClass('valid');
      $('input[name="card_holder"]').addClass('invalid');
      cardholdervalid = false;
    }
  });

  $('input[name="card_cvv"]').on('keydown blur', function(event) {
    if (event.which == 13) {
      event.preventDefault();
    }
    var val = $('input[name="card_cvv"]').val();
    if (val.length >= 1) {
      $('input[name="card_cvv"]').addClass('valid');
      $('input[name="card_cvv"]').removeClass('not-valid');
      cardcvvvalid = true;
    } else {
      if (!isEmpty(val.length)) {
        $('input[name="card_cvv"]').addClass('not-valid');
      }
      $('input[name="card_cvv"]').removeClass('valid');
      cardcvvvalid = false;
    }
  });

  $('input[name="expMM"], input[name="expYY"]').change(function(event) {
    var val = $('input[name="expMM"]').val();
    var val2 = $('input[name="expYY"]').val();
    var expDate = new Date(Date.parse('20' + val2 + '-' + val + '-01'));
    var fuDate = new Date(expDate.setDate(expDate.getDate() + 30)); //add 30 days
    var now = new Date();
    var notExpired = fuDate > now;
    if ((val != '--' && val2 != '--') && notExpired == true) {
      $('input[name="card_expiry"]').val(val + val2);
      $('input[name="expMM"]').addClass('svalid');
      $('input[name="expYY"]').addClass('svalid');
      $('input[name="expMM"]').removeClass('not-valid');
      $('input[name="expYY"]').removeClass('not-valid');
      cardexpiryvaid = true;
    } else {
      $('input[name="expMM"]').addClass('not-valid');
      $('input[name="expYY"]').addClass('not-valid');
      $('input[name="expMM"]').removeClass('svalid');
      $('input[name="expYY"]').removeClass('svalid');
      cardexpiryvaid = false;
    }
  });
}).call(this);


$(document).ready(function() {

  var api_url = mondidoSettings.config.system.endpoint;
  var is_test = false;

  var Spinner = {};
  try {
    var spinner = new Spinner().spin();
    $('#mpspin').append(spinner.el);
    $('.spinner').css({
      'position': 'relative',
      'top': '-29px'
    });
    spinner.stop();

  } catch (e) {

  }

  var spin_it = function(start) {
    return;
    if (start == true) {
      $("#checkoutButtonDiv img").hide();
      spinner = new Spinner().spin();
      $('#mpspin').append(spinner.el);
      $('.spinner').css({
        'position': 'relative',
        'top': '-29px',
        'z-index': '200'
      });
    } else {
      $("#checkoutButtonDiv img").show();
      spinner.stop();
    }
  };


  $("#checkoutButtonDiv").click(function() {
    spin_it(true);
    var request_token = api_url + "request_token?token=" + Mondido.token + "&transaction_id=" + Mondido.transaction.id + "&merchant_id=" + Mondido.merchant.id + "&test=" + is_test;

    var jqxhr = $.get(request_token, function() {}).done(function(data) {
      do_log(data.masterpass);
      handleConnectWithMasterPass(data.masterpass);


    }).fail(function() {
      do_log("checkoutButtonDiv -> fail");
      spin_it(false);
    }).always(function() {
      do_log("checkoutButtonDiv -> always");
    }).done(function() {
      spin_it(false);
    });

  });

  function handleConnectWithMasterPass(mp_obj) {
    var connect_data;

    connect_data = {
      "requestToken": mp_obj.request_roken,
      "callbackUrl": mp_obj.callback_rrl,
      "merchantCheckoutId": mp_obj.merchant_checkout_id,
      "allowedCardTypes": mp_obj.allowed_card_types,
      "requestedDataTypes": mp_obj.requested_data_types,
      "version": "v6",
      "loyaltyEnabled": mp_obj.loyalty_enabled,
      "requestBasicCheckout": mp_obj.request_basic_checkout,
      "suppressShippingAddressEnable": mp_obj.suppress_shipping_address_enable,
      "successCallback": handleCallbackSuccess,
      "failureCallback": handleCallbackFailure,
      "cancelCallback": handleCallbackCancel
    };
    do_log(connect_data);

    MasterPass.client.checkout(connect_data);
  };

  function handleCallbackSuccess(data) {
    var fullPath;
    var callbackPath;
    spin_it(true);
    callbackPath = "?oauth_token=" + data.oauth_token;
    callbackPath += "&oauth_verifier=" + data.oauth_verifier;
    callbackPath += "&checkout_resource_url=" + data.checkout_resource_url;

    fullPath = window.location.origin + "/oauthcallback";
    fullPath += callbackPath;

    do_log("handleCallbackSuccess request-->");
    do_log(fullPath);

    $.get(fullPath, function(data, status) {
      window.location.replace(data);
    });
  }

  function handleCallbackFailure(data) {
    do_log("handleCallbackFailure");
    do_log(data);
    spin_it(false);
  }

  function handleCallbackCancel(data) {
    do_log("handleCallbackCancel");
    do_log(data);
    spin_it(false);
  }

  function getJsonFromUrl() {
    var query = location.search.substr(1);
    var result = {};
    query.split("&").forEach(function(part) {
      var item = part.split("=");
      result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
  }

  var locationParams = getJsonFromUrl();

  if (locationParams.checkout) {
    callbackPath += "?connected=true"
    checkout = true;
    $("#pairingConfigDiv").css("display", "block");
    $("#merchantInit").css("display", "none");
  }

  $("#pairingConfigDiv").css("display", "block");
  $("#merchantInit").css("display", "none");
});

// Layout settings
(function($) {

  if (mondidoSettings.layout.show_logo == true) {
    $(".m-layout-logo").attr("src", mondidoSettings.layout.logo_url);
    $(".m-layout-show-logo").removeClass("hidden");
  }

  $('.m-ent-tab').bind("keypress", function(e) {
    if (e.keyCode == 13) {
      var inps = $("input, select"); //add select too
      for (var x = 0; x < inps.length; x++) {
        if (inps[x] == this) {
          while ((inps[x]).name == (inps[x + 1]).name) {
            x++;
          }
          if ((x + 1) < inps.length) $(inps[x + 1]).focus();
        }
      }
      e.preventDefault();
    }
  });

  if (mondidoSettings.convertCurrency.amount != '') {
    var el = $('#currencyConvert');
    el.html('Will be charged as ' + mondidoSettings.convertCurrency.amount + ' ' + mondidoSettings.convertCurrency.currency);
    var tab = mondidoSettings.convertCurrency.methods.replace(/([^a-z0-9]+)/gi, '-')

    el.removeClass("hidden");

    $('#' + tab + "_tab").prepend(el);
  }

})(jQuery);


(function($) {
  $.QueryString = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
      var p = a[i].split('=');
      if (p.length != 2) continue;
      b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
  })(window.location.search.substr(1).split('&'))
})(jQuery);
