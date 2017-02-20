var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FKPlatform = (function (_super) {
    __extends(FKPlatform, _super);
    function FKPlatform() {
        var _this = _super.call(this) || this;
        _this.btnSet = null;
        _this.skinName = "resource/image/fk_platformUI/FKPlatform.exml";
        return _this;
    }
    FKPlatform.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    FKPlatform.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.btnSet.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    };
    /**
     * 点击按钮
     * Click the button
     */
    FKPlatform.prototype.onButtonClick = function (e) {
        var setting = new FKSettingUI();
        setting.addOutCallBack(this.outCallBack);
        this.addChild(setting);
    };
    FKPlatform.prototype.outCallBack = function () {
    };
    return FKPlatform;
}(eui.Component));
__reflect(FKPlatform.prototype, "FKPlatform", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=FKPlatform.js.map