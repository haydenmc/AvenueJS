class Weapon extends GameEntity {
	public weaponLength: number;
	public weaponWidth: number;
	public color: string;
	public x: number;
	public y: number;
	public projectile: {
		new (x:number, y:number,rot:number, world: World): Projectile;
	};

	constructor(x:number, y:number, world) {
		super(world);
		this.x = x;
		this.y = y;
	}

	public fire(x: number, y: number, rot: number) {
	}
} 