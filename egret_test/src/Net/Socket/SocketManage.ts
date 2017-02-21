class SocketManage {
	private isConnect:boolean = false;
	private webSocket:egret.WebSocket = null;
	public constructor() {
		this.webSocket = new egret.WebSocket();
		this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);                            
    	this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);    
	}

	private onSocketOpen():void {    
		var cmd = "Hello Egret WebSocket";    
		console.log("连接成功，发送数据：" + cmd);    
		this.isConnect = true;
		this.webSocket.writeUTF(cmd);
	}
	private onReceiveMessage(e:egret.Event):void {    
		var msg = this.webSocket.readUTF();    
		console.log("收到数据：" + msg);
	}

	public connectAddress(address:string, port:number):void{
   	 	this.webSocket.connect(address, port);
	}

	public send(data:string):void{
		if(this.isConnect == true){
			this.webSocket.writeUTF(data);
		}else{
			console.log("未连接服务器"); 
		}
	}
}