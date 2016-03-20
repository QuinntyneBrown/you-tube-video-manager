using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface ITechnologyService
    {
        TechnologyAddOrUpdateResponseDto AddOrUpdate(TechnologyAddOrUpdateRequestDto request);
        ICollection<TechnologyDto> Get();
        TechnologyDto GetById(int id);
        dynamic Remove(int id);
    }
}
