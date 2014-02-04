// the basic class of item
var Item = cc.Sprite.extend({
    ctor: function(arg) {
        this._appearPosition = arg.appearPosition;
        //this._appearTime = arg.appearTime;
        this._appearTime = 200;
        this.setPosition(this._appearPosition);

        this.schedule(this.blink, this._appearTime * 2 / 3);
        
        this._contentSize = this.getContentSize();
    },
    blink: function() {
        this.unschedule(this.blink);
        this.setOpacity(150);
        var action = cc.Blink.create(this._appearTime/3 , 6);
        this.runAction(action);
        this.schedule(this.autoRemove, this._appearTime / 3);
    },
    autoRemove: function() {
        this.unschedule(this.autoremove);
        this.destroy();
    },
    eatenBy: function(tank) {
        //TODO
    },
    destroy: function() {
        this.unschedule(this.autoremove);
        try {   
            //cc.Log("remove!");
            cc.ArrayRemoveObject(global.item, this);
            this.removeFromParentAndCleanup(true);
        } catch (ex) {
            cc.Log("item destroy error!")
        }
    },
    collideRect: function() {
        var r = new cc.RectMake(this.getPositionX() - this._contentSize.width/2, this.getPositionY() - this._contentSize.height/2, 
                                this._contentSize.width, this._contentSize.height);
        return r;
    },
});

// the item add 1 to the tank's max bullet number.
var ItemAddBulletMax = Item.extend({
    ctor: function(arg) {
        this._super(arg);
        this._texture = cc.TextureCache.sharedTextureCache().addImage(s_daoju);
        this.initWithTexture(this._texture,cc.RectMake(168, 0, 50,45));
    },
    eatenBy: function(tank) {
        tank._maxBullet++;
    }
});

// the item add 1 HP to the player.
var ItemAddPlayerHP = Item.extend({
    ctor: function(arg) {
        this._super(arg);
        this._texture = cc.TextureCache.sharedTextureCache().addImage(s_daoju);
        this.initWithTexture(this._texture,cc.RectMake(122, 0, 46,45));
    },
    eatenBy: function(tank) {
        global.playerLife++;
        global.GameLayer.AddReduceLifePanel(true);
    }
});

// the item add bullet's speed of the tank.
var ItemAddBulletSpeed = Item.extend({
    ctor: function(arg) {
        this._super(arg);
        this._texture = cc.TextureCache.sharedTextureCache().addImage(s_daoju);
        this.initWithTexture(this._texture,cc.RectMake(75, 0, 47,45));
    },
    eatenBy: function(tank) {
        tank._bulletType.speed += 200;
    }
});

// the item add the speed of the tank.
var ItemAddTankSpeed = Item.extend({
    ctor: function(arg) {
        this._super(arg);
        this._texture = cc.TextureCache.sharedTextureCache().addImage(s_daoju);
        this.initWithTexture(this._texture,cc.RectMake(34, 0, 41,45));
    },
    eatenBy: function(tank) {
        tank._speed += 50;
        tank._maxSpace = tank._speed / (30 * 2);
    }
});

// Prop
// the item to freeze every enemy tanks.
var ItemFreeze = Item.extend({
    ctor: function(arg) {
        this._super(arg);
        this._texture = cc.TextureCache.sharedTextureCache().addImage(s_daoju);
        this.initWithTexture(this._texture,cc.RectMake(262, 0, 37,45));
    },
    eatenBy: function(tank) {
        if (global.propType.indexOf(PropFreeze) == -1) {
            global.propType.push(PropFreeze);
            var tmp = 1;
            global.propNum.push(tmp);
            console.log("propNum push 1");
        } else {
            global.propNum[global.propType.indexOf(PropFreeze)]++;
            console.log("propNum ++");
        }
        global.GameLayer.updateProp.call(global.GameLayer, {});
    }
});

// Prop
// the item to hit every enemy tanks.
var ItemBomb = Item.extend({
    ctor: function(arg) {
        this._super(arg);
        this._texture = cc.TextureCache.sharedTextureCache().addImage(s_daoju);
        this.initWithTexture(this._texture,cc.RectMake(220, 0, 42,45));
    },
    eatenBy: function(tank) {
        if (global.propType.indexOf(PropBomb) == -1) {
            global.propType.push(PropBomb);
            var tmp = 1;
            global.propNum.push(tmp);
            console.log("propNum push 1");
        } else {
            global.propNum[global.propType.indexOf(PropBomb)]++;
            console.log("propNum ++");
        }
        global.GameLayer.updateProp.call(global.GameLayer, {});
    }
});

// Prop
// the item to display the invisble tanks.
var ItemDisplayInvisbleTank = Item.extend({
    ctor: function(arg) {
        this._super(arg);
        this._texture = cc.TextureCache.sharedTextureCache().addImage(s_daoju);
        this.initWithTexture(this._texture,cc.RectMake(0, 0, 34,45));
    },
    eatenBy: function(tank) { 
        if (global.propType.indexOf(PropDisplay) == -1) {
            global.propType.push(PropDisplay);
            var tmp = 1;
            global.propNum.push(tmp);
            console.log("propNum push 1");
        } else {
            global.propNum[global.propType.indexOf(PropDisplay)]++;
            console.log("propNum ++");
        }
        global.GameLayer.updateProp();
    }
});