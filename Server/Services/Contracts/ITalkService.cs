using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface ITalkService
    {
        TalkAddOrUpdateResponseDto AddOrUpdate(TalkAddOrUpdateRequestDto request);
        ICollection<TalkDto> Get();
        TalkDto GetById(int id);
        dynamic Remove(int id);
    }
}
