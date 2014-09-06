class Game extends eg.Game {
	private character: Character;

	private rock1: Rock;
	private rock2: Rock;
	private rock3: Rock;
	private rock4: Rock;


	constructor(canvas: HTMLCanvasElement) {
		super(canvas);
		this.character = new Character(new eg.Vector2d(canvas.width / 2, canvas.height / 2), this.Input.Keyboard, this.Input);
		this.character.characterGraphic.ZIndex = 100;

		this.rock1 = new Rock(new eg.Vector2d(canvas.width / 2 + 200, canvas.height / 2 + 200));
		this.rock2 = new Rock(new eg.Vector2d(canvas.width / 2 + 200, canvas.height / 2 - 200));
		this.rock3 = new Rock(new eg.Vector2d(canvas.width / 2 - 200, canvas.height / 2 + 200));
		this.rock4 = new Rock(new eg.Vector2d(canvas.width / 2 - 200, canvas.height / 2 - 200));

		this.Scene.Add(this.character.characterGraphic);
		this.Scene.Add(this.rock1.rockGraphic);
		this.Scene.Add(this.rock2.rockGraphic);
		this.Scene.Add(this.rock3.rockGraphic);
		this.Scene.Add(this.rock4.rockGraphic);
	}

	public Update(gameTime: eg.GameTime): void {
		this.character.Update(gameTime);
		this.Scene.Camera.Position = this.character.characterMovementController.Position;
	}
} 