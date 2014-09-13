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
	}

} 