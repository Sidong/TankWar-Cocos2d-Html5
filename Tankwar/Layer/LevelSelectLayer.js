var TAG_SCENE_01 = 4;
var TAG_SCENE_02 = 5;
var TAG_SCENE_03 = 6;

var LevelSelectLayer = cc.Layer.extend({
  ctor: function(sceneNum) {
        this._sceneNum = sceneNum || 1;
        this._sceneNum = this._sceneNum > global.allScene ? this._sceneNum - global.allScene : this._sceneNum;
     
    },

    init:function () {
        var bRet = false;

        if (this._super) {
            //console.log("level:", this._sceneNum);

            this.winSize = cc.Director.sharedDirector().getWinSize();
            this.initBackground(this._sceneNum);

           
              if (global.sound) {
               cc.AudioManager.sharedEngine().setBackgroundMusicVolume(0.7);
                cc.AudioManager.sharedEngine().playBackgroundMusic(s_bgMusic02, true);
            }
           
            bRet = true;
        }
        return bRet;
    },
    backCallback:function (pSender) {
        this.onButtonEffect();
        var scene = cc.Scene.create();
        scene.addChild(LevelLayer.create());
        cc.Director.sharedDirector().replaceScene(cc.TransitionFade.create(1.2,scene));

    },
    
    onNewScene:function (pSender) {
        this.onButtonEffect();
        var scene = GameLayer.scene(this._sceneNum,pSender.getParent().levelNum);
        cc.Director.sharedDirector().replaceScene(cc.TransitionFade.create(1.2, scene));

    },    
    initBackground:function(sceneNum) { 
      
        var bg = cc.Sprite.create(s_selectlevelbg);
        bg.setAnchorPoint(cc.ccp(0,0)); 
        this.addChild(bg, 0);   
        
        this.sp = cc.Sprite.create(s_selectlevelunderbg);
        this.sp.setAnchorPoint(cc.ccp(0.5,0)); 
        this.spbackHeight = this.sp.getContentSize().height;
        this.addChild(this.sp, -10);   
        
        var actionTo = cc.MoveBy.create(20, new cc.Point(960, 0));
        var actionTo2 = cc.MoveBy.create(20, new cc.Point(-960, 0));
        var seq=cc.Sequence.create(actionTo, actionTo2, null);
        var rep1=cc.RepeatForever.create(seq);          
        this.sp.runAction(rep1);

        var title=cc.Sprite.create(s_selectlevelbt);
        this.addChild(title, 3);
        var actionUp = cc.JumpBy.create(4, cc.PointMake(0, 0), 30, 4);
        title.setPosition(cc.ccp(this.winSize.width / 2, this.winSize.height / 2-230));   
        title.runAction(cc.RepeatForever.create(actionUp)); 

        var gamebackNormal = cc.Sprite.create(s_backbt, cc.RectMake(0, 0, 66,64));
        var gamebackSelected = cc.Sprite.create(s_backbt, cc.RectMake(66, 0,66,64));
        var newback= cc.MenuItemSprite.create(gamebackNormal , gamebackSelected, this, this.backCallback);
        var backcall= cc.Menu.create(newback);    
        this.addChild(backcall, 3);
        backcall.setAnchorPoint(cc.ccp(1, 1));
        backcall.setPosition(cc.ccp(this.winSize.width-60, 40));      
        
if(sceneNum==1){
             cc.Log("level1");
            var level01 = cc.Sprite.create(s_selectlevelbutton,cc.RectMake(0, 0, 220,220));
            var level02 = cc.Sprite.create(s_selectlevelbutton,cc.RectMake(0, 0, 220,220));
            var newGameScene01 = cc.MenuItemSprite.create(level01, level02, this, this.onNewScene);
            this.menu01 = cc.Menu.create(newGameScene01);
            this.menu01.levelNum = 1;
            this.addChild(this.menu01, 10);
            this.menu01.setPosition(cc.ccp(this.winSize.width /8, 2*this.winSize.height / 3 +50));   

            var level03 = cc.Sprite.create(s_selectlevelbutton,cc.RectMake(220, 0, 220,220));
            var level04 = cc.Sprite.create(s_selectlevelbutton,cc.RectMake(220, 0, 220,220));
            var newGameScene02 = cc.MenuItemSprite.create(level03, level04, this, this.onNewScene);
            this.menu02 = cc.Menu.create(newGameScene02);
            this.menu02.levelNum = 2;
            this.addChild(this.menu02, 10);
            this.menu02.setPosition(cc.ccp(3*this.winSize.width /8, 2*this.winSize.height / 3 +50));   

            var level05 = cc.Sprite.create(s_selectlevelbutton,cc.RectMake(440, 0, 220,220));
            var level06 = cc.Sprite.create(s_selectlevelbutton,cc.RectMake(440, 0, 220,220));
            var newGameScene03 = cc.MenuItemSprite.create(level05, level06, this, this.onNewScene);
            this.menu03 = cc.Menu.create(newGameScene03);
            this.menu03.levelNum = 3;
            this.addChild(this.menu03, 10);
            this.menu03.setPosition(cc.ccp(5*this.winSize.width /8, 2*this.winSize.height / 3 +50));   

            var level07 = cc.Sprite.create(s_selectlevelbutton,cc.RectMake(660, 0, 220,220));
            var level08 = cc.Sprite.create(s_selectlevelbutton,cc.RectMake(660, 0, 220,220));
            var newGameScene04 = cc.MenuItemSprite.create(level07, level08, this, this.onNewScene);
            this.menu04 = cc.Menu.create(newGameScene04);
            this.menu04.levelNum = 4;
            this.addChild(this.menu04, 10);
            this.menu04.setPosition(cc.ccp(7*this.winSize.width /8, 2*this.winSize.height / 3 +50));   

            
            var level1 = cc.Sprite.create(s_selectlevelbutton,cc.RectMake(0, 220, 220,220));
            var level2 = cc.Sprite.create(s_selectlevelbutton,cc.RectMake(0, 220, 220,220));
            var newGameScene1 = cc.MenuItemSprite.create(level1, level2, this, this.onNewScene);
            this.menu1 = cc.Menu.create(newGameScene1);
            this.menu1.levelNum = 5;
            this.addChild(this.menu1, 11);
            this.menu1.setPosition(cc.ccp(this.winSize.width /8, this.winSize.height / 3 +50));   

            var level3 = cc.Sprite.create(s_selectlevelbutton,cc.RectMake(220, 220, 220,220));
            var level4 = cc.Sprite.create(s_selectlevelbutton,cc.RectMake(220, 220, 220,220));
            var newGameScene2 = cc.MenuItemSprite.create(level3, level4, this, this.onNewScene);
            this.menu2 = cc.Menu.create(newGameScene2);
            this.menu2.levelNum = 6;
            this.addChild(this.menu2, 11);
            this.menu2.setPosition(cc.ccp(3*this.winSize.width /8, this.winSize.height / 3 +50));   

            var level5 = cc.Sprite.create(s_selectlevelbutton,cc.RectMake(440, 220, 220,220));
            var level6 = cc.Sprite.create(s_selectlevelbutton,cc.RectMake(440, 220, 220,220));
            var newGameScene3 = cc.MenuItemSprite.create(level5, level6, this, this.onNewScene);
            this.menu3 = cc.Menu.create(newGameScene3);
            this.menu3.levelNum = 7;
            this.addChild(this.menu3, 11);
            this.menu3.setPosition(cc.ccp(5*this.winSize.width /8, this.winSize.height / 3+50 ));   

            var level7 = cc.Sprite.create(s_selectlevelbutton,cc.RectMake(660, 220, 220,220));
            var level8 = cc.Sprite.create(s_selectlevelbutton,cc.RectMake(660,220, 220,220));
            var newGameScene4 = cc.MenuItemSprite.create(level7, level8, this, this.onNewScene);
            this.menu4 = cc.Menu.create(newGameScene4);
            this.menu4.levelNum = 8;
            this.addChild(this.menu4, 11);
            this.menu4.setPosition(cc.ccp(7*this.winSize.width /8, this.winSize.height / 3 +50));   

}
else if (sceneNum==2) {
  cc.Log("level2");
            var level01 = cc.Sprite.create(s_selectlevelbutton02,cc.RectMake(0, 0, 220,220));
            var level02 = cc.Sprite.create(s_selectlevelbutton02,cc.RectMake(0, 0, 220,220));
            var newGameScene01 = cc.MenuItemSprite.create(level01, level02, this, this.onNewScene);
            this.menu01 = cc.Menu.create(newGameScene01);
            this.menu01.levelNum = 1;
            this.addChild(this.menu01, 10);
            this.menu01.setPosition(cc.ccp(this.winSize.width /8, 2*this.winSize.height / 3 +50));   

            var level03 = cc.Sprite.create(s_selectlevelbutton02,cc.RectMake(220, 0, 220,220));
            var level04 = cc.Sprite.create(s_selectlevelbutton02,cc.RectMake(220, 0, 220,220));
            var newGameScene02 = cc.MenuItemSprite.create(level03, level04, this, this.onNewScene);
            this.menu02 = cc.Menu.create(newGameScene02);
            this.menu02.levelNum = 2;
            this.addChild(this.menu02, 10);
            this.menu02.setPosition(cc.ccp(3*this.winSize.width /8, 2*this.winSize.height / 3 +50));   

            var level05 = cc.Sprite.create(s_selectlevelbutton02,cc.RectMake(440, 0, 220,220));
            var level06 = cc.Sprite.create(s_selectlevelbutton02,cc.RectMake(440, 0, 220,220));
            var newGameScene03 = cc.MenuItemSprite.create(level05, level06, this, this.onNewScene);
            this.menu03 = cc.Menu.create(newGameScene03);
            this.menu03.levelNum = 3;
            this.addChild(this.menu03, 10);
            this.menu03.setPosition(cc.ccp(5*this.winSize.width /8, 2*this.winSize.height / 3 +50));   

            var level07 = cc.Sprite.create(s_selectlevelbutton02,cc.RectMake(660, 0, 220,220));
            var level08 = cc.Sprite.create(s_selectlevelbutton02,cc.RectMake(660, 0, 220,220));
            var newGameScene04 = cc.MenuItemSprite.create(level07, level08, this, this.onNewScene);
            this.menu04 = cc.Menu.create(newGameScene04);
            this.menu04.levelNum = 4;
            this.addChild(this.menu04, 10);
            this.menu04.setPosition(cc.ccp(7*this.winSize.width /8, 2*this.winSize.height / 3 +50));   

            
            var level1 = cc.Sprite.create(s_selectlevelbutton02,cc.RectMake(0, 220, 220,220));
            var level2 = cc.Sprite.create(s_selectlevelbutton02,cc.RectMake(0, 220, 220,220));
            var newGameScene1 = cc.MenuItemSprite.create(level1, level2, this, this.onNewScene);
            this.menu1 = cc.Menu.create(newGameScene1);
            this.menu1.levelNum = 5;
            this.addChild(this.menu1, 11);
            this.menu1.setPosition(cc.ccp(this.winSize.width /8, this.winSize.height / 3 +50));   

            var level3 = cc.Sprite.create(s_selectlevelbutton02,cc.RectMake(220, 220, 220,220));
            var level4 = cc.Sprite.create(s_selectlevelbutton02,cc.RectMake(220, 220, 220,220));
            var newGameScene2 = cc.MenuItemSprite.create(level3, level4, this, this.onNewScene);
            this.menu2 = cc.Menu.create(newGameScene2);
            this.menu2.levelNum = 6;
            this.addChild(this.menu2, 11);
            this.menu2.setPosition(cc.ccp(3*this.winSize.width /8, this.winSize.height / 3 +50));   

            var level5 = cc.Sprite.create(s_selectlevelbutton02,cc.RectMake(440, 220, 220,220));
            var level6 = cc.Sprite.create(s_selectlevelbutton02,cc.RectMake(440, 220, 220,220));
            var newGameScene3 = cc.MenuItemSprite.create(level5, level6, this, this.onNewScene);
            this.menu3 = cc.Menu.create(newGameScene3);
            this.menu3.levelNum = 7;
            this.addChild(this.menu3, 11);
            this.menu3.setPosition(cc.ccp(5*this.winSize.width /8, this.winSize.height / 3+50 ));   

            var level7 = cc.Sprite.create(s_selectlevelbutton02,cc.RectMake(660, 220, 220,220));
            var level8 = cc.Sprite.create(s_selectlevelbutton02,cc.RectMake(660,220, 220,220));
            var newGameScene4 = cc.MenuItemSprite.create(level7, level8, this, this.onNewScene);
            this.menu4 = cc.Menu.create(newGameScene4);
            this.menu4.levelNum = 8;
            this.addChild(this.menu4, 11);
            this.menu4.setPosition(cc.ccp(7*this.winSize.width /8, this.winSize.height / 3 +50));   


    }

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

LevelSelectLayer.create = function (sceneNum) {
    sceneNum = sceneNum || 1;
    var ll = new LevelSelectLayer(sceneNum);
    if (ll && ll.init()) {
        return ll;
    }
    return null;
};

LevelSelectLayer.scene = function (sceneNum) {
    var scene = cc.Scene.create();
    var layer = LevelSelectLayer.create(sceneNum);
    scene.addChild(layer);
    return scene;
};  
