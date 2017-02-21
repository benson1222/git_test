var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BaseCommand = (function () {
    function BaseCommand() {
        this.WebServerUrl = "p.6hgame.com"; //http请求地址
        this.SigleServerAddress = "112.74.73.102"; //总入口接口地址
        this.ApiServerUrl = "p.6hgame.com";
        this.PlatformAddress = "";
        this.PlatformPort = -1;
    }
    BaseCommand.prototype.gameSecrectKey = function () {
        return 20160329;
    };
    BaseCommand.prototype.getSigleServerAddress = function () {
        return this.SigleServerAddress;
    };
    BaseCommand.prototype.getSigleServerPort = function () {
        return 13025;
    };
    BaseCommand.prototype.getPlatformServerAddress = function () {
        return this.PlatformAddress;
    };
    BaseCommand.prototype.getPlatformServerPort = function () {
        return this.PlatformPort;
    };
    //http请求地址
    BaseCommand.prototype.getWebServerUrl = function () {
        return this.WebServerUrl;
    };
    return BaseCommand;
}());
__reflect(BaseCommand.prototype, "BaseCommand");
//# sourceMappingURL=BaseCommand.js.map