class TinyGunsGame {
	/**
	 * Global Static vars
	 */
	public static IMAGE_LOCATION: string = "/Content/images/";
	public static CHARACTER_BASE: string = "character_base";
	public static CHARACTER_SHEET: string = "character_sheet";
	public static CHARACTER_CORE: string = "character_core";
	public static WEAPON_PISTOL_BASE: string = "weapon_pistol";
	public static BULLET_PISTOL_BASE: string = "bullet_pistol";
	public static TILES_PLACEHOLDER: string = "dg_edging132";


	public static PHYSICS_LOCATION: string = "/Content/physics/";
	public static PHYSICS_FILE: string = "physics";
	public static CHARACTER_PHYSICS: string = "character_base";
	public static WEAPON_PISTOL_PHYSICS: string = "weapon_pistol";
	public static BULLET_PISTOL_PHYSICS: string = "bullet_pistol";

	public static MAP_LOCATION: string = "/Content/tiles/";
	public static MAP_PLACEHOLDER: string = "tile";

	/**
	 * Global game vars
	 */
	private game: Phaser.Game;
	private gameHeight: number = 720;
	private gameWidth: number = 1280;
	private fpsCounter: Phaser.Text;

	/**
	 * Map manager
	 */
	private mapManager: MapManager;

	/**
	 * Player vars
	 */
	private gamePlayer: Player;

	constructor()
	{
		this.game = new Phaser.Game(this.gameWidth, this.gameHeight, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update });	
		
	}

	public preload(): void
	{
		this.game.load.image(TinyGunsGame.CHARACTER_BASE, TinyGunsGame.IMAGE_LOCATION + TinyGunsGame.CHARACTER_BASE + ".png");
		this.game.load.image(TinyGunsGame.CHARACTER_CORE, TinyGunsGame.IMAGE_LOCATION + TinyGunsGame.CHARACTER_CORE + ".png");
		this.game.load.image(TinyGunsGame.WEAPON_PISTOL_BASE, TinyGunsGame.IMAGE_LOCATION + TinyGunsGame.WEAPON_PISTOL_BASE + ".png");
		this.game.load.image(TinyGunsGame.BULLET_PISTOL_BASE, TinyGunsGame.IMAGE_LOCATION + TinyGunsGame.BULLET_PISTOL_BASE + ".png");

		this.game.load.spritesheet(TinyGunsGame.CHARACTER_SHEET, TinyGunsGame.IMAGE_LOCATION + TinyGunsGame.CHARACTER_SHEET + ".png", 192 , 128);

		this.game.load.physics(TinyGunsGame.PHYSICS_FILE, TinyGunsGame.PHYSICS_LOCATION + TinyGunsGame.PHYSICS_FILE + ".json");

		this.game.load.tilemap(TinyGunsGame.MAP_PLACEHOLDER, TinyGunsGame.MAP_LOCATION + TinyGunsGame.MAP_PLACEHOLDER + ".json", null, Phaser.Tilemap.TILED_JSON);
		this.game.load.image(TinyGunsGame.TILES_PLACEHOLDER, TinyGunsGame.IMAGE_LOCATION + TinyGunsGame.TILES_PLACEHOLDER + ".gif");
	}

	public create(): void
	{
		//stage changes
		this.game.stage.backgroundColor = 0x4488cc;
		this.game.stage.disableVisibilityChange = true;

		//start physics system
		this.game.physics.startSystem(Phaser.Physics.P2JS);

		//start map
		this.mapManager = new MapManager(this.game);
		
		//create player
		this.gamePlayer = new Player(this.game.world.width / 2 - 300, this.game.world.height / 2, this.game);

		//set camera
		this.game.physics.p2.setBoundsToWorld(true, true, true, true, false);
		this.game.camera.follow(this.gamePlayer.core);

		this.game.input.keyboard.addKeyCapture
		([
			Phaser.Keyboard.W,
			Phaser.Keyboard.A,
			Phaser.Keyboard.S,
			Phaser.Keyboard.D
		]);

		// Show FPS
		this.game.time.advancedTiming = true;
		this.fpsCounter = this.game.add.text(
			20, 20, '', { font: '16px Arial', fill: '#ffffff' }
			);
		this.fpsCounter.fixedToCamera = true;
	}

	public update(): void
	{
		if (this.game.time.fps !== 0) {
			this.fpsCounter.setText(this.game.time.fps + ' FPS');
		}
		this.gamePlayer.update();
	}
}