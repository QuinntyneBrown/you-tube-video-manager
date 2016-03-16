using Microsoft.Owin.Security.OAuth;
using Chloe.Server.Services.Contracts;
using System.Security.Claims;
using System.Threading.Tasks;
using System;

namespace Chloe.Server.Auth
{
    public class OAuthProvider : OAuthAuthorizationServerProvider
    {
        public OAuthProvider(IIdentityService identityService)
        {
            this.identityService = identityService;
        }

        public override Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            var identity = new ClaimsIdentity("chloe");
            var username = context.OwinContext.Get<string>("chloe:username");
            foreach (var claim in this.identityService.GetClaimsForUser(username))
            {
                identity.AddClaim(claim);
            }
            context.Validated(identity);
            return Task.FromResult(0);
        }

        public override Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            try
            {
                var username = context.Parameters["username"];
                var password = context.Parameters["password"];

                if (identityService.AuthenticateUser(username, password))
                {
                    context.OwinContext.Set("chloe:username", username);
                    context.Validated();
                }
                else
                {
                    context.SetError("Invalid credentials");
                    context.Rejected();
                }
            }
            catch (Exception exception)
            {
                context.SetError(exception.Message);
                context.Rejected();
            }
            return Task.FromResult(0);
        }

        protected IIdentityService identityService { get; set; }
    }
}