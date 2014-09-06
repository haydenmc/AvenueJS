class Rock extends Terrain {
	constructor(x,y,world) {
		super(world);
		this.graphics.f("#000").dc(x, y, 600);
	}
} 