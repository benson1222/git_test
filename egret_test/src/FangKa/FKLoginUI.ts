class FKLoginUI extends eui.Component implements  eui.UIComponent {
	
	private exml_path: string = "resource/image/fk_loginUI/FKLoginUI.exml";
	private Btn_Login: eui.Button;
	private Btn_send:eui.Button;
	private loginCallback: Function = null;
	public constructor() {
		super();
		this.skinName = this.exml_path;
		//this.testWeixinapi();
	}

	private testScroll(){
		let scroll:ScrollerDemo = new ScrollerDemo();
		this.addChild(scroll);
	}
	private testWeixinapi(){
		var bodyConfig: BodyConfig = new BodyConfig();
		bodyConfig.appId = "wx3a91423d85d71666";//"此处填写公共平台appID，未认证的ID将不能使用自定义分享等接口，请联系微信官方获取";
		bodyConfig.debug = true;
		/// ... 其他的配置属性赋值
		/// 通过config接口注入权限验证配置
		if(wx) {
			wx.config(bodyConfig);
			wx.ready(function() {
			/// 在这里调用微信相关功能的 API
			});
		}
	}
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();

		this.Btn_Login.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonBeginClick, this);
		this.Btn_Login.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonEndClick, this);
		this.Btn_Login.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onButtonOutClick, this);

		this.Btn_send.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);

	}
	
	private onButtonClick(e: egret.TouchEvent) {

	}
	/**
     * 点击按钮
     * Click the button
     */
    private onButtonBeginClick(e: egret.TouchEvent) {
        this.Btn_Login.$setScaleX(0.85);
		this.Btn_Login.$setScaleY(0.85);
    }
	private onButtonEndClick(e: egret.TouchEvent) {
        this.Btn_Login.$setScaleX(1);
		this.Btn_Login.$setScaleY(1);

		let _loginData = new NetLoginData();
		_loginData.name = "test123";
		_loginData.password = "123456";

		let netHead = new NetMessageHead();
		netHead.bMainID = "100";
		netHead.bAssistantID = "1";
		//netHead.bObject = _loginData;
		let jsonStr = JSON.stringify(netHead);
		console.log("json="+jsonStr);
		NetMessageLogic.getInstance().sendData(jsonStr);
		// let userLogin:FKUserLoginUI = new FKUserLoginUI();
		// this.addChild(userLogin);
		//this.testScroll();

		//let socket:WebSocketDemo = new WebSocketDemo();
		
		// let socket:SocketManage = new SocketManage();
		// socket.connectAddress(BaseCommand.getSigleServerAddress(),BaseCommand.getSigleServerPort());
		// let platform = new FKPlatform();
		// Director.getInstance().repleaceScene(platform);

//		this.loginCallback();
    }
	private onButtonOutClick(e: egret.TouchEvent) {
        this.Btn_Login.$setScaleX(1);
		this.Btn_Login.$setScaleY(1);
    }

	public addLoginCallBack(callback: Function){
		this.loginCallback = callback;
	}
}