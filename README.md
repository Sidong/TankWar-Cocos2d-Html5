# Tankwar

坦克大战是基于 `Cocos2d-HTML5` 开发的HTMl5游戏。  

[![](http://sidong.github.io/blog/assets/images/tankwar/tankwar-1.png)](#)
[![](http://sidong.github.io/blog/assets/images/tankwar/tankwar-2.png)](#)
[![](http://sidong.github.io/blog/assets/images/tankwar/tankwar-3.png)](#)
[![](http://sidong.github.io/blog/assets/images/tankwar/tankwar-4.png)](#)

## Demo   
[Demo](http://sidong.github.io/TankWar-Cocos2d-Html5)(加载非常慢)  

## 部署   
进入游戏根目录，搭建本地端口   
```
python -m SimpleHTTPServer 8000
```

在chrome中打开本地8000端口
```
http://0.0.0.0:8000/
```

## 目录树   
```
.
├── Cocos2d-html5-canvasmenu-min.js // cocos2d-html5菜单组件
├── README.md
├── Resource.js // 资源预加载
├── Resources // 资源文件夹
│   ├── 图片 资源
│   ├── Tmx 地图资源
│   ├── music 资源
├── Tankwar // 主目录
│   ├── AppDelegate.js // 库文件
│   ├── Config // 配置
│   │   ├── bulletType.js // 子弹类型配置
│   │   ├── global.js // 全局变量
│   │   ├── level.js // 关卡配置
│   │   ├── map.js // 关卡地图配置
│   │   ├── tankType.js // 坦克类型配置
│   │   └── util.js // 工具
│   ├── Effect // 特效文件
│   │   ├── effect.js // 普通效果
│   │   └── explosion.js // 爆炸效果
│   ├── Layer // 游戏层
│   │   ├── AboutLayer.js // 游戏About层
│   │   ├── GameLayer.js // 游戏层
│   │   ├── LevelLayer.js // 关卡层
│   │   ├── LevelSelectLayer.js // 关卡选择层
│   │   ├── MenuLayer.js // 菜单层
│   │   └── WinOrLoseLayer.js // 胜负层
│   └── Object // 物体
│       ├── bullet.js // 子弹类
│       ├── item.js // 神符类
│       ├── prop.js // 道具类
│       └── tank.js // 坦克类
├── cocos2d.js // 库文件
└── index.html // 首页
```

## Todo   
* 压缩图片资源，整合在一起，减少http请求   
* 改善游戏碰撞检测和边界检测，修复bug   
* 游戏主要逻辑添加注释，以便阅读   
* 将物体类重构，以便更好拓展   
