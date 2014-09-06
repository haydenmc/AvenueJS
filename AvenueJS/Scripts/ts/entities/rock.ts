class Rock extends eg.Collision.Collidable implements eg.IUpdateable {
	public static rockRadius: number = 50;

	public rockSpeed: number = 10;

	public rockGraphic: eg.Graphics.Circle;

	constructor(startPosition: eg.Vector2d) {
		super(new eg.Bounds.BoundingCircle(startPosition, Rock.rockRadius));

		this.rockGraphic = new eg.Graphics.Circle(startPosition.X, startPosition.Y, Rock.rockRadius, EndGate.Graphics.Color.Black);
	}

	public Update(gameTime: eg.GameTime): void {
	}
}