﻿using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AvenueJS.Startup))]
namespace AvenueJS
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
			app.MapSignalR();
        }
    }
}
