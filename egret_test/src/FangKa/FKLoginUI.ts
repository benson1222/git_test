class FKLoginUI extends eui.Component implements  eui.UIComponent {
	
	private exml_path: string = "resource/image/fk_loginUI/FKLoginUI.exml";
	private Btn_Login: eui.Button;
	private loginCallback: Function = null;
	public constructor() {
		super();
		this.skinName = this.exml_path;
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
		this.loginCallback();
    }
	private onButtonOutClick(e: egret.TouchEvent) {
        this.Btn_Login.$setScaleX(1);
		this.Btn_Login.$setScaleY(1);
    }

	public addLoginCallBack(callback: Function){
		this.loginCallback = callback;
	}
}