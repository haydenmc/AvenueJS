class Character extends Entity
{
	public speed: number;
	public currentWeapon: Weapon;

	//list of weapons
	public pistol: Weapon_Pistol;

	//core
	public core: Phaser.Sprite;

	public constructor(x: number, y: number, game: Phaser.Game)
	{
		super(0, 0, TinyGunsGame.CHARACTER_SHEET, game);

		//enable core
		this.core = game.add.sprite(x, y, TinyGunsGame.CHARACTER_CORE);
		game.physics.p2.enable(this.core,false, true);
		this.core.body.clearShapes();
		this.core.body.loadPolygon(TinyGunsGame.PHYSICS_FILE, TinyGunsGame.CHARACTER_PHYSICS);
		this.core.body.collideWordsBounds = true;

		//Add body
		game.physics.p2.enable(this.sprite);
		this.sprite.body.clearShapes();
		this.core.addChildAt(this.sprite, 0);

		//Add animations
		this.sprite.animations.add("walk", [0,1,2], 10, true);

		//Add weapons
		this.pistol = new Weapon_Pistol(0, 0, game);
		game.physics.p2.enable(this.pistol.sprite);
		this.pistol.sprite.body.clearShapes();

		this.core.addChildAt(this.pistol.sprite,0);

		this.currentWeapon = this.pistol;
	}

	public update()
	{
		if (this.core.body.velocity.x != 0 || this.core.body.velocity.y != 0)
		{
			this.sprite.animations.play("walk");
			console.log("has velocity");
		}
		else
		{
			this.sprite.animations.stop();
			this.sprite.frame = 1;
			console.log("no velocity");
		}
	}
}