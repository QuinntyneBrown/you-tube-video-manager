using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IProfileService
    {
        ProfileAddOrUpdateResponseDto AddOrUpdate(ProfileAddOrUpdateRequestDto request);
        ICollection<ProfileDto> Get();
        ProfileDto GetById(int id);
        dynamic Remove(int id);
    }
}
