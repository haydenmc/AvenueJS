class Bullet_Pistol extends Bullet
{
	public static BULLET_SPEED: number = 750;
	public static BULLET_MAX_TRAVEL_DISTANCE: number = 1000;
	public static BULLET_DAMAGE: number = 10;

	public distanceTravelled: number = 0;

	public constructor(x: number, y: number, game: Phaser.Game)
	{
		super(x, y, TinyGunsGame.BULLET_PISTOL_BASE, game);

		game.physics.p2.enable(this, false, false);
		this.body.clearShapes();
		this.body.loadPolygon(TinyGunsGame.PHYSICS_FILE, TinyGunsGame.BULLET_PISTOL_PHYSICS);
		this.checkWorldBounds = true;
		this.body.collideWorldBounds = false;
		//this.sprite.outOfBoundsKill = true;
		this.anchor.setTo(0.5, 0.5);

		this.body.onBeginContact.add(this.collide, this);

	}

	public collide(body, shapeA, shapeB, equation)
	{
		//this.kill();
	}
	
	public update()
	{
		this.distanceTravelled = Math.sqrt(Math.pow(this.world.x - this.originX, 2) + Math.pow(this.world.y - this.originY, 2));

		if (this.distanceTravelled != 0)
		{
			console.log(this.distanceTravelled);
		}

		if (this.distanceTravelled > Bullet_Pistol.BULLET_MAX_TRAVEL_DISTANCE)
		{
			this.distanceTravelled = 0;
			this.kill();
			return;
		}
	}
} 