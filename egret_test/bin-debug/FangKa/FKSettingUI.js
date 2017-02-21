var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FKSettingUI = (function (_super) {
    __extends(FKSettingUI, _super);
    function FKSettingUI() {
        var _this = _super.call(this) || this;
        _this.btnOut = null;
        _this.btnClose = null;
        _this.outCallback = null;
        _this.skinName = "resource/image/fk_settingUI/FKSettingUI.exml";
        return _this;
    }
    FKSettingUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    FKSettingUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.btnOut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
    };
    /**
     * 点击按钮
     * Click the button
     */
    FKSettingUI.prototype.onCloseClick = function (e) {
        this.parent.removeChild(this);
    };
    FKSettingUI.prototype.onButtonClick = function (e) {
        var login = new FKLoginUI();
        Director.getInstance().repleaceScene(login);
        //this.outCallback();
    };
    FKSettingUI.prototype.addOutCallBack = function (callback) {
        this.outCallback = callback;
    };
    return FKSettingUI;
}(eui.Component));
__reflect(FKSettingUI.prototype, "FKSettingUI", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=FKSettingUI.js.map