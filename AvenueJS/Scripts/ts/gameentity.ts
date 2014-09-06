class GameEntity extends createjs.Shape {
	private world: World;
	public speed: number = 0;
	public controllerXOffset = 0;
	public controllerYOffest = 0;


	constructor(world) {
		super();
		this.world = world;
		this.graphics = new createjs.Graphics();

		console.log("ENTITY");
	}

	public keydown(e) {
	}

	public keyup(e) {
	}

	public centerOnEntity() {
		this.parent.x = -this.x + this.getStage().canvas.width / 2;
		this.parent.y = -this.y + this.getStage().canvas.height / 2;

		console.log("X GameEntity offset: " + this.controllerXOffset);
	}
} 