using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class PlaylistItemAddOrUpdateResponseDto: PlaylistItemDto
    {
        public PlaylistItemAddOrUpdateResponseDto(PlaylistItem entity)
            :base(entity)
        {

        }
    }
}
