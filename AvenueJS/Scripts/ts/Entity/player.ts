class Player extends Character
{
	public speed: number = 500;
	public constructor(x: number, y: number, game: Phaser.Game)
	{
		super(x, y, game);
	}

	public update()
	{
		//Updates the rotation of the player to face the pointer
		this.sprite.rotation = this.game.physics.arcade.angleToPointer(this.sprite);

		//Speed logic
		//Remember that going in an diagonal SHOULD have the same speed as a vertical or horizontal movement
		this.sprite.body.velocity.x = 0;
		this.sprite.body.velocity.y = 0;

		//Controls player horizontal velocity
		if (this.game.input.keyboard.isDown(Phaser.Keyboard.A))
		{
			this.sprite.body.velocity.x = -this.speed;
		}
		else if (this.game.input.keyboard.isDown(Phaser.Keyboard.D))
		{
			this.sprite.body.velocity.x = this.speed;
		}
		else
		{
			this.sprite.body.velocity.x = 0;
		}

		//Controls player vertical veloctiy
		if (this.game.input.keyboard.isDown(Phaser.Keyboard.W))
		{
			this.sprite.body.velocity.y = -this.speed;
		}
		else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S))
		{
			this.sprite.body.velocity.y = this.speed;
		}
		else
		{
			this.sprite.body.velocity.y = 0;
		}

		if (this.sprite.body.velocity.x != 0 && this.sprite.body.velocity.y != 0)
		{
			this.sprite.body.velocity.x = this.sprite.body.velocity.x / this.speed * Math.cos(Math.PI/4) * this.speed;
			this.sprite.body.velocity.y = this.sprite.body.velocity.y / this.speed * Math.sin(Math.PI/4) * this.speed;
		}
	}
}