﻿using System.Web;
using System.Web.Optimization;

namespace AvenueJS
{
	public class BundleConfig
	{
		// For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
		public static void RegisterBundles(BundleCollection bundles)
		{
			bundles.Add(new ScriptBundle("~/bundles/js").Include(
						"~/Scripts/js/createjs-2013.12.12.min.js",
						"~/Scripts/jquery-1.6.4.min.js",
						"~/Scripts/jquery.signalR-2.1.1.min.js"));

			bundles.Add(new ScriptBundle("~/bundles/ts").Include(
						"~/Scripts/ts/*.js",
						"~/Scripts/ts/entities/terrain.js",
						"~/Scripts/ts/entities/weapon.js",
						"~/Scripts/ts/entities/projectile.js",
						"~/Scripts/ts/entities/character.js",
						"~/Scripts/ts/entities/*.js"
						));

			bundles.Add(new StyleBundle("~/Content/css").Include(
					  "~/Content/site.css"));

			// Set EnableOptimizations to false for debugging. For more information,
			// visit http://go.microsoft.com/fwlink/?LinkId=301862
			BundleTable.EnableOptimizations = false;
		}
	}
}
