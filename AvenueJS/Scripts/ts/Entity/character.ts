class Character extends Entity
{
	public speed: number;
	public constructor(x: number, y: number, game: Phaser.Game)
	{
		super(x, y, TinyGunsGame.CHARACTER_IMAGE, game);

		this.game.physics.arcade.enable(this.sprite);
		this.sprite.body.collideWorldBounds = true;
		this.sprite.anchor.setTo(0.5, 0.5);
		console.log("Runs");
	}
}