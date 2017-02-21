class BaseCommand {
	private static WebServerUrl: string = "p.6hgame.com";//http请求地址
	private static SigleServerAddress:string = "112.74.73.102";//总入口接口地址
	private static ApiServerUrl:string = "p.6hgame.com";
	private static PlatformAddress: string = "";
	private static PlatformPort: number = -1;
	public static gameSecrectKey(): number{
		return 20160329;
	}
	public static getSigleServerAddress(): string{
		return this.SigleServerAddress;
	}
	public static getSigleServerPort(): number{
		return 13025;
	}
	public static getPlatformServerAddress(): string{
		return this.PlatformAddress;
	}
	public static getPlatformServerPort(): number{
		return this.PlatformPort;
	}
	//http请求地址
	public static getWebServerUrl(): string{
		return this.WebServerUrl;
	}
}