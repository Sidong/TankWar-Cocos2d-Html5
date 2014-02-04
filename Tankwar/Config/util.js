var collide = function(a, b) {
    if ("collideRect" in a) {
        var aRect = a.collideRect();
    } else {
        var aRect = a;
    }
    if ("collideRect" in b) {
        var bRect = b.collideRect();
    } else {
        var bRect = b;
    }
    if (cc.Rect.CCRectIntersectsRect(aRect, bRect)) {
        return true;
    } else {
        return false;
    }
};

Object.prototype.Clone = function()
{
    var objClone;
    if (this.constructor == Object) {
        objClone = new this.constructor();
    } else {
        objClone = new this.constructor(this.valueOf());
    }
    for (var key in this) {
        if (objClone[key] != this[key]) { 
            if (typeof(this[key]) == 'object') { 
                objClone[key] = this[key].Clone();
            } else {
                objClone[key] = this[key];
            }
        }
    }
    objClone.toString = this.toString;
    objClone.valueOf = this.valueOf;
    return objClone; 
};
