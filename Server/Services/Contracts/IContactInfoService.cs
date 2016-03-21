using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IContactInfoService
    {
        ContactInfoAddOrUpdateResponseDto AddOrUpdate(ContactInfoAddOrUpdateRequestDto request);
        ICollection<ContactInfoDto> Get();
        ContactInfoDto GetById(int id);
        dynamic Remove(int id);
    }
}
