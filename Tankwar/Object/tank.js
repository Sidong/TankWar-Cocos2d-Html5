// the basic class of tank.
var Tank = cc.Sprite.extend({
    collideRect: function() {
        var r = new cc.RectMake(this.getPositionX() - this._contentSize.width/2, this.getPositionY() - this._contentSize.height/2, 
            this._contentSize.width, this._contentSize.height);
        return r;
    },
    canMoveUp: function() {
        var stoneObj = global.stoneObjects;
        var mudObj = global.mudObjects;
        var waterObj = global.waterObjects;
        var X = this.getPosition().x, Y = this.getPosition().y;
        var s2w = this._s2w, s2h = this._s2h, tmp;
        var maxSpace = this._maxSpace || 2.15;
        for (var i = 0, len = mudObj.length; i < len; i++) {
            tmp = mudObj[i];
            if ( ( (X - s2w > tmp.origin.x && X - s2w < tmp.origin.x + tmp.size.width) || 
                (X + s2w > tmp.origin.x && X + s2w < tmp.origin.x + tmp.size.width) || 
                (tmp.origin.x > X - s2w && tmp.origin.x < X + s2w) ||
                (tmp.origin.x + tmp.size.width > X - s2w && tmp.origin.x + tmp.size.width < X + s2w) )  && 
            (Math.abs(Y + s2h - tmp.origin.y) <= maxSpace) ) {
                return false;
            }
        }
        for (var i = 0, len = stoneObj.length; i < len; i++) {
            tmp = stoneObj[i];
            if ( ( (X - s2w > tmp.origin.x && X - s2w < tmp.origin.x + tmp.size.width) || 
                (X + s2w > tmp.origin.x && X + s2w < tmp.origin.x + tmp.size.width) || 
                (tmp.origin.x > X - s2w && tmp.origin.x < X + s2w) ||
                (tmp.origin.x + tmp.size.width > X - s2w && tmp.origin.x + tmp.size.width < X + s2w) )  && 
            (Math.abs(Y + s2h - tmp.origin.y) <= maxSpace) ) {
                return false;
            }
        }
        for (var i = 0, len = waterObj.length; i < len; i++) {
            tmp = waterObj[i];
            if ( ( (X - s2w > tmp.origin.x && X - s2w < tmp.origin.x + tmp.size.width) || 
                (X + s2w > tmp.origin.x && X + s2w < tmp.origin.x + tmp.size.width) || 
                (tmp.origin.x > X - s2w && tmp.origin.x < X + s2w) ||
                (tmp.origin.x + tmp.size.width > X - s2w && tmp.origin.x + tmp.size.width < X + s2w) )  && 
            (Math.abs(Y + s2h - tmp.origin.y) <= maxSpace) ) {
                return false;
            }
        }
        for (var i = 0, len = global.playerTank.length; i < len; i++) {
            tmp = global.playerTank[i];
            if (this == tmp) continue;
            var p = tmp.getPosition();
            var p2w = tmp._s2w, p2h = tmp._s2h;
            if ( ( (X - s2w > p.x - p2w && X - s2w < p.x + p2w) || 
                (X + s2w > p.x - p2w && X + s2w < p.x + p2w) || 
                (p.x - p2w > X - s2w && p.x -p2w < X + s2w) ||
                (p.x + p2w > X - s2w && p.x + p2w < X + s2w) )  && 
            (Math.abs(Y + s2h - p.y + p2w) <= maxSpace) ) {
                return false;
            }
        }
        for (var i = 0, len = global.enemyTank.length; i < len; i++) {
            tmp = global.enemyTank[i];
            if (this == tmp) continue;
            var p = tmp.getPosition();
            var p2w = tmp._s2w, p2h = tmp._s2h;
            if ( ( (X - s2w > p.x - p2w && X - s2w < p.x + p2w) || 
                (X + s2w > p.x - p2w && X + s2w < p.x + p2w) || 
                (p.x - p2w > X - s2w && p.x -p2w < X + s2w) ||
                (p.x + p2w > X - s2w && p.x + p2w < X + s2w) )  && 
            (Math.abs(Y + s2h - p.y + p2w) <= maxSpace) ) {
                return false;
            }
        }
        if (Y + s2h > global.warMap.height + this.MBW) {
            return false;
        }
        return true;
    },
    canMoveDown: function() {
        var stoneObj = global.stoneObjects;
        var mudObj = global.mudObjects;
        var waterObj = global.waterObjects;
        var s2w = this._s2w, s2h = this._s2h;
        var X = this.getPosition().x, Y = this.getPosition().y;
        var maxSpace = this._maxSpace || 2.15;
        for (var i = 0, len = mudObj.length; i < len; i++) {
            tmp = mudObj[i];
            if ( ( (X - s2w > tmp.origin.x && X - s2w < tmp.origin.x + tmp.size.width) || 
                (X + s2w > tmp.origin.x && X + s2w < tmp.origin.x + tmp.size.width) || 
                (tmp.origin.x > X - s2w && tmp.origin.x < X + s2w) ||
                (tmp.origin.x + tmp.size.width > X - s2w && tmp.origin.x + tmp.size.width < X + s2w) )  && 
            (Math.abs(Y - s2h - tmp.origin.y - tmp.size.height) <= maxSpace)) {
                return false;
            }
        }
        for (var i = 0, len = stoneObj.length; i < len; i++) {
            tmp = stoneObj[i];
            if ( ( (X - s2w > tmp.origin.x && X - s2w < tmp.origin.x + tmp.size.width) || 
                (X + s2w > tmp.origin.x && X + s2w < tmp.origin.x + tmp.size.width) || 
                (tmp.origin.x > X - s2w && tmp.origin.x < X + s2w) ||
                (tmp.origin.x + tmp.size.width > X - s2w && tmp.origin.x + tmp.size.width < X + s2w) )  && 
            (Math.abs(Y - s2h - tmp.origin.y - tmp.size.height) <= maxSpace)) {
                return false;
            }
        }
        for (var i = 0, len = waterObj.length; i < len; i++) {
            tmp = waterObj[i];
            if ( ( (X - s2w > tmp.origin.x && X - s2w < tmp.origin.x + tmp.size.width) || 
                (X + s2w > tmp.origin.x && X + s2w < tmp.origin.x + tmp.size.width) || 
                (tmp.origin.x > X - s2w && tmp.origin.x < X + s2w) ||
                (tmp.origin.x + tmp.size.width > X - s2w && tmp.origin.x + tmp.size.width < X + s2w) )  && 
            (Math.abs(Y - s2h - tmp.origin.y - tmp.size.height) <= maxSpace)) {
                return false;
            }
        }
        for (var i = 0, len = global.playerTank.length; i < len; i++) {
            tmp = global.playerTank[i];
            if (this == tmp) continue;
            var p = tmp.getPosition();
            var p2w = tmp._s2w, p2h = tmp._s2h;
            if ( ( (X - s2w > p.x - p2w && X - s2w < p.x + p2w) || 
                (X + s2w > p.x - p2w && X + s2w < p.x + p2w) || 
                (p.x - p2w > X - s2w && p.x - p2w < X + s2w) ||
                (p.x + p2w > X - s2w && p.x + p2w < X + s2w) )  && 
            (Math.abs(Y - s2h - p.y - p2h) <= maxSpace)) {
                return false;
            }
        }
        for (var i = 0, len = global.enemyTank.length; i < len; i++) {
            tmp = global.enemyTank[i];
            if (this == tmp) continue;
            var p = tmp.getPosition();
            var p2w = tmp._s2w, p2h = tmp._s2h;
            if ( ( (X - s2w > p.x - p2w && X - s2w < p.x + p2w) || 
                (X + s2w > p.x - p2w && X + s2w < p.x + p2w) || 
                (p.x - p2w > X - s2w && p.x - p2w < X + s2w) ||
                (p.x + p2w > X - s2w && p.x + p2w < X + s2w) )  && 
            (Math.abs(Y - s2h - p.y - p2h) <= maxSpace)) {
                return false;
            }
        }
        if (Y - s2h < -this.MBW) {
            return false;
        }
        return true;
    },
    canMoveLeft: function() {
        var stoneObj = global.stoneObjects;
        var mudObj = global.mudObjects;
        var waterObj = global.waterObjects;
        var s2w = this._s2w, s2h = this._s2h;
        var X = this.getPosition().x, Y = this.getPosition().y;
        var maxSpace = this._maxSpace || 2.15;
        for (var i = 0, len = mudObj.length; i < len; i++) {
            tmp = mudObj[i];
            if ( ( (Y - s2h > tmp.origin.y && Y - s2h < tmp.origin.y + tmp.size.height) || 
                (Y + s2h > tmp.origin.y && Y + s2h < tmp.origin.y + tmp.size.height) ||
                (tmp.origin.y > Y - s2h && tmp.origin.y < Y + s2h) ||
                (tmp.origin.y + tmp.size.height > Y - s2h && tmp.origin.y + tmp.size.height < Y + s2h) )  && 
            (Math.abs(X - s2w - tmp.origin.x - tmp.size.width) <= maxSpace)) {
                return false;
            }
        }
        for (var i = 0, len = stoneObj.length; i < len; i++) {
            tmp = stoneObj[i];
            if ( ( (Y - s2h > tmp.origin.y && Y - s2h < tmp.origin.y + tmp.size.height) || 
                (Y + s2h > tmp.origin.y && Y + s2h < tmp.origin.y + tmp.size.height) ||
                (tmp.origin.y > Y - s2h && tmp.origin.y < Y + s2h) ||
                (tmp.origin.y + tmp.size.height > Y - s2h && tmp.origin.y + tmp.size.height < Y + s2h) )  && 
            (Math.abs(X - s2w - tmp.origin.x - tmp.size.width) <= maxSpace)) {
                return false;
            }
        }
        for (var i = 0, len = waterObj.length; i < len; i++) {
            tmp = waterObj[i];
            if ( ( (Y - s2h > tmp.origin.y && Y - s2h < tmp.origin.y + tmp.size.height) || 
                (Y + s2h > tmp.origin.y && Y + s2h < tmp.origin.y + tmp.size.height) ||
                (tmp.origin.y > Y - s2h && tmp.origin.y < Y + s2h) ||
                (tmp.origin.y + tmp.size.height > Y - s2h && tmp.origin.y + tmp.size.height < Y + s2h) )  && 
            (Math.abs(X - s2w - tmp.origin.x - tmp.size.width) <= maxSpace)) {
                return false;
            }
        }
        for (var i = 0, len = global.playerTank.length; i < len; i++) {
            tmp = global.playerTank[i];
            if (this == tmp) continue;
            var p = tmp.getPosition();
            var p2w = tmp._s2w, p2h = tmp._s2h;
            if ( ( (Y - s2h > p.y - p2h && Y - s2h < p.y + p2h) || 
                (Y + s2h > p.y - p2h && Y + s2h < p.y + p2h) ||
                (p.y - p2h > Y - s2h && p.y -p2h < Y + s2h) ||
                (p.y + p2h > Y - s2h && p.y + p2h < Y + s2h) )  && 
            (Math.abs(X - s2w - p.x - p2w) <= maxSpace)) {
                return false;
            }
        }
        for (var i = 0, len = global.enemyTank.length; i < len; i++) {
            tmp = global.enemyTank[i];
            if (this == tmp) continue;
            var p = tmp.getPosition();
            var p2w = tmp._s2w, p2h = tmp._s2h;
            if ( ( (Y - s2h > p.y - p2h && Y - s2h < p.y + p2h) || 
                (Y + s2h > p.y - p2h && Y + s2h < p.y + p2h) ||
                (p.y - p2h > Y - s2h && p.y -p2h < Y + s2h) ||
                (p.y + p2h > Y - s2h && p.y + p2h < Y + s2h) )  && 
            (Math.abs(X - s2w - p.x - p2w) <= maxSpace)) {
                return false;
            }
        }
        if (X - s2w < -this.MBH) {
            return false;
        }
        return true;
    },
    canMoveRight: function() {
        var stoneObj = global.stoneObjects;
        var mudObj = global.mudObjects;
        var waterObj = global.waterObjects;
        var s2w = this._s2w, s2h = this._s2h;
        var X = this.getPosition().x, Y = this.getPosition().y;
        var maxSpace = this._maxSpace || 2.15;
        for (var i = 0, len = mudObj.length; i < len; i++) {
            tmp = mudObj[i];
            if ( ( (Y - s2h > tmp.origin.y && Y - s2h < tmp.origin.y + tmp.size.height) || 
                (Y + s2h > tmp.origin.y && Y + s2h < tmp.origin.y + tmp.size.height) ||
                (tmp.origin.y > Y - s2h && tmp.origin.y < Y + s2h) ||
                (tmp.origin.y + tmp.size.height > Y - s2h && tmp.origin.y + tmp.size.height < Y + s2h) )  && 
            (Math.abs(X + s2w - tmp.origin.x) <= maxSpace)) {
                return false;
            }
        }
        for (var i = 0, len = stoneObj.length; i < len; i++) {
            tmp = stoneObj[i];
            if ( ( (Y - s2h > tmp.origin.y && Y - s2h < tmp.origin.y + tmp.size.height) || 
                (Y + s2h > tmp.origin.y && Y + s2h < tmp.origin.y + tmp.size.height) ||
                (tmp.origin.y > Y - s2h && tmp.origin.y < Y + s2h) ||
                (tmp.origin.y + tmp.size.height > Y - s2h && tmp.origin.y + tmp.size.height < Y + s2h) )  && 
            (Math.abs(X + s2w - tmp.origin.x) <= maxSpace)) {
                return false;
            }
        }
        for (var i = 0, len = waterObj.length; i < len; i++) {
            tmp = waterObj[i];
            if ( ( (Y - s2h > tmp.origin.y && Y - s2h < tmp.origin.y + tmp.size.height) || 
                (Y + s2h > tmp.origin.y && Y + s2h < tmp.origin.y + tmp.size.height) ||
                (tmp.origin.y > Y - s2h && tmp.origin.y < Y + s2h) ||
                (tmp.origin.y + tmp.size.height > Y - s2h && tmp.origin.y + tmp.size.height < Y + s2h) )  && 
            (Math.abs(X + s2w - tmp.origin.x) <= maxSpace)) {
                return false;
            }
        }
        for (var i = 0, len = global.playerTank.length; i < len; i++) {
            tmp = global.playerTank[i];
            if (this == tmp) continue;
            var p = tmp.getPosition();
            var p2w = tmp._s2w, p2h = tmp._s2h;
            if ( ( (Y - s2h > p.y - p2h && Y - s2h < p.y + p2h) || 
                (Y + s2h > p.y - p2h && Y + s2h < p.y + p2h) ||
                (p.y - p2h > Y - s2h && p.y - p2h < Y + s2h) ||
                (p.y + p2h > Y - s2h && p.y + p2h < Y + s2h) )  && 
            (Math.abs(X + s2w - p.x + p2w) <= maxSpace)) {
                return false;
            }
        }
        for (var i = 0, len = global.enemyTank.length; i < len; i++) {
            tmp = global.enemyTank[i];
            if (this == tmp) continue;
            var p = tmp.getPosition();
            var p2w = tmp._s2w, p2h = tmp._s2h;
            if ( ( (Y - s2h > p.y - p2h && Y - s2h < p.y + p2h) || 
                (Y + s2h > p.y - p2h && Y + s2h < p.y + p2h) ||
                (p.y - p2h > Y - s2h && p.y - p2h < Y + s2h) ||
                (p.y + p2h > Y - s2h && p.y + p2h < Y + s2h) )  && 
            (Math.abs(X + s2w - p.x + p2w) <= maxSpace)) {
                return false;
            }
        }
        if (X + s2w > global.warMap.width + this.MBH) {
            return false;
        }
        return true;
    },
});

