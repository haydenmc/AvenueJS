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
	}

	public connect() {
		if (window.debug) {
			$.connection.hub.logging = true;
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
				player = p;
			}
		}
		if (player == null) {
			player = new Player(Main.instance.world);
			alert("OH HEY LOOK A NEW PLAYER WITH ID " + p.connectionId);
			player.connectionId = p.connectionId;
			Main.instance.world.players.push(player);
			Main.instance.world.addChild(player);
		}
		player.x = p.x;
		player.y = p.y;
		player.wKeyDown = p.wKeyDown;
		player.aKeyDown = p.aKeyDown;
		player.sKeyDown = p.sKeyDown;
		player.dKeyDown = p.dKeyDown;

		console.log("update x: " + player.x);
	}

	/* Server-side */
	public updatePlayer(p: any) {
		this.hub.server.updatePlayer(p);
	}
} 