class Player extends Character {
	private speed: number = 10;

	private wKey: number = 87;
	private aKey: number = 65;
	private sKey: number = 83;
	private dKey: number = 68;

	private wKeyDown: boolean = false;
	private aKeyDown: boolean = false;
	private sKeyDown: boolean = false;
	private dKeyDown: boolean = false;
	

	constructor(world) {
		super(world);
		this.graphics.f("#f00").dc(0, 0, 20);
	}

	public _tick(event) {

		//smooth movement
		this.x += (this.dKeyDown) ? this.speed : 0;
		this.x -= (this.aKeyDown) ? this.speed : 0;
		this.y -= (this.wKeyDown) ? this.speed : 0;
		this.y += (this.sKeyDown) ? this.speed : 0;

	}

	public keydown(e) {

		switch (e.keyCode)
		{
			case this.wKey:
				this.wKeyDown = true;
				break;
			case this.aKey:
				this.aKeyDown = true;
				break;
			case this.sKey:
				this.sKeyDown = true;
				break;
			case this.dKey:
				this.dKeyDown = true;
				break;
		}
	}

	public keyup(e) {
		switch (e.keyCode) {
			case this.wKey:
				this.wKeyDown = false;
				break;
			case this.aKey:
				this.aKeyDown = false;
				break;
			case this.sKey:
				this.sKeyDown = false;
				break;
			case this.dKey:
				this.dKeyDown = false;
				break;
		}
	}
} 