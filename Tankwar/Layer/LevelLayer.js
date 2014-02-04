var TAG_SCENE_01 = 4;
var TAG_SCENE_02 = 5;
var TAG_SCENE_03 = 6;

var LevelLayer = cc.Layer.extend({

    ctor: function() {
        this.menu01 = null;
        this.menu02 = null;
        this._sceneNum = 1;
        this.menuAll = [];
    },
    init:function () {

        var bRet = false;

        if (this._super) {
            //console.log("level:", this._sceneNum);
            
              if (global.sound) {
               cc.AudioManager.sharedEngine().setBackgroundMusicVolume(0.7);
                cc.AudioManager.sharedEngine().playBackgroundMusic(s_bgMusic02, true);
            }

            ls = this;

            this.winSize = cc.Director.sharedDirector().getWinSize();

            this.initBackground();
            
            var level01 = cc.Sprite.create(s_sceneselect,cc.RectMake(0, 0, 381,247));
            var level02 = cc.Sprite.create(s_sceneselect,cc.RectMake(0, 0, 381,247));
            var newGameScene01 = cc.MenuItemSprite.create(level01, level02, this, this.onNewScene);

            var level03 = cc.Sprite.create(s_sceneselect,cc.RectMake(381, 0, 381,247));
            var level04 = cc.Sprite.create(s_sceneselect,cc.RectMake(381, 0, 381,247));
            var newGameScene02 = cc.MenuItemSprite.create(level03, level04, this, this.onNewScene);

            this.menu01 = cc.Menu.create(newGameScene01);
            this.menu01.levelNum = 1;
            this.addChild(this.menu01, 3, TAG_SCENE_01);
            this.menu01.setPosition(cc.ccp(this.winSize.width / 2, this.winSize.height / 2 + 93));   
            this.menuAll.push(this.menu01);
            
            this.menu02= cc.Menu.create(newGameScene02);
            this.menu02.levelNum = 2;
            this.addChild(this.menu02, 3, TAG_SCENE_02);
            this.menu02.setPosition(cc.ccp(this.winSize.width / 2 + 480, this.winSize.height / 2 + 93));   
            this.menuAll.push(this.menu02);
            
            var leftbutton01= cc.Sprite.create(s_levelbutton,cc.RectMake(0, 0, 61,75));
            var leftbutton02= cc.Sprite.create(s_levelbutton,cc.RectMake(61, 0, 61,75));
            var newleft= cc.MenuItemSprite.create(leftbutton01,leftbutton02,this, this.onNewleft);
            var menu03= cc.Menu.create(newleft);
            this.addChild(menu03, 3);
            menu03.setPosition(cc.ccp(237, this.winSize.height / 2+100));   
 
            var rightbutton01= cc.Sprite.create(s_levelbutton,cc.RectMake(128, 0, 61,75));
            var rightbutton02= cc.Sprite.create(s_levelbutton,cc.RectMake(194, 0, 61,75));
            var newright= cc.MenuItemSprite.create(rightbutton01,rightbutton02,this, this.onNewright);
            var menu04= cc.Menu.create(newright);
            this.addChild(menu04, 3);
            menu04.setPosition(cc.ccp(723, this.winSize.height / 2+100));   
            
            var title=cc.Sprite.create(s_leveltitle);
            this.addChild(title, 3);
            var actionUp = cc.JumpBy.create(4, cc.PointMake(0, 0), 30, 4);
            title.setPosition(cc.ccp(this.winSize.width / 2, this.winSize.height / 2-150));   
            title.runAction(cc.RepeatForever.create(actionUp));
            
            var gamebackNormal = cc.Sprite.create(s_backbt, cc.RectMake(0, 0, 66,64));
            var gamebackSelected = cc.Sprite.create(s_backbt, cc.RectMake(66, 0,66,64));
            var newback= cc.MenuItemSprite.create(gamebackNormal , gamebackSelected, this, this.backCallback);
            var backcall= cc.Menu.create(newback);    
            this.addChild(backcall, 3);
            backcall.setAnchorPoint(cc.ccp(1, 1));
            backcall.setPosition(cc.ccp(this.winSize.width-60, 40));      
 
            bRet = true;
        }
        return bRet;
    },
    backCallback:function (pSender) {
        this.onButtonEffect();
        var scene = cc.Scene.create();
        scene.addChild(MenuLayer.create());
        cc.Director.sharedDirector().replaceScene(cc.TransitionFade.create(1.2,scene));

    },
    onNewleft:function () {
        this.onButtonEffect();
        if (this._sceneNum == global.allScene) return;
        this._sceneNum++;
        //console.log("level:", this._sceneNum);
        for (var i = 0, len = this.menuAll.length; i < len; i++) {
        //for (var i = 0; i < this.menuAll.length; i++) {
            var position = cc.PointMake(this.winSize.width / 2 + (i + 1 - this._sceneNum) * 480, this.winSize.height / 2 + 93);
            var action = cc.MoveTo.create(0.1, position);
            this.menuAll[i].runAction(action);
        }
    },
    onNewright:function () {
        this.onButtonEffect();
        if (this._sceneNum == 1) return;
        this._sceneNum--;
        //console.log("level:", this._sceneNum);
        for (var i = 0, len = this.menuAll.length; i < len; i++) {
        //for (var i = 0; i < this.menuAll.length; i++) {
            var position = cc.PointMake(this.winSize.width / 2 + (i + 1 - this._sceneNum) * 480, this.winSize.height / 2 + 93);
            var action = cc.MoveTo.create(0.1, position);
            this.menuAll[i].runAction(action);
        }
    },
    onNewScene:function (pSender) {
        this.onButtonEffect();
        if (pSender.getParent().levelNum != this._sceneNum) return;
        var scene = LevelSelectLayer.scene(this._sceneNum);
        cc.Director.sharedDirector().replaceScene(cc.TransitionFade.create(1.2, scene));

    },    
    initBackground:function () {
        this.sp = cc.Sprite.create(s_loading1);
        this.sp.setAnchorPoint(cc.ccp(0.5,0)); 
        this.spbackHeight = this.sp.getContentSize().height;
        this.addChild(this.sp, -10, 1);   
        
        var actionTo = cc.MoveBy.create(20, new cc.Point(960, 0));
        var actionTo2 = cc.MoveBy.create(20, new cc.Point(-960, 0));
        var seq=cc.Sequence.create(actionTo, actionTo2, null);
        var rep1=cc.RepeatForever.create(seq);          
        this.sp.runAction(rep1);

        var bg=cc.Sprite.create(s_levelbg);
        bg.setAnchorPoint(cc.ccp(0.5, 0.5));
        bg.setPosition(cc.ccp(this.winSize.width / 2, this.winSize.height / 2-50));   
        this.addChild(bg, -5); 
    },
    onExit: function() {
        // clean work
        this.removeAllChildrenWithCleanup();
    },
    onButtonEffect:function(){
        if (global.sound) {
            var s = cc.AudioManager.sharedEngine().playEffect(s_mouseclick);
        }
    }
});

LevelLayer.create = function () {
    var ll = new LevelLayer();
    if (ll && ll.init()) {
        return ll;
    }
    return null;
};

LevelLayer.scene = function () {
    var scene = cc.Scene.create();
    var layer = LevelLayer.create();
    scene.addChild(layer);
    return scene;
};  
