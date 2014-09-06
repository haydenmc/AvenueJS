class Projectile extends GameEntity {
	public bulletRadius: number;
	public rot: number;
	constructor(x:number, y:number,rot:number, world) {
		super(world);
		this.x = x;
		this.y = y;
		this.rot = rot;
	}

} 