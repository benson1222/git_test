var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var NetMessageLogic = (function () {
    function NetMessageLogic() {
        this.socket = null;
    }
    NetMessageLogic.getInstance = function () {
        if (this.instance == null) {
            this.instance = new NetMessageLogic();
        }
        return this.instance;
    };
    NetMessageLogic.prototype.initSocket = function () {
        this.socket = new WebSocketDemo();
    };
    NetMessageLogic.prototype.initNetLogic = function () {
        this.initSocket();
    };
    NetMessageLogic.prototype.sendData = function (msg) {
        var jsonStr = JSON.stringify(msg);
        this.socket.onSendData(jsonStr);
    };
    return NetMessageLogic;
}());
NetMessageLogic.instance = null;
__reflect(NetMessageLogic.prototype, "NetMessageLogic");
//# sourceMappingURL=NetMessageLogic.js.map