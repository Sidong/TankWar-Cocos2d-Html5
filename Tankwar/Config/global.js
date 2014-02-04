/* 
 * @author: SiDong Huang
 * @time: Mon Jul 23 10:15:45 HKT 2012
 * @description: all the global variables supported the game.
 *
 *   @
 *   |
 *   |---- keys
 *   |---- directions
 *   |---- global
 *           |---- zOrder
 *           |---- winSize
 *           |---- warMap
 *           |---- score
 *           |---- playerLife
 *
 *           .
 *           .
 *           .
 *
 *           |---- item
 */

// used to store the keyboard message.
var keys = [];
var obj;

// 4 directions.
var directions = ['up', 'down', 'left', 'right'];

// the global variables used to support the game.
var global = {
    // the zOrders of the objects in the game.
    zOrder: {
        prop: -2,
        playerTank: -1,
        item: -1,
        enemyTank: -1,
        flyTank: 3,
        explosion: 2,
        bullet: 3,
        life_HP_daojulan: 4,
        lifeHP: 5,
        ice_HPreduce: 6,
        gamebegin: 7,
        tip: 10,
    },
    // the win size
    winSize: {
        width: null,
        height: null
    },
    // to store tile's width and height, also with the map's width and height.
    warMap: {
    },
    // the total scenes.
    allScene: 2,
    // tmp variable to store the game status.
    nextLevel: 1,
    opacity: 25,
    freeze: false,

    // tmp variable to store the prop status.
    propType: [],
    propNum: [],
    propTag: [],

    // tmp variable to store the previous level tank status.
    previous: {},

    // global variable to store the game status.
    score: 0,
    playerLife: 3,
    GameLayer: null,
    enemyCount: 0,
    enemyPlaceOrder: 0,
    enemyPlaces: [
        {x: 750, y: 450},
        {x: 750, y: 360},
        {x: 750, y: 270},
        {x: 750, y: 180},
        {x: 750, y: 90},
    ],
    playerPlace: {x: -120, y: 270},
    layer: {
        mudLayer: {},
        stoneLayer: null,
        //waterLayer: null,
        //grassLayer: null,
        //kingLayer: null
    },
    sound:true,
    stoneObjects: [],
    mudObjects: [],
    waterObjects: [],
    enemyTank: [],
    flyTank: [],
    playerTank: [],
    enemyBullet: [],
    rocketBullet: [],
    enemyMissile: [],
    enemyBurst: [],
    enemyBurst2: [],
    playerBullet: [],
    item: [],
};
