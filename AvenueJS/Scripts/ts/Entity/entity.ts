class Entity extends Phaser.Sprite
{
	public game: Phaser.Game;
	public image: string;

	public constructor(x: number, y: number, image: string, game: Phaser.Game)
	{
		this.game = game;
		this.image = image;
		super(this.game, x, y, this.image);
	}
	public update()
	{

	}
}