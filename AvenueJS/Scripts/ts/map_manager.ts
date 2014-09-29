class MapManager
{
	//List of map names
	public static ISLAND_MAP: string = "island"
	public game: Phaser.Game;
	public maps: { [mapName: string]: Gamemap; } = {};
	public currentMap: Gamemap;

	public constructor(game: Phaser.Game)
	{
		this.game = game;

		//Beging adding maps
		//adding island
		this.maps[MapManager.ISLAND_MAP] = new Gamemap(TinyGunsGame.MAP_PLACEHOLDER, TinyGunsGame.TILES_PLACEHOLDER, 32, this.game);
		
		console.log("map manager created");

		//set default map
		this.currentMap = this.maps[MapManager.ISLAND_MAP];
		console.log(this.maps[MapManager.ISLAND_MAP]);
	}

	public switchToMap(mapName: string)
	{
		//TODO
	}
}