using Chloe.Server;
using Microsoft.Owin;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Unity.WebApi;

[assembly: OwinStartup(typeof(Chloe.Startup))]

namespace Chloe
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(UnityConfiguration.GetContainer());

            GlobalConfiguration.Configure(config => ApiConfiguration.Install(config, app));
        }
    }
}