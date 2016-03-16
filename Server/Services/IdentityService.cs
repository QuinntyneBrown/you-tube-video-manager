using Chloe.Server.Data.Contracts;
using Chloe.Server.Services.Contracts;
using System;
using System.Data.Entity;
using System.Data;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Chloe.Server.Models;

namespace Chloe.Server.Services
{
    public class IdentityService : IIdentityService
    {
        public IdentityService(IChloeUow uow, IEncryptionService encryptionService, ICacheProvider cacheProvider)
        {
            this.cache = cacheProvider.GetCache();
            this.encryptionService = encryptionService;
            this.uow = uow;
        }
        
        public Dtos.TokenDto TryToRegister(Dtos.RegistrationRequestDto registrationRequestDto)
        {
            throw new NotImplementedException();
        }

        public bool AuthenticateUser(string username, string password)
        {
            if (uow.Users.GetAll().FirstOrDefault(x => x.Username.ToLower() == username.ToLower() && !x.IsDeleted) != null)
            {
                var transformedPassword = encryptionService.TransformPassword(password);
                return ValidateUser(username, transformedPassword);
            }
            return false;
        }

        private bool ValidateUser(string usermame, string password)
        {
            return this.uow.Users.GetAll().Where(x => x.Username == usermame && x.Password == password).Count() > 0;
        }
        public ICollection<System.Security.Claims.Claim> GetClaimsForUser(string username)
        {
            var claims = new List<System.Security.Claims.Claim>();

            var user = cache.FromCacheOrService<User>(() => uow.Users.GetAll()
                .Include(x => x.Roles)
                .Single(x => x.Username == username), string.Format("User: {0}", username));

            claims.Add(new System.Security.Claims.Claim("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name", username));

            foreach (var role in user.Roles.Select(x => x.Name))
            {
                claims.Add(new System.Security.Claims.Claim("http://schemas.microsoft.com/ws/2008/06/identity/claims/role", role));
            }

            return claims;
        }
        
        protected readonly IChloeUow uow;
        protected readonly ICache cache;
        protected readonly IEncryptionService encryptionService;
    }
}