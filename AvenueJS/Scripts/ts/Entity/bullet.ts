class Bullet extends Entity
{
	public static BULLET_SPEED: number = 0;
	public static BULLET_MAX_TRAVEL_DISTANCE: number = 0;
	public static BULLET_DAMAGE: number = 0;

	public distanceTravelled: number = 0;
	public originX: number = 0;
	public originY: number = 0;

	public constructor(x: number, y: number, image: string, game: Phaser.Game)
	{
		super(x, y, image, game);
	}

	public update()
	{

	}

	public reset(x: number, y: number, health?: number): Phaser.Sprite
	{
		this.originX = x;
		this.originY = y;

		return super.reset(x, y, health);
	}
} 