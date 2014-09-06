class Player extends Character {
	private speed: number = 10;

	private wKey: number = 87;
	private aKey: number = 65;
	private sKey: number = 83;
	private dKey: number = 68;
	

	constructor(world) {
		super(world);
		this.graphics.f("#f00").dc(0, 0, 20);
	}

	public keyup(e) {

		switch (e.keyCode)
		{
			case this.wKey:
				this.y -= this.speed;
				break;
			case this.aKey:
				this.x -= this.speed;
				break;
			case this.sKey:
				this.y += this.speed;
				break;
			case this.dKey:
				this.x += this.speed;
				break;
		}
	}

	public keydown(e) {

	}
} 