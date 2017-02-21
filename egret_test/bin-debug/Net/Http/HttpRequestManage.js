var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var HttpRequestManage = (function () {
    function HttpRequestManage() {
        this.httpResponseCall = null;
    }
    HttpRequestManage.prototype.request = function (nameTag, type, url, param) {
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
    HttpRequestManage.prototype.onComplete = function (event) {
        var request = event.currentTarget;
        console.log("post data : ", request.response);
        request.getResponseHeader;
        this.httpResponse(true, request.response);
    };
    HttpRequestManage.prototype.onIOError = function (event) {
        console.log("post error : " + event);
        this.httpResponse(false, "");
    };
    HttpRequestManage.prototype.onProgress = function (event) {
        console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    HttpRequestManage.prototype.httpResponse = function (isSucceed, responseData) {
        if (this.httpResponseCall != null) {
            this.httpResponseCall();
        }
    };
    HttpRequestManage.prototype.onHttpResponse = function (callback) {
        this.httpResponseCall = callback;
    };
    return HttpRequestManage;
}());
__reflect(HttpRequestManage.prototype, "HttpRequestManage");
//# sourceMappingURL=HttpRequestManage.js.map