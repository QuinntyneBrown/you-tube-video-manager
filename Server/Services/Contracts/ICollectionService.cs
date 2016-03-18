using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface ICollectionService
    {
        CollectionAddOrUpdateResponseDto AddOrUpdate(CollectionAddOrUpdateRequestDto request);
        ICollection<CollectionDto> Get();
        CollectionDto GetById(int id);
        dynamic Remove(int id);
    }
}
