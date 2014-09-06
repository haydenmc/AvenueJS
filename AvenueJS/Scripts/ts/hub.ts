interface SignalR {
	gameHub: any;
}

class Hub {
	private hub = $.connection.gameHub;
	public ready: boolean = false;

	constructor() {
		this.hub.client.notify = (message: string) => {
			alert("Message from server: '" + message + "'");
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
} 