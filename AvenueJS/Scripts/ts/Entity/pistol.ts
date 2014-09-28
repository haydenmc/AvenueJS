class Pistol extends Weapon
{
	public speedModifier: number = 0;
	public magazineSize: number = 10;
	public fireSpeed: number = 3;
	public reloadSpeed: number = 3;

	public constructor(x: number, y: number, game: Phaser.Game)
	{
		super(x, y, TinyGunsGame.PISTOL_IMAGE, game);
	}
} 