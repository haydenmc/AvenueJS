using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AvenueJS.Server.Entities
{
	public class GameEntity
	{
		public Guid id;
		public int x;
		public int y;
		public GameEntity(int x = 0, int y = 0)
		{
			this.id = Guid.NewGuid();
			this.x = x;
			this.y = y;
		}
		public void Update() {

		}
	}
}