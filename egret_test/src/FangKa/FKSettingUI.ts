class FKSettingUI extends eui.Component implements  eui.UIComponent {
	private btnOut: eui.Button = null;
	private btnClose: eui.Button = null;
	private outCallback: Function = null;

	public constructor() {
		super();

		this.skinName = "resource/image/fk_settingUI/FKSettingUI.exml";
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.btnOut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
		this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);

	}
	
	/**
     * 点击按钮
     * Click the button
     */
	private onCloseClick(e: egret.TouchEvent) {
		this.parent.removeChild(this);
    }
    private onButtonClick(e: egret.TouchEvent) {
		this.outCallback();
    }
	public addOutCallBack(callback: Function){
		this.outCallback = callback;
	}
}