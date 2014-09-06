class Main {
	static instance: Main;
	private canvas: HTMLCanvasElement;
	private game: Game;
	public hub: Hub;

	constructor() {
		Main.instance = this;
		this.canvas = document.getElementsByTagName("canvas")[0];
		this.init();
	}

	public init() {
		// Initialize the canvas size.
		this.resizeCanvas();
		this.game = new Game(this.canvas);
		// Instantiate the SignalR Hub.
		this.hub = new Hub();
		this.hub.connect();
	}

	public resizeCanvas() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
	}
}

window.onload = () => {
	(new Main()).init();
}

window.onresize = () => {
	Main.instance.resizeCanvas();
}


