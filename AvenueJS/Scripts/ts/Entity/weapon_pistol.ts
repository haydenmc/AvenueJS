class Weapon_Pistol extends Weapon
{
	public speedModifier: number = 0;
	public magazineSize: number = 10;
	public fireSpeed: number = 100; //in ms
	public reloadSpeed: number = 300; //in ms
	public fireLocX: number = 32;
	public fireLocY: number = -16;

	//Maybe move to bullet? might need to rethink class inheritance structure

	public constructor(x: number, y: number, game: Phaser.Game)
	{
		super(x, y, TinyGunsGame.WEAPON_PISTOL_BASE, game);

		this.currentMagSize = this.magazineSize;

		for(var x = 0; x < Bullet_Pistol.BULLET_MAX_TRAVEL_DISTANCE / (Bullet_Pistol.BULLET_SPEED - Character.SPEED) + 1; x++)
		{
			var bullet = new Bullet_Pistol(0, 0, this.game);
			this.bulletPool.add(bullet);

			bullet.kill();
		}
	}
	public load()
	{
		var levels = JSON.parse(this.responseText);
		console.log(levels);
	}
	public responseText: string;

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
		bullet.reset(this.world.x + 70 * Math.cos(angle) - 20 * Math.sin(angle), this.world.y + 70 * Math.sin(angle) + 20 * Math.cos(angle));

		//velocity set
		bullet.body.velocity.x = Bullet_Pistol.BULLET_SPEED * Math.cos(angle) + parentXVelocity;
		bullet.body.velocity.y = Bullet_Pistol.BULLET_SPEED * Math.sin(angle) + parentYVelocity;
		console.log(parentXVelocity + " " + parentYVelocity);
	}
} 