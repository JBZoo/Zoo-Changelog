/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

(function(a){var b=function(){};a.extend(b.prototype,{name:"ElementRepeatableTextarea",initialize:function(b){var c=b.find("ul.repeatable-list");c.find("li.hidden").each(function(){a(this).find("*").each(function(){a(this).attr("name")&&(a(this).data("name",a(this).attr("name")),a(this).attr("name",""))})});b.delegate("span.delete","click",function(){a(this).closest("li.repeatable-element").fadeOut(200,function(){a(this).addClass("hidden");a(this).find("*").each(function(){a(this).attr("name")&&a(this).attr("name",
"")})})});b.find("p.add a").bind("click",function(){var b=a(c.find("li.hidden").get(0)).removeClass("hidden");b.find("*").each(function(){a(this).data("name")&&a(this).attr("name",a(this).data("name"))});b.find("div.repeatable-content").effect("highlight",{},1E3);0==c.find("li.hidden").length&&a(this).parent().hide()})}});a.fn[b.prototype.name]=function(){var e=arguments,c=e[0]?e[0]:null;return this.each(function(){var d=a(this);if(b.prototype[c]&&d.data(b.prototype.name)&&"initialize"!=c)d.data(b.prototype.name)[c].apply(d.data(b.prototype.name),
Array.prototype.slice.call(e,1));else if(!c||a.isPlainObject(c)){var f=new b;b.prototype.initialize&&f.initialize.apply(f,a.merge([d],e));d.data(b.prototype.name,f)}else a.error("Method "+c+" does not exist on jQuery."+b.name)})}})(jQuery);