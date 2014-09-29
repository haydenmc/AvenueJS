class Gamemap
{
	public game: Phaser.Game;
	public map: Phaser.Tilemap;
	public mapLayer: Phaser.TilemapLayer;
	public tilemap: string;
	public tileImage: string;
	public mapSize: number;
	public collideTiles: number[] = [];

	public constructor(tilemap: string, tileImage: string, size: number, game: Phaser.Game)
	{
		console.log("gamemap created");
		this.game = game;
		this.mapSize = size;
		this.tilemap = tilemap;
		this.tileImage = tileImage;

		this.map = this.game.add.tilemap(tilemap, this.mapSize, this.mapSize);
		this.map.addTilesetImage(tileImage);
		this.mapLayer = this.map.createLayer(this.tileImage);
		this.mapLayer.resizeWorld();
	}

	public setCollisions(): void
	{
		for( var a in this.collideTiles)
		{
			//typescript is fucking weird
			this.map.setCollision(this.collideTiles[a]);
			console.log(a + " " + this.collideTiles[a]);
		}
		console.log("????");
		this.game.physics.p2.convertTilemap(this.map, this.mapLayer);
		console.log("????");
		this.game.physics.p2.setBoundsToWorld(true, true, true, true, false);
	}
}