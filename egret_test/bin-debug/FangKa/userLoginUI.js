var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var userLoginUI = (function (_super) {
    __extends(userLoginUI, _super);
    function userLoginUI() {
        var _this = _super.call(this) || this;
        _this.exml_path = "resource/image/fk_loginUI/FKUserLoginUI.exml";
        _this.skinName = _this.exml_path;
        return _this;
    }
    userLoginUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    userLoginUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.BtnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        this.BtnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    };
    userLoginUI.prototype.onButtonClick = function (e) {
        if (e.currentTarget == this.BtnClose) {
            this.parent.removeChild(this);
        }
        else if (e.currentTarget == this.BtnLogin) {
            console.log("登录");
        }
    };
    return userLoginUI;
}(eui.Component));
__reflect(userLoginUI.prototype, "userLoginUI", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=userLoginUI.js.map