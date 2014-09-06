class BlasterWeapon extends Weapon {
	public weaponLength: number = 50;
	public weaponWidth: number = 8;
	public color: string = "#000"; 
	constructor(x:number, y:number, world) {
		super(x, y, world);
		this.projectile = BlasterBullet;
		//this.graphics.beginFill(this.color).drawRect(x - this.weaponWidth/2, y, this.weaponWidth, this.weaponLength);
		//new this.projectile(world);
	}

	public fire(x:number, y:number, rot:number) {
		var proj = new this.projectile(x, y, rot, this.world);
		console.log("Proj x: " + x +" Proj y: " + y + " Rot: " + rot);
		this.parent.addChild(proj);
	}
}  