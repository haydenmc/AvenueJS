class Player extends Character {
	public speed: number = 10;

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
		this.controllerXOffset = 0;
		this.controllerYOffest = 0;

		var movement:number;

		this.x += movement = (this.dKeyDown) ? this.speed : 0;
		this.x -= movement = (this.aKeyDown) ? this.speed : 0;
		this.y -= movement = (this.wKeyDown) ? this.speed : 0;
		this.y += movement = (this.sKeyDown) ? this.speed : 0;

		//TODO: fix for changing controlling objects
		this.centerOnEntity();
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