class Player extends Character {
	public speed: number = 10;

	private wKey: number = 87;
	private aKey: number = 65;
	private sKey: number = 83;
	private dKey: number = 68;
	private spaceKey: number = 32;

	private wKeyDown: boolean = false;
	private aKeyDown: boolean = false;
	private sKeyDown: boolean = false;
	private dKeyDown: boolean = false;

	public weapon: Weapon;

	constructor(world) {
		super(world);
		this.graphics.beginFill("#f00").drawCircle(0, 0, 20);
		this.graphics.beginFill("#f00").drawRect(-2, 2, 4, -30);
		this.weapon = new BlasterWeapon(0, 0, world);
		this.world.addChild(this.weapon);
		this.regX = 0;
		this.regY = 0;
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

		//this.rotation = Math.atan((this.getStage().mouseX - this.x) / (this.getStage().mouseY - this.y)) * 180 / Math.PI;
		//assuming center of screen
		var degrees = -1 * Math.atan((this.getStage().mouseX - this.getStage().canvas.width / 2) / (this.getStage().mouseY - this.getStage().canvas.height / 2)) * 180 / Math.PI;
		this.rotation = degrees = ((this.getStage().mouseY - this.getStage().canvas.height / 2) < 0) ? degrees  : degrees + 180;
		//console.log("Rotation: " +  this.rotation);
		
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
			case this.spaceKey:
				break;
		}
		//console.log("Key: " + e.keyCode);
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

	public mousedown(e:MouseEvent) {
		this.weapon.fire(this.x/2, this.y/2, this.rotation);
		console.log("MOUSE DOWN" + e.x + " " + e.y);
	}
} 