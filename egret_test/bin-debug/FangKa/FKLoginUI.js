var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FKLoginUI = (function (_super) {
    __extends(FKLoginUI, _super);
    function FKLoginUI() {
        var _this = _super.call(this) || this;
        _this.exml_path = "resource/image/fk_loginUI/FKLoginUI.exml";
        _this.skinName = "resource/image/fk_loginUI/FKLoginUI.exml";
        return _this;
    }
    FKLoginUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    FKLoginUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.Btn_Login.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonBeginClick, this);
        this.Btn_Login.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonEndClick, this);
        this.Btn_Login.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onButtonOutClick, this);
    };
    /**
     * 点击按钮
     * Click the button
     */
    FKLoginUI.prototype.onButtonBeginClick = function (e) {
        this.Btn_Login.$setScaleX(0.7);
        this.Btn_Login.$setScaleY(0.7);
    };
    FKLoginUI.prototype.onButtonEndClick = function (e) {
        this.Btn_Login.$setScaleX(1);
        this.Btn_Login.$setScaleY(1);
    };
    FKLoginUI.prototype.onButtonOutClick = function (e) {
        this.Btn_Login.$setScaleX(1);
        this.Btn_Login.$setScaleY(1);
    };
    return FKLoginUI;
}(eui.Component));
__reflect(FKLoginUI.prototype, "FKLoginUI", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=FKLoginUI.js.map