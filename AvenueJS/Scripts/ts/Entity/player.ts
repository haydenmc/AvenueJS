﻿class Player extends Character
{
	public constructor(x: number, y: number, game: Phaser.Game)
	{
		super(x, y, game);
	}

	public update()
	{
		//Updates the rotation of the player to face the pointer
		//this.sprite.rotation = this.game.physics.arcade.angleToPointer(this.sprite);
		var deltaR = this.core.rotation - this.game.physics.arcade.angleToPointer(this.core);
		deltaR %= Math.PI * 2;

		if (deltaR > Math.PI)
		{
			deltaR -= Math.PI * 2;
		}
		else if (deltaR < -Math.PI)
		{
			deltaR += Math.PI * 2;

		}

		this.core.body.rotateLeft(500 * deltaR);
		//console.log(deltaR);

		//Speed logic
		//Remember that going in an diagonal SHOULD have the same speed as a vertical or horizontal movement
		this.core.body.velocity.x = 0;
		this.core.body.velocity.y = 0;

		//Controls player horizontal velocity
		if (this.game.input.keyboard.isDown(Phaser.Keyboard.A))
		{
			this.core.body.velocity.x = -Character.SPEED;
		}
		else if (this.game.input.keyboard.isDown(Phaser.Keyboard.D))
		{
			this.core.body.velocity.x = Character.SPEED;
		}
		else
		{
			this.core.body.velocity.x = 0;
		}

		//Controls player vertical veloctiy
		if (this.game.input.keyboard.isDown(Phaser.Keyboard.W))
		{
			this.core.body.velocity.y = -Character.SPEED;
		}
		else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S))
		{
			this.core.body.velocity.y = Character.SPEED;
		}
		else
		{
			this.core.body.velocity.y = 0;
		}

		if (this.core.body.velocity.x != 0 && this.core.body.velocity.y != 0)
		{
			this.core.body.velocity.x = this.core.body.velocity.x / Character.SPEED * Math.cos(Math.PI / 4) * Character.SPEED;
			this.core.body.velocity.y = this.core.body.velocity.y / Character.SPEED * Math.sin(Math.PI / 4) * Character.SPEED;
		}

		//firing logic
		if (this.game.input.activePointer.isDown)
		{
			var deltaAngle = this.game.physics.arcade.angleToPointer(this.core);
			this.currentWeapon.fire(deltaAngle, this.core.body.velocity.x, this.core.body.velocity.y);
			console.log(deltaAngle);
		}

		//call super for animations and weapon and bullets
		super.update();
	}
}