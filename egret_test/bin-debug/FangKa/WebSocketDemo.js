var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var WebSocketDemo = (function () {
    function WebSocketDemo() {
        this.SocketReadCallback = null;
        this.isConnect = false;
        this.webSocket = new egret.WebSocket();
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        //this.webSocket.connect("echo.websocket.org", 80);
        this.webSocket.connect("127.0.0.1", 1935);
    }
    WebSocketDemo.prototype.onSocketOpen = function () {
        var cmd = "Hello Egret WebSocket";
        console.log("连接成功");
        this.isConnect = true;
    };
    WebSocketDemo.prototype.onReceiveMessage = function (e) {
        var msg = this.webSocket.readUTF();
        console.log("收到数据：" + msg);
        if (this.SocketReadCallback != null) {
            this.SocketReadCallback();
        }
    };
    /**
     * 发送数据
     */
    WebSocketDemo.prototype.onSendData = function (msg) {
        this.webSocket.writeUTF(msg);
    };
    WebSocketDemo.prototype.addLoginCallBack = function (callback) {
        this.SocketReadCallback = callback;
    };
    return WebSocketDemo;
}());
__reflect(WebSocketDemo.prototype, "WebSocketDemo");
//# sourceMappingURL=WebSocketDemo.js.map