/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

(function(d){var e=function(){};d.extend(e.prototype,{name:"AliasEdit",options:{url:"index.php?option=com_zoo&controller=manager&format=raw&task=getalias",force_safe:!1,edit:!1},initialize:function(c,a){this.options=d.extend({},this.options,a);var b=this;this.input=c;this.trigger=c.find("a.trigger");this.panel=c.find("div.panel");this.text=this.panel.find("input:text");this.name=c.find('input[name="name"]');this.options.edit||this.name.bind("blur.name",function(){b.name.val().length&&!b.text.val().length&&
b.setAlias(b.name.val())});this.trigger.bind("click",function(a){a.preventDefault();d(this).hide();b.panel.addClass("active");b.text.focus();b.text.bind("keydown",function(a){a.stopPropagation();13==a.which&&b.setAlias(b.text.val());27==a.which&&b.remove()});b.input.find("input.accept").bind("click",function(a){a.preventDefault();b.setAlias(b.text.val())});b.input.find("a.cancel").bind("click",function(a){a.preventDefault();b.remove()})})},setAlias:function(c){var a=this;c.length||(c=a.name.val());
d.getJSON(this.options.url,{name:c,force_safe:this.options.force_safe?1:0},function(b){if(!b.length){if(a.options.force_safe){a.panel.addClass("active");a.text.focus();alert("You cannot use non-latin characters for type aliases!");return}b="42"}a.text.val(b);a.trigger.text(b);d(a).unbind("blur.name");a.remove()})},remove:function(){this.trigger.show();this.panel.removeClass("active")}});d.fn[e.prototype.name]=function(){var c=arguments,a=c[0]?c[0]:null;return this.each(function(){var b=d(this);if(e.prototype[a]&&
b.data(e.prototype.name)&&"initialize"!=a)b.data(e.prototype.name)[a].apply(b.data(e.prototype.name),Array.prototype.slice.call(c,1));else if(!a||d.isPlainObject(a)){var f=new e;e.prototype.initialize&&f.initialize.apply(f,d.merge([b],c));b.data(e.prototype.name,f)}else d.error("Method "+a+" does not exist on jQuery."+e.name)})}})(jQuery);