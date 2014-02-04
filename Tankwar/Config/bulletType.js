var bulletType = {
    // normal bullet
    type1: {
        speed: 300,
        power: 1,
        texture: s_normal_bullet,
        effect: null,
        isExploded: true,
    },
    // normal bullet with higher speed
    type2: {
        speed: 800,
        power: 1,
        texture: s_normal_bullet,
        effect: null,
        isExploded: true,
    },
    rocket: {
        speed: 0,
        power: 2,
        texture: s_daodan02,
        rectLength:40,
        effect: null,
        isExploded: true,
        accelSpeed: 300,
    },
    // missile bullet
    missile: {
        speed: 100,
        power: 1,
        texture: s_daodan,
        rectLength: 27,
        effect: null,
        isExploded: true,
    },
    // burst bullet
    burst: {
        power: 2,
        isExploded: true,
        effect: null,
        texture: s_bomb,
    },
    // burst bullet 2
    burst2: {
        power: 2,
        isExploded: true,
        effect: null,
        texture: s_timebomb,
    },
};  