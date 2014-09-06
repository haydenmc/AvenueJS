class Rock extends Terrain {
	private size: number = 200;
	constructor(x:number,y:number, size:number, world) {
		super(world);
		this.graphics.f("#000").dc(x, y, size = (size <= 0) ? this.size : size);
	}
} 