// the PlayerTank extended from the Tank.
var PlayerTank = Tank.extend({
    ctor: function(arg) {
        var s = cc.Director.sharedDirector().getWinSize();
        // border 
        // MBW = map border width
        // MBH = map border height
        this.MBW = 57;
        this.MBH = 187;

        this._hp = arg.hp;
        this._HP = arg.hp;
        this._speed = arg.speed;
        this._dir = arg.dir;
        this._factory = arg.factory;
        this._isAlive = true;
        this._bulletType = arg.bulletType.Clone();
        this._bulletType.speed = arg.bulletSpeed || arg.bulletType.speed;
        this._appearPosition = cc.ccp(global.playerPlace.x, global.playerPlace.y);
        this._maxBullet = 2;
        this._fireDelay = 0.4;
        this._canFire = true;
        this._zOrder = global.zOrder.playerTank;

        // TODO
        // this is a helpful variable for it is uesd to decide the max space between the obstacles at the rate 30 depend on the tank's speed.
        // and remember to change it whenever the speed is changed.
        // !!!
        this._maxSpace = this._speed / (30 * 2);

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
        this.setPosition(this._appearPosition);

        global.playerTank.push(this);

        //TODO
        // 因为坦克存在空隙，所以暂时更改contentSize大小，等下次把坦克图片做好，记得改回来。
        this._contentSize = this.getContentSize();
        this._s2w = this._contentSize.width/2 - 5;
        this._s2h = this._contentSize.height/2 - 5;
    //this._s2w = this._contentSize.width/2;
    //this._s2h = this._contentSize.height/2;
    },
    move: function(dt) {
        var newX = this.getPosition().x, newY = this.getPosition().y;
        if ((keys[cc.KEY.w] || keys[cc.KEY.up])) {
            if (this._dir != 'up') {
                this._dir = 'up';
                this.initWithTexture(this._texture, this._upRect);
            } else if (this.canMoveUp()) {
                newY += dt * this._speed;    
            }
        } else if ((keys[cc.KEY.s] || keys[cc.KEY.down])) {
            if (this._dir != 'down') {
                this._dir = 'down';
                this.initWithTexture(this._texture, this._downRect);
            } else if (this.canMoveDown()) {
                newY -= dt * this._speed; 
            }
        } else if ((keys[cc.KEY.a] || keys[cc.KEY.left])) {
            if (this._dir != 'left') {
                this._dir = 'left';
                this.initWithTexture(this._texture, this._leftRect);
            } else if (this.canMoveLeft()) {
                newX -= dt * this._speed;
            }
        } else if ((keys[cc.KEY.d] || keys[cc.KEY.right])) {
            if (this._dir != 'right') {
                this._dir = 'right';
                this.initWithTexture(this._texture, this._rightRect);
            } else if (this.canMoveRight()) {
                newX += dt * this._speed;
            }
        } 
        if (keys[cc.KEY.space]) {
            this.fire();
        }
        this.setPosition(cc.ccp(newX, newY));
    },
    setFireDelay: function() {
        this.unschedule(this.setFireDelay);
        this._canFire = true;
    },
    fire: function() {
        if (global.playerBullet.length >= this._maxBullet || !this._canFire) {
            return;
        }
        var X = this.getPosition().x, Y = this.getPosition().y;

        this._bulletType.dir = this._dir;
        switch(this._dir) {
            case 'up':
                this._bulletType.appearPosition = cc.ccp(X, Y + this._s2h);
                break;
            case 'down':
                this._bulletType.appearPosition = cc.ccp(X, Y - this._s2h);
                break;
            case 'left':
                this._bulletType.appearPosition = cc.ccp(X - this._s2w, Y);
                break;
            case 'right':
                this._bulletType.appearPosition = cc.ccp(X + this._s2w, Y);
                break;
        }
        this._bulletType.owner = 'player';

        var bullet = new NormalBullet(this._bulletType);
        this.getParent().addChild(bullet, bullet._zOrder);
        global.playerBullet.push(bullet);
        
        this._canFire = false;
        this.schedule(this.setFireDelay, this._fireDelay);
        if (global.sound) {
            cc.AudioManager.sharedEngine().playEffect(s_fireEffect);
        }
    },
    hit: function(bullet) {
        /*var a = cc.MoveTo.create(0.12, new cc.Point(0, 20));
        var b = cc.MoveTo.create(0.12, new cc.Point(0, -20));
        var c = cc.MoveTo.create(0.06, new cc.Point(0, 10));
        var d = cc.MoveTo.create(0.06, new cc.Point(0, -10));
        var s = cc.Sequence.create(a, b, c, d, null);
        global.GameLayer.runAction(s);*/

        this._hp -= bullet._power;
        try {   
            var HPreduce = cc.Sprite.create(s_HPreduce, cc.RectMake(30 * bullet._power - 30, 0, 30, 30));
            HPreduce.setPosition( cc.ccp(this.getPosition().x, this.getPosition().y + 10) );
            this.getParent().addChild(HPreduce, global.zOrder.ice_HPreduce);
            HPreduce.runAction(cc.ScaleBy.create(1.5, 1.5, 1.2));
            HPreduce.runAction(cc.Sequence.create(cc.FadeOut.create(1.5), cc.CallFunc.create(HPreduce, HPreduce.removeFromParentAndCleanup)));
        } catch (ex) {
            cc.Log("HPreduce error!")
        }
        if (this._hp <= 0) {
            this.destroy();
            global.GameLayer.playerTankKill();
        } else {
            global.GameLayer.updateHPpanel((this._hp + 0.000001) / this._HP);
        }
    },
    destroy: function() {
        this.explode();
        cc.ArrayRemoveObject(global.playerTank, this);
        this.removeFromParentAndCleanup(true);
        if (global.sound) {
            cc.AudioManager.sharedEngine().playEffect(s_DestroyEffect);
        }
    },
    explode: function() {
        try {
            var a = new Explosion();
            a.setPosition(this.getPosition());
            this.getParent().addChild(a, 101);
            spark(this.getPosition(),this.getParent(), 1.2, 0.7);
        } catch (ex) {
            cc.Log("tank explode error");
        }
        
    }
});

