using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class PlaylistAddOrUpdateResponseDto: PlaylistDto
    {
        public PlaylistAddOrUpdateResponseDto(Playlist entity)
            :base(entity)
        {

        }
    }
}
