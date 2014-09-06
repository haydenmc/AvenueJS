using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AvenueJS.Server.Entities
{
	public class Player : GameEntity
	{
		public const int WALK_SPEED = 10;
		public bool MovingNorth { get; set; }
		public bool MovingSouth { get; set; }
		public bool MovingEast { get; set; }
		public bool MovingWest { get; set; }

		public void Update() {
			if (MovingNorth) y += WALK_SPEED;
			if (MovingSouth) y -= WALK_SPEED;
			if (MovingEast) x += WALK_SPEED;
			if (MovingWest) x -= WALK_SPEED;
		}
	}
}