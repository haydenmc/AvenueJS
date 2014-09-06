﻿class Main {
	static instance: Main;
	private canvas: HTMLCanvasElement;
	private stage: createjs.Stage;
	private container: createjs.Container;

	constructor() {
		Main.instance = this;
		this.canvas = document.getElementsByTagName("canvas")[0];
	}

	public init() {
		// Initialize the canvas size.
		this.resizeCanvas();

		// Create and initialize the stage.
		this.stage = new createjs.Stage(this.canvas); // Create a 'stage' on this canvas.
		this.stage.autoClear = true; // Automatically clear redraws.
		this.stage.enableMouseOver(20); // Enable mouseover events
		this.container = new createjs.Container(); // Create a global container
		this.stage.addChild(this.container); // Add global container to stage.

		// Set up the ticker
		createjs.Ticker.setFPS(60);
		createjs.Ticker.addEventListener("tick", this.tick);

		// Bind window key events
		window.onkeydown = this.keydown;
		window.onkeyup = this.keyup;
	}

	public resizeCanvas() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
	}

	private tick(event: Event) {

	}

	public keydown(e) {
		console.log("Key Down: " + e.keyCode);

	}

	public keyup(e) {
		console.log("Key Up: " + e.keyCode);

	}
}

window.onload = () => {
	(new Main()).init();
}

window.onresize = () => {
	Main.instance.resizeCanvas();
}


