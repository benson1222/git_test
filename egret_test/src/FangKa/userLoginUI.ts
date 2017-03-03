class userLoginUI extends eui.Component implements  eui.UIComponent{
	private exml_path: string = "resource/image/fk_loginUI/FKUserLoginUI.exml";
	private BtnClose:eui.Button;
	private BtnLogin:eui.Button;
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
		this.BtnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
		this.BtnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
	}

	private onButtonClick(e: egret.TouchEvent) {
		if(e.currentTarget == this.BtnClose){
			this.parent.removeChild(this);
		}else if (e.currentTarget == this.BtnLogin){
			console.log("登录");
		}

    }
}
