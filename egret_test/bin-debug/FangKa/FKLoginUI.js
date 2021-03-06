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
        _this.loginCallback = null;
        _this.skinName = _this.exml_path;
        return _this;
        //this.testWeixinapi();
    }
    FKLoginUI.prototype.testScroll = function () {
        var scroll = new ScrollerDemo();
        this.addChild(scroll);
    };
    FKLoginUI.prototype.testWeixinapi = function () {
        var bodyConfig = new BodyConfig();
        bodyConfig.appId = "wx3a91423d85d71666"; //"此处填写公共平台appID，未认证的ID将不能使用自定义分享等接口，请联系微信官方获取";
        bodyConfig.debug = true;
        /// ... 其他的配置属性赋值
        /// 通过config接口注入权限验证配置
        if (wx) {
            wx.config(bodyConfig);
            wx.ready(function () {
                /// 在这里调用微信相关功能的 API
            });
        }
    };
    FKLoginUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    FKLoginUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.Btn_Login.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonBeginClick, this);
        this.Btn_Login.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonEndClick, this);
        this.Btn_Login.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onButtonOutClick, this);
        this.Btn_send.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    };
    FKLoginUI.prototype.onButtonClick = function (e) {
    };
    /**
     * 点击按钮
     * Click the button
     */
    FKLoginUI.prototype.onButtonBeginClick = function (e) {
        this.Btn_Login.$setScaleX(0.85);
        this.Btn_Login.$setScaleY(0.85);
    };
    FKLoginUI.prototype.onButtonEndClick = function (e) {
        this.Btn_Login.$setScaleX(1);
        this.Btn_Login.$setScaleY(1);
        var _loginData = new NetLoginData();
        _loginData.name = "test123";
        _loginData.password = "123456";
        var netHead = new NetMessageHead();
        netHead.bMainID = "100";
        netHead.bAssistantID = "1";
        //netHead.bObject = _loginData;
        var jsonStr = JSON.stringify(netHead);
        console.log("json=" + jsonStr);
        NetMessageLogic.getInstance().sendData(jsonStr);
        // let userLogin:FKUserLoginUI = new FKUserLoginUI();
        // this.addChild(userLogin);
        //this.testScroll();
        //let socket:WebSocketDemo = new WebSocketDemo();
        // let socket:SocketManage = new SocketManage();
        // socket.connectAddress(BaseCommand.getSigleServerAddress(),BaseCommand.getSigleServerPort());
        // let platform = new FKPlatform();
        // Director.getInstance().repleaceScene(platform);
        //		this.loginCallback();
    };
    FKLoginUI.prototype.onButtonOutClick = function (e) {
        this.Btn_Login.$setScaleX(1);
        this.Btn_Login.$setScaleY(1);
    };
    FKLoginUI.prototype.addLoginCallBack = function (callback) {
        this.loginCallback = callback;
    };
    return FKLoginUI;
}(eui.Component));
__reflect(FKLoginUI.prototype, "FKLoginUI", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=FKLoginUI.js.map