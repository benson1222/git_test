var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var HttpRequestDelegate = (function () {
    function HttpRequestDelegate() {
    }
    HttpRequestDelegate.prototype.onHttpResponse = function (requestName, isSucced, responseData) { };
    return HttpRequestDelegate;
}());
__reflect(HttpRequestDelegate.prototype, "HttpRequestDelegate");
var HttpRequest = (function () {
    function HttpRequest() {
        this._addCache = null;
        this._removeCache = null;
        this._observers = null;
    }
    HttpRequest.prototype.getInstance = function () {
        if (HttpRequest.instance == null) {
            HttpRequest.instance = new HttpRequest();
        }
        return HttpRequest.instance;
    };
    HttpRequest.prototype.destroyInstance = function () {
        HttpRequest.instance = null;
    };
    HttpRequest.prototype.request = function (nameTag, type, url, param) {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        if (type == egret.HttpMethod.POST) {
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.open(url, type);
            request.send(param);
        }
        else {
            request.open(url + param, type);
            request.send();
        }
        request.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onProgress, this);
    };
    HttpRequest.prototype.addObserver = function (delegate) {
        var isHas = false;
        for (var i = 0; i < this._addCache.length; i++) {
            if (delegate == this._addCache[i]) {
                isHas = true;
            }
        }
        if (isHas == false) {
            this._addCache.push(delegate);
        }
        isHas = false;
        for (var i = 0; i < this._removeCache.length; i++) {
            if (delegate == this._removeCache[i]) {
                this._removeCache.splice(i, 1);
            }
        }
    };
    HttpRequest.prototype.removeObserver = function (delegate) {
        var isHas = false;
        for (var i = 0; i < this._removeCache.length; i++) {
            if (delegate == this._removeCache[i]) {
                isHas = true;
            }
        }
        if (isHas == false) {
            this._removeCache.push(delegate);
        }
        isHas = false;
        for (var i = 0; i < this._addCache.length; i++) {
            if (delegate == this._addCache[i]) {
                this._addCache.splice(i);
            }
        }
    };
    HttpRequest.prototype.onComplete = function (event) {
        var request = event.currentTarget;
        console.log("post data : ", request.response);
        request.getResponseHeader;
        // var responseLabel = new egret.TextField();
        // responseLabel.size = 18;
        // responseLabel.text = "POST response:\n" + request.response.substring(0, 50) + "...";
        // this.addChild(responseLabel);
        // responseLabel.x = 300;
        // responseLabel.y = 70;
        // this.statusPostLabel.text = "Get POST response!";
        this.httpResponse("", true, request.response);
    };
    HttpRequest.prototype.onIOError = function (event) {
        console.log("post error : " + event);
        this.httpResponse("", false, "");
    };
    HttpRequest.prototype.onProgress = function (event) {
        console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    HttpRequest.prototype.httpResponse = function (requestName, isSucceed, responseData) {
        for (var i = 0; i < this._addCache.length; i++) {
            for (var k = 0; k < this._observers.length; k++) {
                if (this._addCache[i] == this._observers[k]) {
                    this._observers.push(this._addCache[i]);
                }
            }
        }
        this._addCache.splice(0, this._addCache.length);
        for (var i = 0; i < this._removeCache.length; i++) {
            for (var k = 0; k < this._observers.length; k++) {
                if (this._removeCache[i] == this._observers[k]) {
                    this._observers.splice(k);
                }
            }
        }
        this._removeCache.splice(0, this._removeCache.length);
        for (var i = 0; i < this._observers.length; i++) {
            this._observers[i].onHttpResponse(requestName, isSucceed, responseData);
        }
    };
    return HttpRequest;
}());
HttpRequest.instance = null;
__reflect(HttpRequest.prototype, "HttpRequest");
//# sourceMappingURL=HttpRequest.js.map