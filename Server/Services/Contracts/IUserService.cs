using Chloe.Server.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chloe.Server.Services.Contracts
{
    public interface IUserService
    {
        RegistrationResponseDto Register(RegistrationRequestDto request);
    }
}
