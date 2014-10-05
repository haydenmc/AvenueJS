class Main
{
	static instance: Main;
	//private canvas: HTMLCanvasElement;
	public hub: Hub;
	private tinyGunsGame: TinyGunsGame;

	constructor()
	{
		Main.instance = this;
		//this.canvas = document.getElementsByTagName("canvas")[0];
		this.init();
	}

	public init()
	{
		// Initialize the canvas size.
		this.tinyGunsGame = new TinyGunsGame();
		//this.resizeCanvas();
	}
	//public resizeCanvas() {
	//	this.canvas.width = window.innerWidth;
	//	this.canvas.height = window.innerHeight;
	//}
}

window.onload = () =>
{
	(new Main());
}

//window.onresize = () => {
//	Main.instance.resizeCanvas();
//}


