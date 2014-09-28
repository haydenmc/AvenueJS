class Bullet_Pistol extends Bullet
{
	public constructor(x: number, y: number, game: Phaser.Game)
	{
		super(x, y, TinyGunsGame.BULLET_PISTOL_BASE, game);

		game.physics.p2.enable(this.sprite);
		this.sprite.body.clearShapes();
		this.sprite.body.loadPolygon(TinyGunsGame.PHYSICS_FILE, TinyGunsGame.BULLET_PISTOL_PHYSICS);
		//this.sprite.body.collideWordsBounds = false;
		this.sprite.checkWorldBounds = true;
		this.sprite.outOfBoundsKill = true;
		this.sprite.body.collideWorldBounds = false;
		this.sprite.anchor.setTo(0.5, 0.5);
	}
	
	public update()
	{
	
	}
} 