using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IPlaylistService
    {
        PlaylistAddOrUpdateResponseDto AddOrUpdate(PlaylistAddOrUpdateRequestDto request);
        ICollection<PlaylistDto> Get();
        PlaylistDto GetById(int id);
        PlaylistYouTubeVideoAddResponseDto AddYouTubeVideo(PlaylistYouTubeVideoAddRequestDto request);
        dynamic Remove(int id);
    }
}
