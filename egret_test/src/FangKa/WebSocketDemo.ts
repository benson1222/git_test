class WebSocketDemo{
	private webSocket:egret.WebSocket;
	private SocketReadCallback: Function = null;
	private isConnect:boolean = false;
	public constructor() {
		this.webSocket = new egret.WebSocket();        
		this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);                            
		this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);    
		//this.webSocket.connect("echo.websocket.org", 80);
		this.webSocket.connect("127.0.0.1", 1935);
	}
	private onSocketOpen():void {    
		var cmd = "Hello Egret WebSocket";    
		console.log("连接成功");    
		this.isConnect = true;
	}
	private onReceiveMessage(e:egret.Event):void {    
		var msg = this.webSocket.readUTF();    
		console.log("收到数据：" + msg);
		if(this.SocketReadCallback != null){
			this.SocketReadCallback();
		}
	}

	/**
	 * 发送数据
	 */
	public onSendData(msg:string):void {
		this.webSocket.writeUTF(msg);
	}

	public addLoginCallBack(callback: Function){
		this.SocketReadCallback = callback;
	}
}