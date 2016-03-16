using Microsoft.Owin.Security.Jwt;
using Chloe.Server.Config;
using Chloe.Server.Config.Contracts;

namespace Chloe.Server.Auth
{
    public class JwtOptions : JwtBearerAuthenticationOptions
    {
        public JwtOptions(IConfigurationProvider configurationProvider)
        {
            var config = AuthConfiguration.Config;

            AllowedAudiences = new[] { config.JwtAudience };
            IssuerSecurityTokenProviders = new[] 
            {
                new SymmetricKeyIssuerSecurityTokenProvider(config.JwtIssuer, config.JwtKey)
            };
        }
    }
}