// the EnemyTank extended from the Tank.
var NormalEnemyTank = Tank.extend({
    ctor: function(arg) {
        var s = cc.Director.sharedDirector().getWinSize();

        // border 
        // MBW = map border width
        // MBH = map border height
        this.MBW = 55;
        this.MBH = 185;

        this._hp = arg.hp;
        this._speed = arg.speed;
        this._score = arg.score;

        this._zOrder = global.zOrder.playerTank;

        
        // TODO
        // this is a helpful variable for it is uesd to decide the max space between the obstacles at the rate 30 depend on the tank's speed.
        // and remember to change it whenever the speed is changed.
        // !!!
        this._maxSpace = this._speed / (30 * 2);

        this._dir = arg.dir;
        this._isAlive = true;
        this._bulletType = arg.bulletType.Clone();
        this._itemType = arg.itemType;
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

        var position = global.enemyPlaces[(global.enemyPlaceOrder++) % global.enemyPlaces.length];
        this._appearPosition = cc.ccp(position.x, position.y);
        this.setPosition(this._appearPosition);
        global.enemyTank.push(this);

        //TODO
        // 因为坦克存在空隙，所以暂时更改contentSize大小，等下次把坦克图片做好，记得改回来。
        this._contentSize = this.getContentSize();
        this._s2w = this._contentSize.width/2 - 5;
        this._s2h = this._contentSize.height/2 - 5;
        //this._s2w = this._contentSize.width/2;
        //this._s2h = this._contentSize.height/2;

        this.schedule(this.AImove, 2.75);
    },
    AImove: function(dt) {
        this._dir = directions[Math.floor(Math.random() * 4)];
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
        this.fire();
    },
    move: function(dt) {
        var newX = this.getPosition().x, newY = this.getPosition().y;
        switch(this._dir) {
            case 'up':
                if (this.canMoveUp()) {
                    newY += dt * this._speed;
                }
                break;
            case 'down':
                if (this.canMoveDown()) {
                    newY -= dt * this._speed; 
                }
                break;
            case 'left':
                if (this.canMoveLeft()) {
                    newX -= dt * this._speed;
                }
                break;
            case 'right':
                if (this.canMoveRight()) {
                    newX += dt * this._speed;
                }
                break;
        }
        this.setPosition(cc.ccp(newX, newY));
    },
    fire: function() {
        var X = this.getPosition().x, Y = this.getPosition().y;

        this._bulletType.dir = this._dir;
        switch(this._dir) {
            case 'up':
                this._bulletType.appearPosition = cc.ccp(X, Y + this._s2h);
                break;
            case 'down':
                this._bulletType.appearPosition = cc.ccp(X, Y - this._s2h);
                break;
            case 'left':
                this._bulletType.appearPosition = cc.ccp(X - this._s2w, Y);
                break;
            case 'right':
                this._bulletType.appearPosition = cc.ccp(X + this._s2w, Y);
                break;
        }
        this._bulletType.owner = 'enemy';

        var bullet = new NormalBullet(this._bulletType);
        this.getParent().addChild(bullet, bullet._zOrder);
        global.enemyBullet.push(bullet);
        if (global.sound) {
            cc.AudioManager.sharedEngine().playEffect(s_fireEffect);
        }
    },
    hit: function(bullet) {
        this._hp -= bullet._power;
        try {   
            var HPreduce = cc.Sprite.create(s_HPreduce, cc.RectMake(30 * bullet._power - 30, 0, 30, 30));
            HPreduce.setPosition( cc.ccp(this.getPosition().x, this.getPosition().y + 10) );
            this.getParent().addChild(HPreduce, global.zOrder.ice_HPreduce);
            HPreduce.runAction(cc.ScaleBy.create(1.5, 1.5, 1.2));
            HPreduce.runAction(cc.Sequence.create(cc.FadeOut.create(1.5), cc.CallFunc.create(HPreduce, HPreduce.removeFromParentAndCleanup)));
        } catch (ex) {
            cc.Log("HPreduce error!")
        }
        if (this._hp <= 0) {
            this.destroy();
            global.GameLayer.anEnemyTankKill(this);
        }
    },
    destroy: function() {
        this.explode();
        if (this._itemType) {
            var tmp = {
                appearPosition: this.getPosition()
            };
            var item = new this._itemType(tmp);
            this.getParent().addChild(item, global.zOrder.item, TAG_RANDOM++);
            global.item.push(item);
        }
        cc.ArrayRemoveObject(global.enemyTank,this);
        this.removeFromParentAndCleanup(true);
        if (global.sound) {
            cc.AudioManager.sharedEngine().playEffect(s_DestroyEffect);
        }
    },
    explode: function() {
        try {
            var a = new Explosion();
            a.setPosition(this.getPosition());
            this.getParent().addChild(a, 101);
            spark(this.getPosition(),this.getParent(), 1.2, 0.7);
        } catch (ex) {
            cc.Log("tank explode error");   
        }
       
    }
});

