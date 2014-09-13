class Main {
	static instance: Main;
	//private canvas: HTMLCanvasElement;
	public hub: Hub;
	private game: Phaser.Game;

	constructor() {
		Main.instance = this;
		//this.canvas = document.getElementsByTagName("canvas")[0];
		this.init();
	}

	public init() {
		// Initialize the canvas size.
		this.game = new Phaser.Game(1024, 768, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
		//this.resizeCanvas();
	}
	
	public preload(): void {
		this.game.load.image('logo', '/Content/images/vs.png');
	}

	public create(): void {
		var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
		logo.anchor.setTo(0.5, 0.5);
	}

	//public resizeCanvas() {
	//	this.canvas.width = window.innerWidth;
	//	this.canvas.height = window.innerHeight;
	//}
}

window.onload = () => {
	(new Main());
}

//window.onresize = () => {
//	Main.instance.resizeCanvas();
//}


