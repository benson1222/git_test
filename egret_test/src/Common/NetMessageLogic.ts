class NetMessageLogic {
	private static instance:NetMessageLogic = null;
	private socket:WebSocketDemo = null;
	public static getInstance(){
		if(this.instance == null){
			this.instance = new NetMessageLogic();
		}
		return this.instance;
	}

	private constructor() {
		
	}

	private initSocket(){
		this.socket = new WebSocketDemo();
	}

	public initNetLogic(){
		this.initSocket();
	}
	public sendData(msg:any){
		let jsonStr = JSON.stringify(msg);
		this.socket.onSendData(jsonStr);
	}
}