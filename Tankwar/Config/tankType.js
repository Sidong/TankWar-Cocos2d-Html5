var tankType = {
    enemyTank: {
        // normal enemy tank
        type1: {
            speed: 75,
            hp: 1,
            dir: 'left',
            score: 10,
            bulletType: bulletType.type1,
            texture: s_tank2,
            rectLength: 60,
            itemType: null,
            factory: NormalEnemyTank,
        },
        
        // the strike back tank
        type2: {
            speed: 40,
            hp: 5,
            dir: 'left',
            score: 20,
            bulletType: bulletType.type2,
            texture: s_tank3,
            rectLength: 60,
            itemType: null,
            factory: StrikeBackTank,
        },
        // the invisibility tank
        type3: {
            speed: 500,
            hp: 2,
            dir: 'left',
            score: 15,
            bulletType: bulletType.type2,
            texture: s_tank4,
            rectLength: 60,
            itemType: null,
            factory: InvisibilityTank,
        },
        // the missile tank
        type4: {
            speed: 0,
            hp: 6,
            dir: 'left',
            score: 25,
            bulletType: bulletType.missile,
            texture: s_missileTank,
            rectLength: 60,
            itemType: null,
            factory: MissileTank,
            interval: 8,
        },
        // the boss1 tank
        boss1: {
            speed: 25,
            hp: 10,
            dir: 'left',
            score: 50,
            bulletType: bulletType.type2,
            bulletType2: bulletType.missile,
            texture: s_boss1,
            rectLength: 80,
            itemType: null,
            factory: Scene1Boss,
        },
        // the boss2 tank
        boss2: {
            speed: 175,
            hp: 15,
            dir: 'left',
            score: 50,
            bulletType: bulletType.rocket,
            bulletType2: bulletType.burst,
            texture: s_boss2,
            rectLength: 80,
            itemType: null,
            factory: Scene2Boss,
        },
        // the fly tank with burst
        type5: {
            speed: 200,
            hp: 5,
            dir: 'left',
            score: 15,
            bulletType: bulletType.burst,
            texture: s_tank5,
            rectLength: 60,
            itemType: null,
            factory: FlyTank,
        },
        // the fly tank with burst 2
        type6: {
            speed: 200,
            hp: 5,
            dir: 'left',
            score: 15,
            bulletType: bulletType.burst2,
            texture: s_tank6,
            rectLength: 60,
            itemType: null,
            factory: FlyTank2,
        },
        // the fly tracing tank
        type7: {
            speed: 100,
            hp: 5,
            dir: 'left',
            score: 20,
            bulletType: bulletType.burst,
            texture: s_tank7,
            rectLength: 60,
            itemType: null,
            factory: FlyTraceTank,
        },
        // rocket tank
        type8: {
            speed: 75,
            hp: 8,
            dir: 'left',
            score: 20,
            bulletType: bulletType.rocket,
            texture: s_tank8,
            rectLength: 60,
            itemType: null,
            factory: RocketTank,
        },
    },
    playerTank: {
        type1: {
            speed: 200,
            hp: 6,
            dir: 'right',
            bulletType: bulletType.type1,
            texture: s_tank1,
            rectLength: 60,
            factory: PlayerTank,
        }
    },
};
