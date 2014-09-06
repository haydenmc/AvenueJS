﻿
class World { 

	private worldObjects: Array<GameEntity>;
	private stage: createjs.Stage;
	private container: createjs.Container;
	private playerCharacter: Character;
	private controllerEntity: GameEntity;

	constructor(canvas) {

		this.worldObjects = new Array();

		this.stage = new createjs.Stage(canvas); // Create a 'stage' on this canvas.
		this.stage.autoClear = true; // Automatically clear redraws.
		this.stage.enableMouseOver(20); // Enable mouseover events
		this.container = new createjs.Container(); // Create a global container
		this.stage.addChild(this.container); // Add global container to stage.

		this.initWorld();

		createjs.Ticker.setFPS(60);
		var tick_bind = this.tick.bind(this);
		createjs.Ticker.addEventListener("tick", tick_bind);

		window.onkeydown = (e) => { this.keydown(e); };
		window.onkeyup = (e) => { this.keyup(e); };

		console.log("WORLD");


	}

	public initWorld() {
		this.initPlayer();
		this.initTerrain();

	}

	private initPlayer() {
		this.playerCharacter = new Player(this);
		this.controllerEntity = this.playerCharacter;
		this.addChild(this.playerCharacter);
	}

	private initTerrain() {
		this.addChild(new Rock(500, 500, this));
		this.addChild(new Rock(500, -500, this));
		this.addChild(new Rock(-500, 500, this));
		this.addChild(new Rock(-500, -500, this));
	}

	private addChild(child) {
		this.container.addChild(child);
		this.worldObjects.push(child);
	}

	private tick(event: Event) {
		this.container.x = -this.controllerEntity.x + this.stage.canvas.width / 2;
		this.container.y = -this.controllerEntity.y + this.stage.canvas.height / 2;
		this.stage.update();
	}

	public keydown(e) {

		this.controllerEntity.keydown(e);
		console.log("Key Down: " + e.keyCode);

	}

	public keyup(e) {
		this.controllerEntity.keyup(e);
		console.log("Key Up: " + e.keyCode);

	}
}