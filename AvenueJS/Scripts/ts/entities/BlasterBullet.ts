class BlasterBullet extends eg.Collision.Collidable implements eg.IUpdateable {
	public static bulletRadius: number = 4;

	public bulletSpeed: number = 1000;

	public bulletGraphic: eg.Graphics.Circle;
	public bulletMovementController: eg.MovementControllers.LinearMovementController;

	constructor(startPosition: eg.Vector2d, keyboard: eg.Input.KeyboardHandler) {
		super(new eg.Bounds.BoundingCircle(startPosition, BlasterBullet.bulletRadius));

		this.bulletGraphic = new eg.Graphics.Circle(startPosition.X, startPosition.Y, BlasterBullet.bulletRadius, EndGate.Graphics.Color.Red);

		this.bulletMovementController = new eg.MovementControllers.LinearMovementController([this.bulletGraphic], this.bulletSpeed, true, true);
		this.bulletMovementController.Position = this.bulletGraphic.Position;

	}

	public Update(gameTime: eg.GameTime): void {
		this.bulletMovementController.Update(gameTime);
		//this.AnimationHandler.Update(gameTime);
	}
}