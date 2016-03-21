using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IProfileSettingService
    {
        ProfileSettingAddOrUpdateResponseDto AddOrUpdate(ProfileSettingAddOrUpdateRequestDto request);
        ICollection<ProfileSettingDto> Get();
        ProfileSettingDto GetById(int id);
        dynamic Remove(int id);
    }
}
