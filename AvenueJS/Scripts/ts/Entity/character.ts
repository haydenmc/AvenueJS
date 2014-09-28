class Character extends Entity
{
	public speed: number;
	public currentWeapon: Weapon;

	//list of weapons
	public pistol: Pistol;

	public constructor(x: number, y: number, game: Phaser.Game)
	{
		super(x, y, TinyGunsGame.CHARACTER_BASE, game);

		//this.game.physics.arcade.enable(this.sprite);
		game.physics.p2.enable(this.sprite);
		this.sprite.body.clearShapes();
		this.sprite.body.loadPolygon(TinyGunsGame.CHARACTER_PHYSICS, TinyGunsGame.CHARACTER_BASE);
		this.sprite.body.collideWorldBounds = true;

		//Add weapons
		this.pistol = new Pistol(0, 0, game);
		game.physics.p2.enable(this.pistol.sprite);
		this.pistol.sprite.body.clearShapes();

		this.sprite.addChild(this.pistol.sprite);

		this.currentWeapon = this.pistol;
	}
}