// the tank to set up rocket.
var RocketTank = NormalEnemyTank.extend({
    fire: function() {
        var X = this.getPosition().x, Y = this.getPosition().y;

        this._bulletType.dir = this._dir;
        switch(this._dir) {
            case 'up':
                this._bulletType.appearPosition = cc.ccp(X, Y + this._s2h);
                break;
            case 'down':
                this._bulletType.appearPosition = cc.ccp(X, Y - this._s2h);
                break;
            case 'left':
                this._bulletType.appearPosition = cc.ccp(X - this._s2w, Y);
                break;
            case 'right':
                this._bulletType.appearPosition = cc.ccp(X + this._s2w, Y);
                break;
        }
        this._bulletType.owner = 'enemy';

        var rocket = new RocketBullet(this._bulletType);
        this.getParent().addChild(rocket, rocket._zOrder);
        global.rocketBullet.push(rocket);
        if (global.sound) {
            cc.AudioManager.sharedEngine().playEffect(s_missile1);
        }
    },
});

// the StrikeBackTank extended from the NormalEnemyTank with the function that
// it will strike back after hit.
var StrikeBackTank = NormalEnemyTank.extend({
    // strike back
    hit: function(bullet) {
        this._hp -= bullet._power;
        try {   
            var HPreduce = cc.Sprite.create(s_HPreduce, cc.RectMake(30 * bullet._power - 30, 0, 30, 30));
            HPreduce.setPosition( cc.ccp(this.getPosition().x, this.getPosition().y + 10) );
            this.getParent().addChild(HPreduce, global.zOrder.ice_HPreduce);
            HPreduce.runAction(cc.ScaleBy.create(1.5, 1.5, 1.2));
            HPreduce.runAction(cc.Sequence.create(cc.FadeOut.create(1.5), cc.CallFunc.create(HPreduce, HPreduce.removeFromParentAndCleanup)));
        } catch (ex) {
            cc.Log("HPreduce error!")
        }
        if (this._hp <= 0) {
            this.destroy();
            global.GameLayer.anEnemyTankKill(this);
        } else {
            switch(bullet._dir) {
                case 'up':
                    this._dir = 'down';
                    this.initWithTexture(this._texture, this._downRect);
                    break;
                case 'down':
                    this._dir = 'up';
                    this.initWithTexture(this._texture, this._upRect);
                    break;
                case 'left':
                    this._dir = 'right';
                    this.initWithTexture(this._texture, this._rightRect);
                    break;
                case 'right':
                    this._dir = 'left';
                    this.initWithTexture(this._texture, this._leftRect);
                    break;
            }
            this.fire();
        }
    }
});

