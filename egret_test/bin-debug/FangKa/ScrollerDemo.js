var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ScrollerDemo = (function (_super) {
    __extends(ScrollerDemo, _super);
    function ScrollerDemo() {
        var _this = _super.call(this) || this;
        _this.myImg = new eui.Image("resource/image/test/bg.png");
        _this.myImg.x = 400;
        _this.addChild(_this.myImg);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addMe, _this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, _this.onResourceLoadComplete, _this);
        return _this;
    }
    ScrollerDemo.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        var imgTest = new eui.Image("resource/image/test/bg.png");
        imgTest.x = 800;
        this.addChild(imgTest);
        //创建一个容器，里面包含一张图片
        var group = new eui.Group();
        var Img = new eui.Image("resource/image/test/bg.png");
        group.addChild(Img);
        //创建一个Scroller
        var myScroller = new eui.Scroller();
        //注意位置和尺寸的设置是在Scroller上面，而不是容器上面
        myScroller.width = 300;
        myScroller.height = 300;
        //设置viewport
        myScroller.viewport = group;
        this.addChild(myScroller);
        myScroller.verticalScrollBar.autoVisibility = false;
        myScroller.verticalScrollBar.visible = false;
    };
    ScrollerDemo.prototype.onResourceLoadComplete = function (event) {
        console.log(this.myImg.width + "");
    };
    ScrollerDemo.prototype.addMe = function () {
        console.log(this.myImg.width + "");
    };
    return ScrollerDemo;
}(eui.Group));
__reflect(ScrollerDemo.prototype, "ScrollerDemo");
//# sourceMappingURL=ScrollerDemo.js.map