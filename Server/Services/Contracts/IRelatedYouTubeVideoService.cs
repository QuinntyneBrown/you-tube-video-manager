using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IRelatedYouTubeVideoService
    {
        RelatedYouTubeVideoAddOrUpdateResponseDto AddOrUpdate(RelatedYouTubeVideoAddOrUpdateRequestDto request);
        ICollection<RelatedYouTubeVideoDto> Get();
        RelatedYouTubeVideoDto GetById(int id);
        dynamic Remove(int id);
    }
}
