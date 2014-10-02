class Weapon extends Entity
{
	public speedModifier: number;
	public rotationModifier: number;
	public magazineSize: number;
	public currentMagSize: number;
	public fireSpeed: number;
	public reloadSpeed: number;
	public fireLocX: number;
	public fireLocY: number;

	//firing mechanism
	public bulletPool: Phaser.Group;
	public lastBulletShotAt: number;

	public constructor(x: number, y: number, image: string, game: Phaser.Game)
	{
		super(x, y, image, game);
		this.bulletPool = this.game.add.group();
	}

	public fire(angle: number, parentXVelocity:number, parentYVelocity: number)
	{

	}

	public update()
	{
		for (var x = 0; x < this.bulletPool.length; x++)
		{
			//console.log("1 " + this.bulletPool.getAt(x).distanceTravelled);
			//console.log("2 " + this.bulletPool.getAt(x).body.velocity.x);
			this.bulletPool.getAt(x).update();
		}
	}
}