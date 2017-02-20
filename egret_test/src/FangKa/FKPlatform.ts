class FKPlatform extends eui.Component implements  eui.UIComponent {
		private btnSet: eui.Button = null;

	public constructor() {
		super();

		this.skinName = "resource/image/fk_platformUI/FKPlatform.exml";
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();

		this.btnSet.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);

	}
	
	/**
     * 点击按钮
     * Click the button
     */
    private onButtonClick(e: egret.TouchEvent) {
        let setting = new FKSettingUI();
		 setting.addOutCallBack(this.outCallBack);
        this.addChild(setting);
    }

	private outCallBack(){
		
	}
}