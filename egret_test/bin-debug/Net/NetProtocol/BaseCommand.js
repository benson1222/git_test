var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BaseCommand = (function () {
    function BaseCommand() {
    }
    BaseCommand.gameSecrectKey = function () {
        return 20160329;
    };
    BaseCommand.getSigleServerAddress = function () {
        return this.SigleServerAddress;
    };
    BaseCommand.getSigleServerPort = function () {
        return 13025;
    };
    BaseCommand.getPlatformServerAddress = function () {
        return this.PlatformAddress;
    };
    BaseCommand.getPlatformServerPort = function () {
        return this.PlatformPort;
    };
    //http请求地址
    BaseCommand.getWebServerUrl = function () {
        return this.WebServerUrl;
    };
    return BaseCommand;
}());
BaseCommand.WebServerUrl = "p.6hgame.com"; //http请求地址
BaseCommand.SigleServerAddress = "112.74.73.102"; //总入口接口地址
BaseCommand.ApiServerUrl = "p.6hgame.com";
BaseCommand.PlatformAddress = "";
BaseCommand.PlatformPort = -1;
__reflect(BaseCommand.prototype, "BaseCommand");
//# sourceMappingURL=BaseCommand.js.map