// the InvisibilityTank extended from the NormalEnemyTank with the function invisibility.
var InvisibilityTank = NormalEnemyTank.extend({
    AImove: function(dt) {
        this._dir = directions[Math.floor(Math.random() * 4)];
        switch(this._dir) {
            case 'up':
                this.initWithTexture(this._texture, this._upRect);
                this.setOpacity(global.opacity);
                break;
            case 'down':
                this.initWithTexture(this._texture, this._downRect);
                this.setOpacity(global.opacity);
                break;
            case 'left':
                this.initWithTexture(this._texture, this._leftRect);
                this.setOpacity(global.opacity);
                break;
            case 'right':
                this.initWithTexture(this._texture, this._rightRect);
                this.setOpacity(global.opacity);
                break;
        }
        this.fire();
    },
    move: function(dt) {
        var newX = this.getPosition().x, newY = this.getPosition().y;
        switch(this._dir) {
            case 'up':
                if (this.canMoveUp()) {
                    newY += dt * this._speed;
                }
                break;
            case 'down':
                if (this.canMoveDown()) {
                    newY -= dt * this._speed; 
                }
                break;
            case 'left':
                if (this.canMoveLeft()) {
                    newX -= dt * this._speed;
                }
                break;
            case 'right':
                if (this.canMoveRight()) {
                    newX += dt * this._speed;
                }
                break;
        }
        this.setPosition(cc.ccp(newX, newY));
        this.setOpacity(global.opacity);
    },
});

