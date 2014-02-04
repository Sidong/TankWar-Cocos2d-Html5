// the basic class  of the bullet
var Bullet = cc.Sprite.extend({
    _zOrder: global.zOrder.bullet,
    collideRect: function() {
        var r = new cc.RectMake(this.getPositionX() - this._contentSize.width/2, this.getPositionY() - this._contentSize.height/2, 
                                this._contentSize.width, this._contentSize.height);
        return r;
    },
});


// the normal bullet.
var NormalBullet = Bullet.extend({
    ctor: function(arg) {
        this._speed = arg.speed;
        this._power = arg.power;
        this._dir = arg.dir;
        this._texture = arg.texture;
        this._isExploded = arg.isExploded;
        this._effect = arg.effect;
        this._owner = arg.owner;

        this._appearPosition = arg.appearPosition;
        
        this._texture = cc.TextureCache.sharedTextureCache().addImage(arg.texture);
        this.initWithTexture(this._texture);
        this.setPosition(this._appearPosition);

        this._contentSize = this.getContentSize();
    },
    move: function(dt) {
        var newX = this.getPosition().x, newY = this.getPosition().y;
        switch(this._dir) {
            case 'up':
                newY += this._speed * dt;
                break;
            case 'down':
                newY -= this._speed *dt;
                break;
            case 'left':
                newX -= this._speed * dt;
                break;
            case 'right':
                newX += this._speed * dt;
                break;
        }
        this.setPosition(cc.ccp(newX, newY));
    },
    destroy: function() {
        try {   
            var explode = new additiveSprite();
            explode.initWithFile(s_hit);
            explode.setPosition(this.getPosition());
            explode.setRotation(Math.random()*360);
            explode.setScale(0.75);
            this.getParent().addChild(explode, 101);
            explode.runAction(cc.ScaleBy.create(0.3, 2,2));
            explode.runAction(cc.Sequence.create(cc.FadeOut.create(0.3), cc.CallFunc.create(explode,explode.removeFromParentAndCleanup)));
            if (this._owner == "player") {
                cc.ArrayRemoveObject(global.playerBullet, this);
            } else {
                cc.ArrayRemoveObject(global.enemyBullet, this);
            }
            this.removeFromParentAndCleanup(true);
        } catch (ex) {
            cc.Log("bullet destroy error!")
        }
        
    },
});


// the missile bullet.
var MissileBullet = NormalBullet.extend({
    // TODO
    ctor: function(arg) {
        //console.log(arg);
        this._speed = arg.speed;
        this._power = arg.power;
        this._dir = arg.dir;

        this._isExploded = arg.isExploded;
        this._effect = arg.effect;
        this._owner = arg.owner;


        this._rectLength = arg.rectLength;

        this._texture = cc.TextureCache.sharedTextureCache().addImage(arg.texture);

        this._upRect = cc.RectMake(0, 0, this._rectLength, this._rectLength);
        this._downRect = cc.RectMake(this._rectLength, 0, this._rectLength, this._rectLength);
        this._leftRect = cc.RectMake(2 * this._rectLength, 0, this._rectLength, this._rectLength);
        this._rightRect = cc.RectMake(3 * this._rectLength, 0, this._rectLength, this._rectLength);

        switch(this._dir) {
            case 'up':
                this.initWithTexture(this._texture, this._upRect);
                break;
            case 'down':
                this.initWithTexture(this._texture, this._downRect);
                break;
            case 'left':
                this.initWithTexture(this._texture, this._leftRect);
                break;
            case 'right':
                this.initWithTexture(this._texture, this._rightRect);
                break;
        }
        this._appearPosition = arg.appearPosition;
        this.setPosition(this._appearPosition);

        this._contentSize = this.getContentSize();
    },
    move: function(dt) {
        var newX = this.getPosition().x, newY = this.getPosition().y;
        if (global.playerTank.length <= 0) return;
        var targetPostion = global.playerTank[0].getPosition();
        var diffX = targetPostion.x - newX;
        var diffY = targetPostion.y - newY;

        if (Math.abs(diffX) < 20 && Math.abs(diffY) < 20) {
            this.destroy();
            global.playerTank[0].hit(this);
        } else if (Math.abs(diffX) >= Math.abs(diffY)) {
            if (diffX > 0) {
                this._dir = 'right';
                this.initWithTexture(this._texture, this._rightRect);
                newX += Math.min(diffX, this._speed * dt);
            } else {
                this._dir = 'left';
                this.initWithTexture(this._texture, this._leftRect);
                newX -= Math.min(Math.abs(diffX), this._speed * dt);
            }
        } else {
            if (diffY > 0) {
                this._dir = 'up';
                this.initWithTexture(this._texture, this._upRect);
                newY += Math.min(diffY, this._speed * dt);
            } else {
                this._dir = 'down';
                this.initWithTexture(this._texture, this._downRect);
                newY -= Math.min(Math.abs(diffY), this._speed * dt);
            } 
        }

        this.setPosition(cc.ccp(newX, newY));
    },
    destroy: function() {
        try {   
            var explode = new additiveSprite();
            explode.initWithFile(s_hit);
            explode.setPosition(this.getPosition());
            explode.setRotation(Math.random()*360);
            explode.setScale(0.75);
            this.getParent().addChild(explode, 101);
            explode.runAction(cc.ScaleBy.create(0.3, 2,2));
            explode.runAction(cc.Sequence.create(cc.FadeOut.create(0.3), cc.CallFunc.create(explode,explode.removeFromParentAndCleanup)));
            cc.ArrayRemoveObject(global.enemyMissile, this);
            this.removeFromParentAndCleanup(true);
        } catch (ex) {
            cc.Log("missile destroy error!")
        }
    },
});


