var WinOrLoseLayer= cc.Layer.extend({

    init:function (isWin, sceneNum, levelNum) {
        var bRet = false;
        this._state = isWin;
        this._sceneNum = sceneNum;
        this._levelNum = levelNum;
        //console.log("win or lose:", "" + this._sceneNum + "-" + this._levelNum);
        //console.log("scene - level:", "" + sceneNum + "-" + levelNum);
        if (this._super()) {
            var sp = cc.Sprite.create(s_winorloseBG);
            sp.setAnchorPoint(cc.PointZero());
            this.addChild(sp, -10);

            var winSize = cc.Director.sharedDirector().getWinSize();

            // score
            this.scoreLabel = cc.LabelBMFont.create("" + global.score, "Resources/font.fnt");
            this.scoreLabel.setPosition(cc.ccp(global.winSize.width/2 + 60, global.winSize.height/2 - 10));
            this.addChild(this.scoreLabel, global.zOrder.lifeHP, ++TAG_RANDOM);
            this.scoreLabel.setScale(1.5, 1.5);

            if (this._state) {
                this.statePanel = cc.Sprite.create(s_winorlose, cc.RectMake(0, 0, 646, 255.5));
            } else {
                this.statePanel = cc.Sprite.create(s_winorlose, cc.RectMake(0, 255.5, 646, 255.5));
                global.score = 0;
            }
            this.statePanel.setPosition(cc.ccp(winSize.width / 2 + 80, winSize.height * 2 / 3 + 60));
            this.addChild(this.statePanel, 10);
            
            
            var gamerestartNormal = cc.Sprite.create(s_winorlosebutton, cc.RectMake(0, 0, 180,97));
            var gamerestartSelected = cc.Sprite.create(s_winorlosebutton, cc.RectMake(0, 97,180,97));
            var newrestart= cc.MenuItemSprite.create(gamerestartNormal , gamerestartSelected, this, this.restartLevel);
            var restartcall= cc.Menu.create(newrestart);    
            this.addChild(restartcall, 1);
            
           
         
            restartcall.setPosition(cc.ccp(1*winSize.width/4, winSize.height/2-150));      
           
            var gamenextNormal = cc.Sprite.create(s_winorlosebutton, cc.RectMake(181, 0, 180,97));
            var gamenextSelected = cc.Sprite.create(s_winorlosebutton, cc.RectMake(181,97, 180,97));
            var newnext= cc.MenuItemSprite.create(gamenextNormal , gamenextSelected, this, this.nextLevel);
            var nextcall= cc.Menu.create(newnext);    
            this.addChild(nextcall, 1);
      
            nextcall.setPosition(cc.ccp(winSize.width/2, winSize.height/2-150));      
           
            var gamebackNormal = cc.Sprite.create(s_winorlosebutton, cc.RectMake(366, 0, 180,97));
            var gamebackSelected = cc.Sprite.create(s_winorlosebutton, cc.RectMake(366, 97, 180,97));
            var newback= cc.MenuItemSprite.create(gamebackNormal , gamebackSelected, this, this.backCallback);
            var backcall= cc.Menu.create(newback);    
            this.addChild(backcall, 1);
           
            backcall.setPosition(cc.ccp(3*winSize.width/4, winSize.height/2-150));      
           
            bRet = true;
        }

        return bRet;
    },
    backCallback:function (pSender) {
        var scene = cc.Scene.create();
        scene.addChild(LevelSelectLayer.create( this._sceneNum));
        cc.Director.sharedDirector().replaceScene(cc.TransitionFade.create(1.2,scene));
    },
    restartLevel: function(pSender) {
        var scene = GameLayer.scene(this._sceneNum, this._levelNum - 1);
        cc.Director.sharedDirector().replaceScene(cc.TransitionSlideInT.create(1, scene));
    },
    nextLevel: function(pSender) {
        var sceneNum = this._sceneNum;
        //console.log("max level:", level["scene"+this._sceneNum].length);
        if (!level["scene"+this._sceneNum]["level"+this._levelNum]) {
            cc.Log("scene done");
            this._sceneNum++;
            this._sceneNum = this._sceneNum % (global.allScene + 1);
            this._levelNum = 1;
        }

        //console.log("give to the gamelayer:", "" + this._sceneNum + "-" + this._levelNum);
        var scene = GameLayer.scene(this._sceneNum, this._levelNum);
        cc.Director.sharedDirector().replaceScene(cc.TransitionSlideInT.create(1, scene));
    },
    onExit: function() {
        // clean work
        this.removeAllChildrenWithCleanup();    },
});

WinOrLoseLayer.create = function (isWin, sceneNum, levelNum) {
    var sg = new WinOrLoseLayer();
    if (sg && sg.init(isWin, sceneNum, levelNum)) {
        return sg;
    }
    return null;
};

WinOrLoseLayer.scene = function (isWin, sceneNum, levelNum) {
    var scene = cc.Scene.create();
    var layer =WinOrLoseLayer.create(isWin, sceneNum, levelNum);
    scene.addChild(layer, 1);
    return scene;
};
