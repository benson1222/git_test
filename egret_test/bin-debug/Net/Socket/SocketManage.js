var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SocketManage = (function () {
    function SocketManage() {
        this.isConnect = false;
        this.webSocket = null;
        this.webSocket = new egret.WebSocket();
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
    }
    SocketManage.prototype.onSocketOpen = function () {
        var cmd = "Hello Egret WebSocket";
        console.log("连接成功，发送数据：" + cmd);
        this.isConnect = true;
        this.webSocket.writeUTF(cmd);
    };
    SocketManage.prototype.onReceiveMessage = function (e) {
        var msg = this.webSocket.readUTF();
        console.log("收到数据：" + msg);
    };
    SocketManage.prototype.connectAddress = function (address, port) {
        this.webSocket.connect(address, port);
    };
    SocketManage.prototype.send = function (data) {
        if (this.isConnect == true) {
            this.webSocket.writeUTF(data);
        }
        else {
            console.log("未连接服务器");
        }
    };
    return SocketManage;
}());
__reflect(SocketManage.prototype, "SocketManage");
//# sourceMappingURL=SocketManage.js.map