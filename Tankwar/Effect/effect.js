var additiveSprite = cc.Sprite.extend({
    draw:function (ctx) {
        var context = ctx || cc.renderContext;
        context.globalCompositeOperation = 'lighter';
        this._super(ctx);
    }
});

var spark = function (ccpoint, parent, scale, duration) {
    scale = scale || 0.3;
    duration = duration || 0.5;
    var one = new additiveSprite();
    one.initWithFile(s_explode1);
    var two = new additiveSprite();
    two.initWithFile(s_explode2);
    var three = new additiveSprite();
    three.initWithFile(s_explode3);
    one.setPosition(ccpoint);
    two.setPosition(ccpoint);
    three.setPosition(ccpoint);
    parent.addChild(two);
    parent.addChild(three);
    one.setScale(scale);
    two.setScale(scale);
    three.setScale(scale);
    three.setRotation(Math.random() * 360);
    var left = cc.RotateBy.create(duration, -45);
    var right = cc.RotateBy.create(duration, 45);
    var scaleBy = cc.ScaleBy.create(duration, 3, 3);
    var fadeOut = cc.FadeOut.create(duration);
    one.runAction(left);
    two.runAction(right);
    one.runAction(scaleBy);
    two.runAction(scaleBy.copy());
    three.runAction(scaleBy.copy());
    one.runAction(fadeOut);
    two.runAction(fadeOut.copy());
    three.runAction(fadeOut.copy());
    setTimeout(function () {
        parent.removeChild(one);
        parent.removeChild(two);
        parent.removeChild(three);
    }, duration * 1000);
}
