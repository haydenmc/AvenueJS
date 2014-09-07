interface SignalR {
	gameHub: any;
}

class Hub {
	private hub = $.connection.gameHub;
	public ready: boolean = false;

	constructor() {
		this.hub.client.notify = (message: string) => {
			console.log("SERVER: " + message);
		};
		this.hub.client.updatePlayerFromServer = (p: Player) => {
			this.updatePlayerFromServer(p);
		};
		this.hub.client.fireBulletFromServer = (x: number, y:number, r:number, id:string) => {
			this.fireBulletFromServer(x,y,r,id);
		};
		this
	}

	public connect() {
		if (window.debug) {
			$.connection.hub.logging = false;
		}
		$.connection.hub.start().done(() => {
			this.ready = true;
		});
	}

	/* Client-side */
	public updatePlayerFromServer(p: Player) {
		var player: Player = null;
		for (var i = 0; i < Main.instance.world.players.length; i++) {
			if (Main.instance.world.players[i].connectionId == p.connectionId) {
				player = Main.instance.world.players[i];
			}
		}
		if (player == null) {
			player = new Player(Main.instance.world);
			alert("OH HEY LOOK A NEW PLAYER WITH ID " + p.connectionId);
			player.connectionId = p.connectionId;
			Main.instance.world.players.push(player);
			Main.instance.world.addChild(player);
		}
		if (p.x != 2000 && p.y != 2000) {
			player.x = p.x;
			player.y = p.y;
			player.wKeyDown = p.wKeyDown;
			player.aKeyDown = p.aKeyDown;
			player.sKeyDown = p.sKeyDown;
			player.dKeyDown = p.dKeyDown;
		}

		console.log("update x: " + player.x + " y: " + player.y + " controllerable: " + player.controllable);
	}

	public fireBulletFromServer(x: number, y: number, r: number, connectionId: string) {
		var player: Player = null;
		for (var i = 0; i < Main.instance.world.players.length; i++) {
			if (Main.instance.world.players[i].connectionId == connectionId) {
				player = Main.instance.world.players[i];
			}
		}
		console.log("trying to fire bullet");
		if (player == null) return;

		player.weapon.fire(x, y, r);
		console.log("server fire: " + x + " " + y + " " + r);
	}

	/* Server-side */
	public updatePlayer(p: any) {
		this.hub.server.updatePlayer(p);
	}

	public fireBullet(x: number, y: number, r: number) {
		this.hub.server.fireBullet(x, y, r);
		console.log("sending fire to server p2");

	}
} 