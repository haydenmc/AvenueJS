class MapManager
{
	//List of map names
	public static ISLAND_MAP: string = "island"
	public game: Phaser.Game;
	public maps: { [mapName: string]: Gamemap; } = {};
	public currentMap: Gamemap;

	public constructor(game: Phaser.Game)
	{
		//TODO FIX LOGIC FOR HANDLING MORE MMAPS
		this.game = game;

		//Beging adding maps
		//adding island
		this.maps[MapManager.ISLAND_MAP] = new Gamemap(TinyGunsGame.MAP_PLACEHOLDER, TinyGunsGame.TILES_PLACEHOLDER, 32, this.game);
		this.maps[MapManager.ISLAND_MAP].collideTiles.push(114);
		console.log("number: " + this.maps[MapManager.ISLAND_MAP].collideTiles[0]);
		this.maps[MapManager.ISLAND_MAP].setCollisions();
		this.maps[MapManager.ISLAND_MAP].mapLayer.debug = true;

		//set default map
		this.currentMap = this.maps[MapManager.ISLAND_MAP];
	}

	public switchToMap(mapName: string)
	{
		//TODO
	}
}