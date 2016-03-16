using Chloe.Server.Config;
using Microsoft.Owin;
using Microsoft.Owin.Security.OAuth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Auth
{
    public class OAuthOptions : OAuthAuthorizationServerOptions
    {
        public OAuthOptions(Chloe.Server.Services.Contracts.IIdentityService identityService)
        {
            var config = AuthConfiguration.Config;

            TokenEndpointPath = new PathString(config.TokenPath);
            AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(config.ExpirationMinutes);
            AccessTokenFormat = new JwtWriterFormat(this);
            Provider = new OAuthProvider(identityService);
            AllowInsecureHttp = true;
        }

    }
}