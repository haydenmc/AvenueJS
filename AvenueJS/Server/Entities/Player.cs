using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AvenueJS.Server.Entities
{
	public class Player
	{
		public string connectionId { get; set; }
		public int x { get; set; }
		public int y { get; set; }
		public bool wKeyDown { get; set; }
		public bool aKeyDown { get; set; }
		public bool sKeyDown { get; set; }
		public bool dKeyDown { get; set; }
	}
}