class Director {
	private runSceneIndex:number = 1;

	private static instance:Director = null;
	private gameLayer:Main = null;
	public static getInstance(){
		if(Director.instance == null){
			Director.instance = new Director();
		}
		return Director.instance;
	}
	public iniWithMain(m:Main){
		if(this.gameLayer == null){
			this.gameLayer = m;
		}
	}
	public repleaceScene(layer:egret.DisplayObject){
		if(this.gameLayer != null && layer != null){
			this.gameLayer.removeChildren();
			this.gameLayer.addChild(layer);
			this.gameLayer.setChildIndex(layer,this.runSceneIndex);
		}
	}

	public runScene():egret.DisplayObject{
		return this.gameLayer.getChildAt(this.runSceneIndex);
	}
}