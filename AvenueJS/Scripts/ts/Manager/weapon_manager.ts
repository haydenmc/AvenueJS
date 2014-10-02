class WeaponManager
{
	//TODO: FINISH LATER
	public game: Phaser.Game

	public static weapons: { [weaponName: string]: Weapon; } = {};
	public static bullets: { [bulletName: string]: Bullet; } = {};

	public constructor(game: Phaser.Game)
	{
		this.game = game;
	}

	public static getWeapon(name: string): Weapon
	{
		WeaponManager.weapons
		return null;
	}

	public static getBullet(name: string): Bullet
	{
		return null;
	}
}