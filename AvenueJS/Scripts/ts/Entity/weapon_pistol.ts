class Weapon_Pistol extends Weapon
{
	public speedModifier: number = 0;
	public magazineSize: number = 10;
	public fireSpeed: number = 100; //in ms
	public reloadSpeed: number = 300; //in ms
	public fireLocX: number = 32;
	public fireLocY: number = -16;
	public bulletSpeed: number = 750;

	public constructor(x: number, y: number, game: Phaser.Game)
	{
		super(x, y, TinyGunsGame.WEAPON_PISTOL_BASE, game);

		this.currentMagSize = this.magazineSize;

		for(var x = 0; x < this.magazineSize; x++)
		{
			var bullet = new Bullet_Pistol(0, 0, this.game);
			this.bulletPool.add(bullet.sprite);

			bullet.sprite.kill();
		}
	}

	public fire(angle: number, parentXVelocity: number, parentYVelocity: number )
	{
		//TODO: add reload mechanism

		if (this.lastBulletShotAt == undefined)
		{
			this.lastBulletShotAt = 0;
		}

		if (this.game.time.now - this.lastBulletShotAt < this.fireSpeed)
		{
			return;
		}

		this.lastBulletShotAt = this.game.time.now

		var bullet = this.bulletPool.getFirstDead();

		if (bullet == null || bullet == undefined)
		{
			return;
		}

		bullet.revive();
		bullet.reset(this.sprite.world.x + 70 * Math.cos(angle) - 20 * Math.sin(angle), this.sprite.world.y + 70 * Math.sin(angle) + 20 * Math.cos(angle));

		//velocity set
		bullet.body.velocity.x = this.bulletSpeed * Math.cos(angle) + parentXVelocity;
		bullet.body.velocity.y = this.bulletSpeed * Math.sin(angle) + parentYVelocity;
		console.log(parentXVelocity + " " + parentYVelocity);
	}
} 