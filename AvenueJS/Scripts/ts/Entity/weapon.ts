class Weapon extends Entity
{
	public speedModifier: number;
	public magazineSize: number;
	public currentMagSize: number;
	public fireSpeed: number;
	public reloadSpeed: number;
	public fireLocX: number;
	public fireLocY: number;
	public fireDistance: number;
	public bulletSpeed: number;

	//firing mechanism
	public bulletPool: Phaser.Group;
	public lastBulletShotAt: number;

	public constructor(x: number, y: number, image: string, game: Phaser.Game)
	{
		super(x, y, image, game);
		this.bulletPool = this.game.add.group();
	}

	public fire(angle: number)
	{

	}
}