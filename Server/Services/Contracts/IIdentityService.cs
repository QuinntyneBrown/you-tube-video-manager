using System.Collections.Generic;
using System.Security.Claims;
using Chloe.Server.Dtos;

namespace Chloe.Server.Services.Contracts
{
    public interface IIdentityService
    {

        TokenDto TryToRegister(RegistrationRequestDto registrationRequestDto);

        bool AuthenticateUser(string username, string password);

        ICollection<Claim> GetClaimsForUser(string username);
    }
}
