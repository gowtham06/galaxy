define([],function(){var a=Backbone.View.extend({el:"#webhook-view",initialize:function(a){var b=this,c=Backbone.Model.extend({urlRoot:a.urlRoot,defaults:{activate:!0}});this.model=new c,this.model.fetch({success:function(){b.render()}})},render:function(){var a=this.model.toJSON();return a.activate&&("masthead"==a.type,this.$el.html('<div id="'+a.name+'"></div>'),a.styles&&$("<style/>",{type:"text/css"}).text(a.styles).appendTo("head"),a.script&&$("<script/>",{type:"text/javascript"}).text(a.script).appendTo("head")),this}});return{WebhookView:a}});
//# sourceMappingURL=../../maps/mvc/webhooks.js.map