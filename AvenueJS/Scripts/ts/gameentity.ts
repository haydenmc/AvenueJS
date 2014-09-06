class GameEntity extends createjs.Shape {
	private world: World;

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
} 