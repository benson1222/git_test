class ScrollerDemo extends eui.Group{
	private myImg:eui.Image;
	public constructor() {
		super()
		this.myImg = new eui.Image("resource/image/test/bg.png");
		this.myImg.x = 400;
		this.addChild(this.myImg);
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addMe,this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);

	}
	protected createChildren() {
        super.createChildren();
		
		let imgTest = new eui.Image("resource/image/test/bg.png");
		imgTest.x = 800;
		this.addChild(imgTest);

        //创建一个容器，里面包含一张图片
        var group = new eui.Group();
        let Img = new eui.Image("resource/image/test/bg.png");
        group.addChild(Img);

        //创建一个Scroller
        var myScroller = new eui.Scroller();
        //注意位置和尺寸的设置是在Scroller上面，而不是容器上面
        myScroller.width = 300;
        myScroller.height = 300;
        //设置viewport
        myScroller.viewport = group;
        this.addChild(myScroller);
		myScroller.verticalScrollBar.autoVisibility = false;
		myScroller.verticalScrollBar.visible =false;

    }
	private onResourceLoadComplete(event:RES.ResourceEvent):void {
		console.log(this.myImg.width+"");
	}
	private addMe(){
		console.log(this.myImg.width+"");
	}
}