// the missile tank.
var MissileTank = NormalEnemyTank.extend({
    ctor: function(arg) {
        var s = cc.Director.sharedDirector().getWinSize();

        this._hp = arg.hp;
        this._score = arg.score;

        this._zOrder = global.zOrder.playerTank;

        
        // TODO
        // this is a helpful variable for it is uesd to decide the max space between the obstacles at the rate 30 depend on the tank's speed.
        // and remember to change it whenever the speed is changed.
        // !!!
        this._maxSpace = this._speed / (30 * 2);

        this._dir = arg.dir;
        this._isAlive = true;

        this._bulletType = arg.bulletType.Clone();
        this._itemType = arg.itemType;

        this._texture = cc.TextureCache.sharedTextureCache().addImage(arg.texture);
        this.initWithTexture(this._texture);

        var position = global.enemyPlaces[(global.enemyPlaceOrder++) % global.enemyPlaces.length];
        this._appearPosition = cc.ccp(position.x, position.y);
        this.setPosition(this._appearPosition);
        global.enemyTank.push(this);

        this._interval = arg.interval;

        //TODO
        // 因为坦克存在空隙，所以暂时更改contentSize大小，等下次把坦克图片做好，记得改回来。
        this._contentSize = this.getContentSize();
        this._s2w = this._contentSize.width/2 - 5;
        this._s2h = this._contentSize.height/2 - 5;
        //this._s2w = this._contentSize.width/2;
        //this._s2h = this._contentSize.height/2;
        this.schedule(this.fire, this._interval);
    },
    fire: function() {
        var X = this.getPosition().x, Y = this.getPosition().y;
        //console.log("X - Y:", ""+X+"-"+Y);

        var tmp = this._bulletType.Clone();
        tmp.dir = this._dir;

        switch(this._dir) {
            case 'up':
                tmp.appearPosition = cc.ccp(X, Y + this._s2h);
                break;
            case 'down':
                tmp.appearPosition = cc.ccp(X, Y - this._s2h);
                break;
            case 'left':
                tmp.appearPosition = cc.ccp(X - this._s2w, Y);
                break;
            case 'right':
                tmp.appearPosition = cc.ccp(X + this._s2w, Y);
                break;
        }
        tmp.owner = 'enemy';

        var bullet = new MissileBullet(tmp);
        this.getParent().addChild(bullet, bullet._zOrder);
        global.enemyMissile.push(bullet);
        if (global.sound) {
            cc.AudioManager.sharedEngine().playEffect(s_missile2);
        }
    },
    move: function() {
    },
});

// the scene1 boss.
var Scene1Boss = NormalEnemyTank.extend({
    ctor: function(arg) {
        this._super(arg);
        this._bulletType2 = arg.bulletType2;
        this._isInvisble = false;
        this._oopacity = 255;
        this.schedule(this.fire, 3);
        this.schedule(this.missileFire, 5);
        this.schedule(this.becomeInvisble, 6);
    },
    becomeInvisble: function() {
        if (this._isInvisble) {
            this._oopacity = 255;
            this._isInvisble = false;
            cc.Log("false");
        } else {
            this._oopacity = 10;
            this._isInvisble = true;
            cc.Log("true");
        }
    },
    AImove: function(dt) {
        this._dir = directions[Math.floor(Math.random() * 4)];
        switch(this._dir) {
            case 'up':
                this.initWithTexture(this._texture, this._upRect);
                this.setOpacity(this._oopacity);
                break;
            case 'down':
                this.initWithTexture(this._texture, this._downRect);
                this.setOpacity(this._oopacity);
                break;
            case 'left':
                this.initWithTexture(this._texture, this._leftRect);
                this.setOpacity(this._oopacity);
                break;
            case 'right':
                this.initWithTexture(this._texture, this._rightRect);
                this.setOpacity(this._oopacity);
                break;
        }
    },
    move: function(dt) {
        var newX = this.getPosition().x, newY = this.getPosition().y;
        switch(this._dir) {
            case 'up':
                if (this.canMoveUp()) {
                    newY += dt * this._speed;
                }
                break;
            case 'down':
                if (this.canMoveDown()) {
                    newY -= dt * this._speed; 
                }
                break;
            case 'left':
                if (this.canMoveLeft()) {
                    newX -= dt * this._speed;
                }
                break;
            case 'right':
                if (this.canMoveRight()) {
                    newX += dt * this._speed;
                }
                break;
        }
        this.setPosition(cc.ccp(newX, newY));
        this.setOpacity(this._oopacity);
    },
    fire: function() {
        var X = this.getPosition().x, Y = this.getPosition().y;

        var tmp = this._bulletType.Clone();
        var tmp2 = this._bulletType.Clone();

        tmp.dir = this._dir;
        tmp2.dir = this._dir;

        switch(this._dir) {
            case 'up':
                tmp.appearPosition = cc.ccp(X - this._s2w, Y + this._s2h);
                tmp2.appearPosition = cc.ccp(X + this._s2w, Y + this._s2h);
                break;
            case 'down':
                tmp.appearPosition = cc.ccp(X - this._s2w, Y - this._s2h);
                tmp2.appearPosition = cc.ccp(X + this._s2w, Y - this._s2h);
                break;
            case 'left':
                tmp.appearPosition = cc.ccp(X - this._s2w, Y - this._s2h);
                tmp2.appearPosition = cc.ccp(X - this._s2w, Y + this._s2h);
                break;
            case 'right':
                tmp.appearPosition = cc.ccp(X + this._s2w, Y - this._s2h);
                tmp2.appearPosition = cc.ccp(X + this._s2w, Y + this._s2h);
                break;
        }
        tmp.owner = 'enemy';
        tmp2.owner = 'enemy';

        var bullet = new NormalBullet(tmp);
        var bullet2 = new NormalBullet(tmp2);

        this.getParent().addChild(bullet, bullet._zOrder);
        this.getParent().addChild(bullet2, bullet._zOrder);

        global.enemyBullet.push(bullet);
        global.enemyBullet.push(bullet2);
    },
    missileFire: function() {
        var X = this.getPosition().x, Y = this.getPosition().y;

        this._bulletType2.dir = this._dir;
        switch(this._dir) {
            case 'up':
                this._bulletType2.appearPosition = cc.ccp(X, Y + this._s2h);
                break;
            case 'down':
                this._bulletType2.appearPosition = cc.ccp(X, Y - this._s2h);
                break;
            case 'left':
                this._bulletType2.appearPosition = cc.ccp(X - this._s2w, Y);
                break;
            case 'right':
                this._bulletType2.appearPosition = cc.ccp(X + this._s2w, Y);
                break;
        }
        this._bulletType.owner = 'enemy';

        var bullet = new MissileBullet(this._bulletType2);
        this.getParent().addChild(bullet, bullet._zOrder);
        global.enemyMissile.push(bullet);
    },
    hit: function(bullet) {
        this._hp -= bullet._power;
        try {   
            var HPreduce = cc.Sprite.create(s_HPreduce, cc.RectMake(30 * bullet._power - 30, 0, 30, 30));
            HPreduce.setPosition( cc.ccp(this.getPosition().x, this.getPosition().y + 10) );
            this.getParent().addChild(HPreduce, global.zOrder.ice_HPreduce);
            HPreduce.runAction(cc.ScaleBy.create(1.5, 1.5, 1.2));
            HPreduce.runAction(cc.Sequence.create(cc.FadeOut.create(1.5), cc.CallFunc.create(HPreduce, HPreduce.removeFromParentAndCleanup)));
        } catch (ex) {
            cc.Log("HPreduce error!")
        }
        if (this._hp <= 0) {
            this.destroy();
            global.GameLayer.anEnemyTankKill(this);
        } else {
            switch(bullet._dir) {
                case 'up':
                    this._dir = 'down';
                    this.initWithTexture(this._texture, this._downRect);
                    this.setOpacity(this._oopacity);
                    break;
                case 'down':
                    this._dir = 'up';
                    this.initWithTexture(this._texture, this._upRect);
                    this.setOpacity(this._oopacity);
                    break;
                case 'left':
                    this._dir = 'right';
                    this.initWithTexture(this._texture, this._rightRect);
                    this.setOpacity(this._oopacity);
                    break;
                case 'right':
                    this._dir = 'left';
                    this.initWithTexture(this._texture, this._leftRect);
                    this.setOpacity(this._oopacity);
                    break;
            }
            this.fire();
        }
    }
});

