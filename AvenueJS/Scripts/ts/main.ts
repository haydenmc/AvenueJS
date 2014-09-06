class Main {
	static instance: Main;
	private canvas: HTMLCanvasElement;
	private stage: createjs.Stage;
	private container: createjs.Container;

	constructor() {
		Main.instance = this;
		this.canvas = document.getElementsByTagName("canvas")[0];
	}

	public init() {
		this.resizeCanvas();
		this.stage = new createjs.Stage(this.canvas); // Create a 'stage' on this canvas.
		this.stage.autoClear = true; // Automatically clear redraws.
		this.stage.enableMouseOver(20); // Enable mouseover events
		this.container = new createjs.Container(); // Create a global container
		this.stage.addChild(this.container); // Add global container to stage.
		createjs.Ticker.setFPS(60);
		createjs.Ticker.addEventListener("tick", this.tick);
	}

	public resizeCanvas() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
	}

	private tick(event: Event) {

	}
}

window.onload = () => {
	(new Main()).init();
}

window.onresize = () => {
	Main.instance.resizeCanvas();
}
