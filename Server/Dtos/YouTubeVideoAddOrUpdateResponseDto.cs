using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class YouTubeVideoAddOrUpdateResponseDto: YouTubeVideoDto
    {
        public YouTubeVideoAddOrUpdateResponseDto(YouTubeVideo entity)
            :base(entity)
        {

        }
    }
}