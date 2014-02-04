// the basic class of item
var Prop = cc.Sprite.extend({
    ctor: function(arg) {
        this._appearPosition = arg.appearPosition;
        this.setPosition(this._appearPosition);
    },
});

var PropDisplay = Prop.extend({
    ctor: function(arg) {
        this._super(arg);
        this._texture = cc.TextureCache.sharedTextureCache().addImage(s_daoju);
        this.initWithTexture(this._texture,cc.RectMake(0, 0, 34,45));
    },
    use: function() {
        global.opacity = 150;
        global.GameLayer.updateGlobalOpacity();
    },
});

var PropBomb = Prop.extend({
    ctor: function(arg) {
        this._super(arg);
        this._texture = cc.TextureCache.sharedTextureCache().addImage(s_daoju);
        this.initWithTexture(this._texture,cc.RectMake(220, 0, 42,45));
    },
    use: function() {
        console.log("tank num:", global.enemyTank.length);
        var tmp = [];
        for (var i = 0, len = global.enemyTank.length; i < len; i++) {
            tmp.push(global.enemyTank[i]);
        }
        for (var i = 0, len = tmp.length; i < len; i++) {
            var tmp2 = tmp[i];
            tmp2.hit( { _power: 2, _dir: 'right' } );
            tmp2 = null;
        }
        tmp = [];
        for (var i = 0, len = global.flyTank.length; i < len; i++) {
            tmp.push(global.flyTank[i]);
        }
        for (var i = 0, len = tmp.length; i < len; i++) {
            var tmp2 = tmp[i];
            tmp2.hit( { _power: 2, _dir: 'right' } );
            tmp2 = null;
        }
    },
});

var PropFreeze = Prop.extend({
    ctor: function(arg) {
        this._super(arg);
        this._texture = cc.TextureCache.sharedTextureCache().addImage(s_daoju);
        this.initWithTexture(this._texture,cc.RectMake(262, 0, 37,45));
    },
    use: function() {
        global.GameLayer.freeze();
    },
});