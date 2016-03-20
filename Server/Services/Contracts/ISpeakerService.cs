using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface ISpeakerService
    {
        SpeakerAddOrUpdateResponseDto AddOrUpdate(SpeakerAddOrUpdateRequestDto request);
        ICollection<SpeakerDto> Get();
        SpeakerDto GetById(int id);
        dynamic Remove(int id);
    }
}
