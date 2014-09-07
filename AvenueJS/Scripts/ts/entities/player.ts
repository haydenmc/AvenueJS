﻿class Player extends Character {
	public controllable: boolean = false;
	public speed: number = 10;

	public connectionId: string;

	private wKey: number = 87;
	private aKey: number = 65;
	private sKey: number = 83;
	private dKey: number = 68;
	private spaceKey: number = 32;

	public wKeyDown: boolean = false;
	public aKeyDown: boolean = false;
	public sKeyDown: boolean = false;
	public dKeyDown: boolean = false;

	public arrayOfTiles: Array<createjs.Sprite>;

	public weapon: Weapon;

	constructor(world, array: Array<createjs.Sprite>) {
		super(world);
		this.arrayOfTiles = array;
		this.graphics.beginFill("#f00").drawCircle(0, 0, 20);
		this.graphics.beginFill("#f00").drawRect(-2, 2, 4, -30);
		this.weapon = new BlasterWeapon(0, 0, world);
		this.world.addChild(this.weapon);
		this.regX = 0;
		this.regY = 0;
		this.connectionId = "";
	}

	public _tick(event) {

		//smooth movement
		this.controllerXOffset = 0;
		this.controllerYOffest = 0;

		var movement: number;

		var mapy = Math.floor(this.y / TileMap.mapData.tilewidth / 2);
		var mapx = Math.floor(this.x / TileMap.mapData.tileheight / 2);
		var tileData = mapy * 100 + mapx;
		console.log("Tile location: " + mapx + " " + mapy + " " + TileMap.mapData.layers[0].data[tileData]);

		this.x += movement = (this.dKeyDown && TileMap.mapData.layers[0].data[(mapy) * 100 + mapx + 1] != 114 && TileMap.mapData.layers[0].data[(mapy) * 100 + mapx + 1] != 123) ? this.speed : 0;
		this.x -= movement = (this.aKeyDown && TileMap.mapData.layers[0].data[(mapy) * 100 + mapx - 1] != 114 && TileMap.mapData.layers[0].data[(mapy) * 100 + mapx - 1] != 123) ? this.speed : 0;
		this.y -= movement = (this.wKeyDown && TileMap.mapData.layers[0].data[(mapy - 1) * 100 + mapx] != 114 && TileMap.mapData.layers[0].data[(mapy - 1) * 100 + mapx] != 123) ? this.speed : 0;
		this.y += movement = (this.sKeyDown && TileMap.mapData.layers[0].data[(mapy + 1) * 100 + mapx] != 114 && TileMap.mapData.layers[0].data[(mapy + 1) * 100 + mapx] != 123) ? this.speed : 0;

		//this.x += movement = (this.dKeyDown) ? this.speed : 0;
		//this.x -= movement = (this.aKeyDown) ? this.speed : 0;
		//this.y -= movement = (this.wKeyDown) ? this.speed : 0;
		//this.y += movement = (this.sKeyDown) ? this.speed : 0;

		//this.rotation = Math.atan((this.getStage().mouseX - this.x) / (this.getStage().mouseY - this.y)) * 180 / Math.PI;
		//assuming center of screen
		if (!this.controllable) return;
		var degrees = -1 * Math.atan((this.getStage().mouseX - this.getStage().canvas.width / 2) / (this.getStage().mouseY - this.getStage().canvas.height / 2)) * 180 / Math.PI;
		this.rotation = degrees = ((this.getStage().mouseY - this.getStage().canvas.height / 2) < 0) ? degrees : degrees + 180;

		
		//console.log("Rotation: " +  this.rotation);

		//TODO: fix for changing controlling objects
		this.centerOnEntity();
		if (Main.instance.hub.ready) {
			Main.instance.hub.updatePlayer({ wKeyDown: this.wKeyDown, aKeyDown: this.aKeyDown, sKeyDown: this.sKeyDown, dKeyDown: this.dKeyDown, x: this.x, y: this.y });
		}
	}

	public keydown(e) {
		if (!this.controllable) return;
		

		switch (e.keyCode)
		{
			case this.wKey:

				//TileMap.mapData.layers[0].data[x];

				//coordinate convertor
				//cellBitmap.x = x * tilewidth * 2;
				//cellBitmap.y = y * tileheight * 2;
				
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

		
		//console.log("Key: " + e.keyCode);
	}

	public keyup(e) {
		if (!this.controllable) return;
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

	public mousedown(e: MouseEvent) {
		if (!this.controllable) return;
		this.weapon.fire(this.x / 2, this.y / 2, this.rotation);

		if (Main.instance.hub.ready) {
			Main.instance.hub.fireBullet(this.x / 2, this.y / 2, this.rotation);
			console.log("sending fire to server");
		}
		//console.log("MOUSE DOWN" + e.x + " " + e.y);
	}
} 