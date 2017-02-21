class BaseCommand {
	private WebServerUrl: string = "p.6hgame.com";//http请求地址
	private SigleServerAddress:string = "112.74.73.102";//总入口接口地址
	private ApiServerUrl:string = "p.6hgame.com";
	private PlatformAddress: string = "";
	private PlatformPort: number = -1;
	public gameSecrectKey(): number{
		return 20160329;
	}
	public getSigleServerAddress(): string{
		return this.SigleServerAddress;
	}
	public getSigleServerPort(): number{
		return 13025;
	}
	public getPlatformServerAddress(): string{
		return this.PlatformAddress;
	}
	public getPlatformServerPort(): number{
		return this.PlatformPort;
	}
	//http请求地址
	public getWebServerUrl(): string{
		return this.WebServerUrl;
	}
}