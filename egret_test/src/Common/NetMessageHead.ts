class NetMessageHead {
	public bMainID:string;        //处理主类型
    public bAssistantID:string;   //辅助处理类型ID
    public bHandleCode:number;    //数据包处理代码
    public bReserve:number;       //保留字段
    public bObject:any;        //数据内容
	public constructor() {
	}
}