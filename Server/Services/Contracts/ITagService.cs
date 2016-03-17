using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface ITagService
    {
        TagAddOrUpdateResponseDto AddOrUpdate(TagAddOrUpdateRequestDto request);
        ICollection<TagDto> Get();
        TagDto GetById(int id);
        dynamic Remove(int id);
    }
}
