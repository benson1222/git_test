var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Director = (function () {
    function Director() {
        this.runSceneIndex = 1;
        this.gameLayer = null;
    }
    Director.getInstance = function () {
        if (Director.instance == null) {
            Director.instance = new Director();
        }
        return Director.instance;
    };
    Director.prototype.iniWithMain = function (m) {
        if (this.gameLayer == null) {
            this.gameLayer = m;
        }
    };
    Director.prototype.repleaceScene = function (layer) {
        if (this.gameLayer != null && layer != null) {
            this.gameLayer.removeChildren();
            this.gameLayer.addChild(layer);
            this.gameLayer.setChildIndex(layer, this.runSceneIndex);
        }
    };
    Director.prototype.runScene = function () {
        return this.gameLayer.getChildAt(this.runSceneIndex);
    };
    return Director;
}());
Director.instance = null;
__reflect(Director.prototype, "Director");
//# sourceMappingURL=Director.js.map