class Entity
{
	public game: Phaser.Game;
	public sprite: Phaser.Sprite;
	public image: string;

	public constructor(x: number, y: number, image: string, game: Phaser.Game)
	{
		this.game = game;
		this.image = image;


		if (this.image != "null")
		{
			this.sprite = this.game.add.sprite(x, y, this.image);

		}
	}
	public update()
	{

	}
}