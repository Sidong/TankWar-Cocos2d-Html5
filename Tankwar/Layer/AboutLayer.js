//About

var AboutLayer = cc.Layer.extend({
    init:function () {
        var bRet = false;
        if (this._super()) {
            var sp = cc.Sprite.create(s_about);
            sp.setAnchorPoint(cc.PointZero());
            this.addChild(sp, 0, 1);
            
            var gamebackNormal = cc.Sprite.create(s_backbt, cc.RectMake(0, 0, 66,64));
            var gamebackSelected = cc.Sprite.create(s_backbt, cc.RectMake(66, 0,66,64));
            var newback= cc.MenuItemSprite.create(gamebackNormal , gamebackSelected, this, this.backCallback);
            var backcall= cc.Menu.create(newback);    
            this.addChild(backcall, 1);
            backcall.setAnchorPoint(cc.ccp(1, 1));
            backcall.setPosition(cc.ccp(winSize.width-60, winSize.height-40));      
           
            bRet = true;
        }

        return bRet;
    },
    backCallback:function (pSender) {
        var scene = cc.Scene.create();
        scene.addChild(MenuLayer.create());
        cc.Director.sharedDirector().replaceScene(cc.TransitionFade.create(1.2,scene));
    },
    onExit: function() {
        // clean work
        this.removeAllChildrenWithCleanup();
    },
});

AboutLayer.create = function () {
    var sg = new AboutLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};
AboutLayer.scene = function () {
    var scene = cc.Scene.create();
    var layer = AboutLayer.create();
    scene.addChild(layer, 1);
    return scene;
};
