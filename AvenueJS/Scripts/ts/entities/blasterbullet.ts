class BlasterBullet extends Projectile {
	public bulletRadius: number = 4;
	public speed: number = 30;
	public color: string = "#000";
	constructor(x:number, y:number,rot:number, world) {
		super(x, y, rot, world);
		this.graphics.beginFill(this.color).drawCircle(x,y,this.bulletRadius);
	}


	public _tick(event) {
		//this.x += this.xVector * this.speed;
		//this.y += this.yVector * this.speed;
		this.x += Math.cos((this.rot - 90 ) * Math.PI / 180) * this.speed;
		this.y += Math.sin((this.rot - 90) * Math.PI / 180) * this.speed;
	}
} 