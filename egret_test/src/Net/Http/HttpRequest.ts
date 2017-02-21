abstract class HttpRequestDelegate {
	public onHttpResponse(requestName:string, isSucced:boolean, responseData:string){}
}

class HttpRequest {
	private _addCache:Array<HttpRequestDelegate> = null;
	private _removeCache:Array<HttpRequestDelegate> = null;
	private _observers:Array<HttpRequestDelegate> = null;
	private static instance:HttpRequest = null;
	public getInstance():HttpRequest{
		if(HttpRequest.instance == null){
			HttpRequest.instance = new HttpRequest();
		}
		return HttpRequest.instance;
	}
	public destroyInstance(){
		HttpRequest.instance = null;
	}
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

	public addObserver(delegate: HttpRequestDelegate){
		let isHas = false;
		for(let i = 0; i < this._addCache.length; i ++){
			if(delegate == this._addCache[i]){
				isHas = true;
			}
		}
		if(isHas == false){
			this._addCache.push(delegate);
		}
		isHas = false;
		for(let i = 0; i < this._removeCache.length; i ++){
			if(delegate == this._removeCache[i]){
				this._removeCache.splice(i,1);
			}
		}
	}
	public removeObserver(delegate: HttpRequestDelegate){
		let isHas = false;
		for(let i = 0; i < this._removeCache.length; i ++){
			if(delegate == this._removeCache[i]){
				isHas = true;
			}
		}
		if(isHas == false){
			this._removeCache.push(delegate);
		}
		isHas = false;
		for(let i = 0; i < this._addCache.length; i ++){
			if(delegate == this._addCache[i]){
				this._addCache.splice(i);
			}
		}
	}
	private onComplete(event:egret.Event) {
        let request = <egret.HttpRequest>event.currentTarget;
        console.log("post data : ",request.response);
		request.getResponseHeader;
        // var responseLabel = new egret.TextField();
        // responseLabel.size = 18;
        // responseLabel.text = "POST response:\n" + request.response.substring(0, 50) + "...";
        // this.addChild(responseLabel);
        // responseLabel.x = 300;
        // responseLabel.y = 70;
        // this.statusPostLabel.text = "Get POST response!";
		this.httpResponse("",true,<string>request.response);
    }
    private onIOError(event:egret.IOErrorEvent):void {
        console.log("post error : " + event);
		this.httpResponse("",false, "");
    }
    private onProgress(event:egret.ProgressEvent):void {
        console.log("post progress : " + Math.floor(100*event.bytesLoaded/event.bytesTotal) + "%");
    }
	private httpResponse(requestName:string, isSucceed:boolean, responseData:string){
		for(let i = 0; i < this._addCache.length; i ++){
			for(let k = 0; k < this._observers.length; k ++){
				if(this._addCache[i] == this._observers[k]){
					this._observers.push(this._addCache[i]);
				}
			}
		}
		this._addCache.splice(0,this._addCache.length);

		for(let i = 0; i < this._removeCache.length; i ++){
			for(let k = 0; k < this._observers.length; k ++){
				if(this._removeCache[i] == this._observers[k]){
					this._observers.splice(k);
				}
			}
		}
		this._removeCache.splice(0,this._removeCache.length);

		for(let i = 0; i < this._observers.length; i ++){
			this._observers[i].onHttpResponse(requestName,isSucceed,responseData);
		}
	}
}