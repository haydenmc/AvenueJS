class Main {
	static instance: Main;
	private canvas: HTMLCanvasElement;

	private world: World;

	constructor() {
		Main.instance = this;
		this.canvas = document.getElementsByTagName("canvas")[0];
		this.init();
	}

	public init() {
		// Initialize the canvas size.
		this.resizeCanvas();
		this.world = new World(this.canvas);

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


