using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IYouTubeVideoService
    {
        YouTubeVideoAddOrUpdateResponseDto AddOrUpdate(YouTubeVideoAddOrUpdateRequestDto request);
        ICollection<YouTubeVideoDto> Get();
        YouTubeVideoDto GetById(int id);
        dynamic Remove(int id);
    }
}
