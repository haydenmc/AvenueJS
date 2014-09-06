class BlasterBullet extends eg.Collision.Collidable implements eg.IUpdateable {
	public static characterRadius: number = 20;

	public characterSpeed: number = 1000;

	public characterGraphic: eg.Graphics.Circle;
	public characterMovementController: eg.MovementControllers.LinearMovementController;
	public characterInputController: eg.InputControllers.DirectionalInputController;

	constructor(startPosition: eg.Vector2d, keyboard: eg.Input.KeyboardHandler) {
		super(new eg.Bounds.BoundingCircle(startPosition, Character.characterRadius));

		this.characterGraphic = new eg.Graphics.Circle(startPosition.X, startPosition.Y, Character.characterRadius, EndGate.Graphics.Color.Red);

		this.characterMovementController = new eg.MovementControllers.LinearMovementController([this.characterGraphic], this.characterSpeed, true, true);
		this.characterMovementController.Position = this.characterGraphic.Position;

		this.characterInputController = new eg.InputControllers.DirectionalInputController(keyboard, (direction: string, startMoving: boolean) => {
			this.characterMovementController.Move(direction, startMoving);
		});

	}

	public Update(gameTime: eg.GameTime): void {
		this.characterMovementController.Update(gameTime);
		//this.AnimationHandler.Update(gameTime);
	}
}