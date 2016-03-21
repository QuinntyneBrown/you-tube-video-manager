using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IAccountService
    {
        AccountAddOrUpdateResponseDto AddOrUpdate(AccountAddOrUpdateRequestDto request);
        ICollection<AccountDto> Get();
        AccountDto GetById(int id);
        dynamic Remove(int id);
    }
}
