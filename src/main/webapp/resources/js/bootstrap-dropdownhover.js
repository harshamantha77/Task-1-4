!function(a){"use strict";function s(o,t){this.options=t,this.$element=a(o);var n=this;this.dropdowns=this.$element.hasClass("dropdown-toggle")?this.$element.parent().find(".dropdown-menu").parent(".dropdown"):this.$element.find(".dropdown"),this.dropdowns.each(function(){a(this).on("mouseenter.bs.dropdownhover",function(o){n.show(a(this).children("a, button"))})}),this.dropdowns.each(function(){a(this).on("mouseleave.bs.dropdownhover",function(o){n.hide(a(this).children("a, button"))})})}function t(r){return this.each(function(){var o=a(this),t=o.data("bs.dropdownhover"),n=o.data();void 0!==o.data("animations")&&null!==o.data("animations")&&(n.animations=a.isArray(n.animations)?n.animations:n.animations.split(" "));var e=a.extend({},s.DEFAULTS,n,"object"==typeof r&&r);t||o.data("bs.dropdownhover",t=new s(this,e))})}s.TRANSITION_DURATION=300,s.DELAY=150,s.DEFAULTS={animations:["fadeInDown","fadeInRight","fadeInUp","fadeInLeft"]},s.prototype.show=function(o){var t=a(o);window.clearTimeout(s.TIMEOUT),a(".dropdown").not(t.parents()).each(function(){a(this).removeClass("open")});var n=this.options.animations[0];if(!t.is(".disabled, :disabled")){var e=t.parent();if(!e.hasClass("open")){var r=t.next(".dropdown-menu");e.addClass("open");var i=this.position(r);n="top"==i?this.options.animations[2]:"right"==i?this.options.animations[3]:"left"==i?this.options.animations[1]:this.options.animations[0],r.addClass("animated "+n),a.support.transition&&r.hasClass("animated")?r.one("bsTransitionEnd",function(){r.removeClass("animated "+n)}).emulateTransitionEnd(s.TRANSITION_DURATION):r.removeClass("animated "+n)}return!1}},s.prototype.hide=function(o){var t=a(o).parent();s.TIMEOUT=window.setTimeout(function(){t.removeClass("open")},s.DELAY)},s.prototype.position=function(o){var t=a(window);o.css({bottom:"",left:"",top:"",right:""}).removeClass("dropdownhover-top");var n={top:t.scrollTop(),left:t.scrollLeft()};n.right=n.left+t.width(),n.bottom=n.top+t.height();var e=o.offset();e.right=e.left+o.outerWidth(),e.bottom=e.top+o.outerHeight();var r=o.position();r.right=e.left+o.outerWidth(),r.bottom=e.top+o.outerHeight();var i="";if(o.parents(".dropdown-menu").length)r.left<0?(i="left",o.removeClass("dropdownhover-right").addClass("dropdownhover-left")):(i="right",o.addClass("dropdownhover-right").removeClass("dropdownhover-left")),e.left<n.left?(i="right",o.css({left:"100%",right:"auto"}).addClass("dropdownhover-right").removeClass("dropdownhover-left")):e.right>n.right&&(i="left",o.css({left:"auto",right:"100%"}).removeClass("dropdownhover-right").addClass("dropdownhover-left")),e.bottom>n.bottom?o.css({bottom:"auto",top:-(e.bottom-n.bottom)}):e.top<n.top&&o.css({bottom:-(n.top-e.top),top:"auto"});else{var s=o.parent(".dropdown"),d=s.offset();d.right=d.left+s.outerWidth(),d.bottom=d.top+s.outerHeight(),e.right>n.right&&o.css({left:-(e.right-n.right),right:"auto"}),e.bottom>n.bottom&&d.top-n.top>n.bottom-d.bottom||o.position().top<0?(i="top",o.css({bottom:"100%",top:"auto"}).addClass("dropdownhover-top").removeClass("dropdownhover-bottom")):(i="bottom",o.addClass("dropdownhover-bottom"))}return i};var o,n=a.fn.dropdownhover;a.fn.dropdownhover=t,a.fn.dropdownhover.Constructor=s,a.fn.dropdownhover.noConflict=function(){return a.fn.dropdownhover=n,this},a(document).ready(function(){768<=a(window).width()&&a('[data-hover="dropdown"]').each(function(){var o=a(this);t.call(o,o.data())})}),a(window).on("resize",function(){clearTimeout(o),o=setTimeout(function(){768<=a(window).width()?a('[data-hover="dropdown"]').each(function(){var o=a(this);t.call(o,o.data())}):a('[data-hover="dropdown"]').each(function(){a(this).removeData("bs.dropdownhover"),a(this).hasClass("dropdown-toggle")?a(this).parent(".dropdown").find(".dropdown").andSelf().off("mouseenter.bs.dropdownhover mouseleave.bs.dropdownhover"):a(this).find(".dropdown").off("mouseenter.bs.dropdownhover mouseleave.bs.dropdownhover")})},200)})}(jQuery);