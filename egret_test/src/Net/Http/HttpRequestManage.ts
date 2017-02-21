class HttpRequestManage {
	private httpResponseCall: Function = null;

	public constructor() {
	}

	public request(nameTag:string, type:string, url:string, param:string){
		let request = new egret.HttpRequest();
		request.responseType = egret.HttpResponseType.TEXT;
		if(type == egret.HttpMethod.POST){
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			request.open(url,type);
			request.send(param);
		}else{
			request.open(url+param,type);
			request.send();
		}

		request.addEventListener(egret.Event.COMPLETE,this.onComplete,this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onIOError,this);
        request.addEventListener(egret.ProgressEvent.PROGRESS,this.onProgress,this);
	}

	private onComplete(event:egret.Event) {
        let request = <egret.HttpRequest>event.currentTarget;
        console.log("post data : ",request.response);
		request.getResponseHeader;
		this.httpResponse(true,<string>request.response);
    }
    private onIOError(event:egret.IOErrorEvent):void {
        console.log("post error : " + event);
		this.httpResponse(false, "");
    }
    private onProgress(event:egret.ProgressEvent):void {
        console.log("post progress : " + Math.floor(100*event.bytesLoaded/event.bytesTotal) + "%");
    }

	private httpResponse(isSucceed:boolean, responseData:string){
		if(this.httpResponseCall != null){
			this.httpResponseCall();
		}
	}

	public onHttpResponse(callback: Function){
		this.httpResponseCall = callback;
	}
}