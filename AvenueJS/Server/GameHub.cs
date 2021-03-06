﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using System.Threading.Tasks;
using AvenueJS.Server.Entities;

namespace AvenueJS.Server
{
	public class GameHub : Hub
	{
		private Game _game;

		public GameHub()
			: this(Game.Instance)
		{
		}

		public GameHub(Game game)
		{
			_game = game;
		}

		public override Task OnConnected()
		{
			var client = new Client() { ConnectionId = Context.ConnectionId, Name = "Player " + this._game.Clients.Count };
			this._game.Clients.Add(Context.ConnectionId,client);
			Clients.All.notify("'" + client.Name + "' has connected.");
			return base.OnConnected();
		}

		public override Task OnDisconnected(bool stopCalled)
		{
			var client = this._game.Clients[Context.ConnectionId];
			this._game.Clients.Remove(Context.ConnectionId);
			Clients.All.notify("'" + client.Name + "' has disconnected");
			return base.OnDisconnected(stopCalled);
		}

		public void UpdatePlayer(dynamic p)
		{
			p.connectionId = Context.ConnectionId;
			Clients.AllExcept(Context.ConnectionId).UpdatePlayerFromServer(p);
		}

		public void FireBullet(double x, double y, double r)
		{
			var connectionId = Context.ConnectionId;
			Clients.AllExcept(Context.ConnectionId).FireBulletFromServer(x,y,r,connectionId);
		}
	}
}