// the scene2 boss.
var Scene2Boss = NormalEnemyTank.extend({
    canMoveUp: function() {
        var X = this.getPosition().x, Y = this.getPosition().y;
        var s2w = this._s2w, s2h = this._s2h, tmp;

        if (Y + s2h > global.warMap.height + this.MBW) {
            return false;
        }
        return true;
    },
    canMoveDown: function() {
        var s2w = this._s2w, s2h = this._s2h;
        var X = this.getPosition().x, Y = this.getPosition().y;
        
        if (Y - s2h < -this.MBW) {
            return false;
        }
        return true;
    },
    canMoveLeft: function() {
        var s2w = this._s2w, s2h = this._s2h;
        var X = this.getPosition().x, Y = this.getPosition().y;
        
        if (X - s2w < -this.MBH) {
            return false;
        }
        return true;
    },
    canMoveRight: function() {
        var s2w = this._s2w, s2h = this._s2h;
        var X = this.getPosition().x, Y = this.getPosition().y;
        
        if (X + s2w > global.warMap.width + this.MBH) {
            return false;
        }
        return true;
    },
    ctor: function(arg) {
        this._super(arg);
        this.unschedule(this.AImove);
        this._zOrder = global.zOrder.bullet + 1;
        this._bulletType2 = arg.bulletType2;
        this.schedule(this.AImove, 2);
        this.schedule(this.rocketFire, 1.2);
        this.schedule(this.burstFire, 4);
    },
    AImove: function(dt) {
        this._dir = directions[Math.floor(Math.random() * 4)];
        switch(this._dir) {
            case 'up':
                this.initWithTexture(this._texture, this._upRect);
                this.setOpacity(this._oopacity);
                break;
            case 'down':
                this.initWithTexture(this._texture, this._downRect);
                this.setOpacity(this._oopacity);
                break;
            case 'left':
                this.initWithTexture(this._texture, this._leftRect);
                this.setOpacity(this._oopacity);
                break;
            case 'right':
                this.initWithTexture(this._texture, this._rightRect);
                this.setOpacity(this._oopacity);
                break;
        }
    },
    rocketFire: function() {
        // TODO
        var X = this.getPosition().x, Y = this.getPosition().y;

        var tmp = this._bulletType.Clone();
        var tmp2 = this._bulletType.Clone();
        var tmp3 = this._bulletType.Clone();
        var tmp4 = this._bulletType.Clone();

        tmp.dir = 'up';
        tmp2.dir = 'down';
        tmp3.dir = 'left';
        tmp4.dir = 'right';

        tmp.appearPosition = cc.ccp(X, Y + this._s2h);
        tmp2.appearPosition = cc.ccp(X, Y - this._s2h);
        tmp3.appearPosition = cc.ccp(X - this._s2w, Y);
        tmp4.appearPosition = cc.ccp(X + this._s2w, Y);

        tmp.owner = 'enemy';
        tmp2.owner = 'enemy';
        tmp3.owner = 'enemy';
        tmp4.owner = 'enemy';

        var rocket = new RocketBullet(tmp);
        var rocket2 = new RocketBullet(tmp2);
        var rocket3 = new RocketBullet(tmp3);
        var rocket4 = new RocketBullet(tmp4);

        this.getParent().addChild(rocket, rocket._zOrder);
        this.getParent().addChild(rocket2, rocket._zOrder);
        this.getParent().addChild(rocket3, rocket._zOrder);
        this.getParent().addChild(rocket4, rocket._zOrder);

        global.rocketBullet.push(rocket);
        global.rocketBullet.push(rocket2);
        global.rocketBullet.push(rocket3);
        global.rocketBullet.push(rocket4);
    },
    burstFire: function() {
        var X = this.getPosition().x, Y = this.getPosition().y;
        var tmp = this._bulletType2.Clone();

        tmp.appearPosition = cc.ccp(X, Y);

        var bullet = new BurstBullet(tmp);
        this.getParent().addChild(bullet, bullet._zOrder);
        global.enemyBurst.push(bullet);
    },
}); 

