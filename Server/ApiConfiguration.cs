using Owin;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Chloe.Server.Auth;
using Microsoft.Practices.Unity;
using Chloe.Server.Config.Contracts;
using Microsoft.Owin.Security.OAuth;

namespace Chloe.Server
{
    public class ApiConfiguration
    {
        public static void Install(HttpConfiguration config, IAppBuilder app)
        {
            config.SuppressHostPrincipal();

            Chloe.Server.Services.Contracts.IIdentityService identityService = UnityConfiguration.GetContainer().Resolve<Chloe.Server.Services.Contracts.IIdentityService>();

            Chloe.Server.Config.Contracts.IConfigurationProvider configurationProvider = UnityConfiguration.GetContainer().Resolve<IConfigurationProvider>();

            app.UseOAuthAuthorizationServer(new OAuthOptions(identityService));

            app.UseJwtBearerAuthentication(new Chloe.Server.Auth.JwtOptions(configurationProvider));

            config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));

            var jSettings = new JsonSerializerSettings();
            jSettings.Formatting = Formatting.Indented;
            jSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            config.Formatters.Remove(config.Formatters.XmlFormatter);
            config.Formatters.JsonFormatter.SerializerSettings = jSettings;
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
                );
        }
    }
}