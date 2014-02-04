// Mebu Layer
var MenuLayer = cc.Layer.extend({
    
    init:function () {
        var bRet = false;
        if (this._super) {
            winSize = cc.Director.sharedDirector().getWinSize();
            this.initBackground();
            
               if (global.sound) {
               cc.AudioManager.sharedEngine().setBackgroundMusicVolume(0.7);
                cc.AudioManager.sharedEngine().playBackgroundMusic(s_bgMusic02, true);
            }
           
            // accept touch now!
            this.setIsTouchEnabled(true);           
            
            var newGameNormal = cc.Sprite.create(s_newgame, cc.RectMake(0, 0, 250,240));
            var newGameSelected = cc.Sprite.create(s_newgame, cc.RectMake(268, 0, 254,240));
          
            var gameSettingsNormal = cc.Sprite.create(s_tankOA, cc.RectMake(0, 0, 100,59));
            var gameSettingsSelected = cc.Sprite.create(s_tankOA, cc.RectMake(0, 59,100,59));
            
            var gameAboutNormal = cc.Sprite.create(s_tankOA, cc.RectMake(103, 0, 100,59));
            var gameAboutSelected = cc.Sprite.create(s_tankOA, cc.RectMake(103, 59,100,59));

            var newGame = cc.MenuItemSprite.create(newGameNormal, newGameSelected, this, this.onNewGame);

            // make the new game label to scale
            var actionBy = cc.ScaleBy.create(1, 1.1);
            newGame.runAction(cc.RepeatForever.create(cc.Sequence.create(actionBy, actionBy.reverse())));
            // make the new game label to scale
            
            var gameSettings = cc.MenuItemSprite.create(gameSettingsNormal, gameSettingsSelected,this,this.onNewGame);
            
            var gameAbout = cc.MenuItemSprite.create(gameAboutNormal, gameAboutSelected ,this,this.onNewAbout);
            
            var menu01 = cc.Menu.create(newGame);
      
            this.addChild(menu01, 3);
            menu01.setPosition(cc.ccp(winSize.width / 2-250, winSize.height / 2));   
            
            var tmp = cc.TextureCache.sharedTextureCache().addImage(s_tankM);
            var tankM= cc.Sprite.createWithTexture(tmp);
            tankM.setAnchorPoint(cc.ccp(0, 0));
            this.addChild(tankM, 0);  
              
            var title= cc.TextureCache.sharedTextureCache().addImage(s_tankTitle);
            var tanktitle= cc.Sprite.createWithTexture(title);
            tanktitle.setPosition(cc.ccp(winSize.width / 2, winSize.height / 2 +130));
            this.addChild(tanktitle, 1);  
            
            //zhadan        
            var zhadanTexture = cc.TextureCache.sharedTextureCache().addImage(s_zhadan);
            var zhadantitle= cc.Sprite.createWithTexture(zhadanTexture );
            zhadantitle.setPosition(cc.ccp(winSize.width / 2+170, winSize.height / 2 +130));
            this.addChild(zhadantitle,4);           
            var animation01 = cc.Animation.create();
            animation01.addFrameWithTexture(zhadanTexture, cc.RectMake(0, 0, 148,139));
            animation01.addFrameWithTexture(zhadanTexture, cc.RectMake(148, 0, 156, 139));
            var action = cc.Animate.create(0.1, animation01, true);
            zhadantitle.runAction(cc.RepeatForever.create(action));

                       
            var menu02 = cc.Menu.create(gameSettings);    
            this.addChild(menu02, 1);
            menu02.setAnchorPoint(cc.ccp(1, 1));
            menu02.setPosition(cc.ccp(winSize.width-60, winSize.height-40));      
            
            var menu03 = cc.Menu.create(gameAbout);
         
            this.addChild(menu03, 1);
            menu03.setAnchorPoint(cc.ccp(1, 1));
            menu03.setPosition(cc.ccp(winSize.width-60, winSize.height-110));       

            bRet = true;
        }
        return bRet;
    },
    onNewGame:function (pSender) {
        this.onButtonEffect();
        var scene = LevelLayer.scene();
        cc.Director.sharedDirector().replaceScene(cc.TransitionFade.create(1.2, scene));
  
    },

    onNewAbout:function (pSender) {
        this.onButtonEffect();
        var scene = AboutLayer.scene();
        cc.Director.sharedDirector().replaceScene(cc.TransitionFade.create(1.2, scene));
    },
   
    
    initBackground:function () {
        this.sp = cc.Sprite.create(s_loading);
        this.sp.setAnchorPoint(cc.ccp(0.5,0)); 
        this.spbackHeight = this.sp.getContentSize().height;
        this.addChild(this.sp, -10, 1);   
        
        var actionTo = cc.MoveBy.create(20, new cc.Point(960, 0));
        var actionTo2 = cc.MoveBy.create(20, new cc.Point(-960, 0));
        var seq=cc.Sequence.create(actionTo, actionTo2, null);
        var rep1=cc.RepeatForever.create(seq);          
        this.sp.runAction(rep1);
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

MenuLayer.create = function () {
    var sg = new MenuLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

MenuLayer.scene = function () {
    var scene = cc.Scene.create();
    var layer = MenuLayer.create();
    scene.addChild(layer);
    return scene;
};  