// the fly tank.
var FlyTank = NormalEnemyTank.extend({
    canMoveUp: function() {
        var X = this.getPosition().x, Y = this.getPosition().y;
        var s2w = this._s2w, s2h = this._s2h, tmp;

        if (Y + s2h > global.warMap.height + this.MBW) {
            return false;
        }
        return true;
    },
    canMoveDown: function() {
        var s2w = this._s2w, s2h = this._s2h;
        var X = this.getPosition().x, Y = this.getPosition().y;
    
        if (Y - s2h < -this.MBW) {
            return false;
        }
        return true;
    },
    canMoveLeft: function() {
        var s2w = this._s2w, s2h = this._s2h;
        var X = this.getPosition().x, Y = this.getPosition().y;

        if (X - s2w < -this.MBH) {
            return false;
        }
        return true;
    },
    canMoveRight: function() {
        var s2w = this._s2w, s2h = this._s2h;
        var X = this.getPosition().x, Y = this.getPosition().y;
   
        if (X + s2w > global.warMap.width + this.MBH) {
            return false;
        }
        return true;
    },
    ctor: function(arg) {
        var s = cc.Director.sharedDirector().getWinSize();

        // border 
        // MBW = map border width
        // MBH = map border height
        this.MBW = 55;
        this.MBH = 185;

        this._hp = arg.hp;
        this._speed = arg.speed;
        this._score = arg.score;
        this._zOrder = global.zOrder.flyTank;
        
        // TODO
        // this is a helpful variable for it is uesd to decide the max space between the obstacles at the rate 30 depend on the tank's speed.
        // and remember to change it whenever the speed is changed.
        // !!!
        this._maxSpace = this._speed / (30 * 2);

        this._dir = arg.dir;
        this._isAlive = true;
        this._bulletType = arg.bulletType.Clone();
        this._itemType = arg.itemType;
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

        var position = global.enemyPlaces[(global.enemyPlaceOrder++) % global.enemyPlaces.length];
        this._appearPosition = cc.ccp(position.x, position.y);
        // this._appearPosition = cc.ccp(arg.position.x, arg.position.y);
        this.setPosition(this._appearPosition);
        global.flyTank.push(this);

        //TODO
        // 因为坦克存在空隙，所以暂时更改contentSize大小，等下次把坦克图片做好，记得改回来。
        this._contentSize = this.getContentSize();
        this._s2w = this._contentSize.width/2 - 5;
        this._s2h = this._contentSize.height/2 - 5;
        //this._s2w = this._contentSize.width/2;
        //this._s2h = this._contentSize.height/2;

        this.schedule(this.AImove, 2);
    },
    fire: function() {

        var X = this.getPosition().x, Y = this.getPosition().y;
        var tmp = this._bulletType.Clone();

        tmp.appearPosition = cc.ccp(X, Y);

        var bullet = new BurstBullet(tmp);
        this.getParent().addChild(bullet, bullet._zOrder);
        global.enemyBurst.push(bullet);
    },
    destroy: function() {
        this.explode();
        if (this._itemType) {
            var tmp = {
                appearPosition: this.getPosition()
            };
            var item = new this._itemType(tmp);
            this.getParent().addChild(item, global.zOrder.item, TAG_RANDOM++);
            global.item.push(item);
        }
        cc.ArrayRemoveObject(global.flyTank,this);
        this.removeFromParentAndCleanup(true);
        if (global.sound) {
            cc.AudioManager.sharedEngine().playEffect(s_flyexplosion);
        }
    },
});


// the fly tank2.
var FlyTank2 = FlyTank.extend({
    ctor: function(arg) {
        this._super(arg);
        this.schedule(this.fire, 5);
    },
    AImove: function(dt) {
        this._dir = directions[Math.floor(Math.random() * 4)];
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
    // this.fire();
    },
    fire: function() {
        /*if (!this._canFire) {
            return;
        }*/

        var X = this.getPosition().x, Y = this.getPosition().y;
        var tmp = this._bulletType.Clone();

        tmp.appearPosition = cc.ccp(X, Y);

        var bullet = new BurstBullet2(tmp);
        this.getParent().addChild(bullet, bullet._zOrder);
        global.enemyBurst2.push(bullet);

    /*this._canFire = false;
        this.schedule(this.setFireDelay, this._fireDelay);*/
    },
});


// the fly tracing tank.
var FlyTraceTank = FlyTank.extend({
    move: function(dt) {
        var newX = this.getPosition().x, newY = this.getPosition().y;
        if (global.playerTank.length <= 0) return;
        var targetPostion = global.playerTank[0].getPosition();
        var diffX = targetPostion.x - newX;
        var diffY = targetPostion.y - newY;

        if (Math.abs(diffX) >= Math.abs(diffY)) {
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
    hit: function(bullet) {
        this._hp -= bullet._power;
        try {   
            var HPreduce = cc.Sprite.create(s_HPreduce, cc.RectMake(30 * bullet._power - 30, 0, 30, 30));
            HPreduce.setPosition( cc.ccp(this.getPosition().x, this.getPosition().y + 10) );
            this.getParent().addChild(HPreduce, global.zOrder.ice_HPreduce);
            HPreduce.runAction(cc.ScaleBy.create(1.5, 1.5, 1.2));
            HPreduce.runAction(cc.Sequence.create(cc.FadeOut.create(1.5), cc.CallFunc.create(HPreduce, HPreduce.removeFromParentAndCleanup)));
        } catch (ex) {
            cc.Log("HPreduce error!")
        }
        if (this._hp <= 0) {
            // this.destroy();
            this.selfExplode();
            
        }
    },
    selfExplode: function() {
        var a = cc.MoveBy.create(2, new cc.Point(10, 10));
        var destroy = cc.CallFunc.create(this, this.destroy);
        // global.GameLayer.anEnemyTankKill(this);
        var enemyKill = cc.CallFunc.create(global.GameLayer, global.GameLayer.anEnemyTankKill);
        var s = cc.Sequence.create(a, destroy, enemyKill, null);
        this.runAction(s);
    },
    destroy: function() {
        this.explode();
        for (var i = 0; i < global.playerTank.length; i++) {
            var position = global.playerTank[i].getPosition();
            if ( Math.abs(this.getPosition().x - position.x) <= global.warMap.tileWidth * 2.5 &&
                Math.abs(this.getPosition().y - position.y) <= global.warMap.tileHeight * 2.5 )
                global.playerTank[i].hit( {
                    _power: 2, 
                    _dir: 'right'
                } );
        }
        if (this._itemType) {
            var tmp = {
                appearPosition: this.getPosition()
            };
            var item = new this._itemType(tmp);
            this.getParent().addChild(item, global.zOrder.item, TAG_RANDOM++);
            global.item.push(item);
        }
        cc.ArrayRemoveObject(global.flyTank,this);
        this.removeFromParentAndCleanup(true);
    },
    explode: function() {
        var a = new Explosion();
        a.setPosition(this.getPosition());
        this.getParent().addChild(a, 101);
        spark(this.getPosition(),this.getParent(), 1.2, 0.7);
    },
});