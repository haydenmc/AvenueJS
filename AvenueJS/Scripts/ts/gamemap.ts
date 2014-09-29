class Gamemap
{
	public game: Phaser.Game;
	public map: Phaser.Tilemap;
	public mapLayer: Phaser.TilemapLayer;
	public tilemap: string;
	public tileImage: string;
	public mapSize: number;

	public constructor(tilemap: string, tileImage: string, size: number, game: Phaser.Game)
	{
		console.log("gamemap created");
		this.game = game;
		this.mapSize = size;
		this.tilemap = tilemap;
		this.tileImage = tileImage;

		this.map = this.game.add.tilemap(tilemap, this.mapSize, this.mapSize);
		this.map.addTilesetImage(tileImage);
		this.mapLayer = this.map.createLayer(0);
		this.mapLayer.resizeWorld();
	}
}