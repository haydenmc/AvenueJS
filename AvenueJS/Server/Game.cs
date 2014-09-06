using AvenueJS.Server.Entities;
using AvenueJS.Server.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AvenueJS.Server
{
	public class Game
	{
		public const int STAGE_WIDTH = 10000;
		public const int STAGE_HEIGHT = 10000;

		public Dictionary<string,Client> Clients { get; private set; }
		public List<GameEntity> Entities { get; private set; }
		private readonly static Lazy<Game> _instance = new Lazy<Game>(() => new Game());
		private readonly TimeSpan BroadcastInterval = TimeSpan.FromMilliseconds(40);
		private HighFrequencyTimer _gameLoop;

		Game()
		{
			Clients = new Dictionary<string,Client>();
			Entities = new List<GameEntity>();
			_gameLoop = new HighFrequencyTimer(1000 / 60, id => Update(id));
		}
		
		public static Game Instance
		{
			get
			{
				return _instance.Value;
			}
		}

		public void NewPlayer(Client client)
		{
			var p = new Player();
			Entities.Add(p);
		}

		private void Update(long id)
		{
			foreach (var entity in Entities)
			{
				entity.Update();
			}
		}
	}
}