class Weapon extends Entity
{
	public speedModifier: number;
	public magazineSize: number;
	public fireSpeed: number;
	public reloadSpeed: number;
	public fireLocX: number;
	public fireLocY: number;

	public constructor(x: number, y: number, image: string, game: Phaser.Game)
	{
		super(x, y, image, game);
	}
}