// the rocket bullet.
var RocketBullet = MissileBullet.extend({
    ctor: function(arg) {
        this._super(arg);
        this._speed = 0;
        this._accelSpeed = arg.accelSpeed;
    },
    move: function(dt) {
        var newX = this.getPosition().x, newY = this.getPosition().y;
        this._speed += this._accelSpeed * dt;
        switch(this._dir) {
            case 'up':
                newY += this._speed * dt;
                break;
            case 'down':
                newY -= this._speed *dt;
                break;
            case 'left':
                newX -= this._speed * dt;
                break;
            case 'right':
                newX += this._speed * dt;
                break;
        }
        this.setPosition(cc.ccp(newX, newY));
    },
    destroy: function() {
        try {   
            var explode = new additiveSprite();
            explode.initWithFile(s_hit);
            explode.setPosition(this.getPosition());
            explode.setRotation(Math.random()*360);
            explode.setScale(0.75);
            this.getParent().addChild(explode, 101);
            explode.runAction(cc.ScaleBy.create(0.3, 2,2));
            explode.runAction(cc.Sequence.create(cc.FadeOut.create(0.3), cc.CallFunc.create(explode,explode.removeFromParentAndCleanup)));
            cc.ArrayRemoveObject(global.rocketBullet, this);
            this.removeFromParentAndCleanup(true);
        } catch (ex) {
            cc.Log("rocket bulelt destroy error!")
        }
    },
});


// the burst bullet
var BurstBullet = NormalBullet.extend({
    ctor: function(arg) {
        this._power = arg.power;
        this._isExploded = arg.isExploded;
        this._effect = arg.effect;
        this._zOrder = global.zOrder.prop;
        // this._owner = arg.owner;

        // console.log(arg);
        this._texture = cc.TextureCache.sharedTextureCache().addImage(arg.texture);
        this._rect1 = cc.RectMake(60, 0, 60, 60);
        this._rect2 = cc.RectMake(0, 0, 60, 60);
        this.initWithTexture(this._texture, this._rect1);
        this._initFlag = 1;

        this._appearPosition = arg.appearPosition;
        this.setPosition(this._appearPosition);

        this.schedule(this.blink, 0.4);
        this.schedule(this.destroy, 2);
    },
    blink: function() {
        // TODO
        if (this._initFlag == 0) {
            this.initWithTexture(this._texture, this._rect1);
            this._initFlag = 1;
        } else {
            this.initWithTexture(this._texture, this._rect2);
            this._initFlag = 0;
        }
    },
    destroy: function() {
        
            if (global.sound) {
            cc.AudioManager.sharedEngine().playEffect(s_explodeEffect);
        }
        // TODO

        // effect
        try {
            var a = new Explosion();
            a.setScale(2, 2);
            a.setPosition(this.getPosition());
            this.getParent().addChild(a, 101);
            spark(this.getPosition(),this.getParent(), 1.2, 0.7);
        } catch (ex) {
            cc.Log("burst destroy error");
        }

        // judge
        for (var i = 0; i < global.playerTank.length; i++) {
            var position = global.playerTank[i].getPosition();
            if ( Math.abs(this.getPosition().x - position.x) <= global.warMap.tileWidth * 2.5 &&
                  Math.abs(this.getPosition().y - position.y) <= global.warMap.tileHeight * 2.5 )
                global.playerTank[i].hit(this);
        }

        cc.ArrayRemoveObject(global.enemyBurst, this);
        this.removeFromParentAndCleanup(true);
        
        
    },
});


// the burst2 bullet
var BurstBullet2 = BurstBullet.extend({
    ctor: function(arg) {
        this._power = arg.power;
        this._isExploded = arg.isExploded;
        this._effect = arg.effect;
        this._zOrder = global.zOrder.prop;
        // this._owner = arg.owner;

        // console.log(arg);
        this._texture = cc.TextureCache.sharedTextureCache().addImage(arg.texture);
        this._rect1 = cc.RectMake(40, 0, 40, 40);
        this._rect2 = cc.RectMake(0, 0, 40, 40);
        this.initWithTexture(this._texture, this._rect1);
        this._initFlag = 1;

        this._appearPosition = arg.appearPosition;
        this.setPosition(this._appearPosition);
    },
    blink: function() {
         if (this._initFlag == 0) {
            this.initWithTexture(this._texture, this._rect1);
            this._initFlag = 1;
        } else {
            this.initWithTexture(this._texture, this._rect2);
            this._initFlag = 0;
        }
         if (global.sound) {
            cc.AudioManager.sharedEngine().playEffect(s_timerEffect);
        }
    },
    setOff: function() {
        // TODO
        this.schedule(this.blink, 0.1);
        this.schedule(this.destroy, 1.1);
    },
});