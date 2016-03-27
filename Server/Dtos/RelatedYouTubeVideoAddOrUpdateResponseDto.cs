using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class RelatedYouTubeVideoAddOrUpdateResponseDto: RelatedYouTubeVideoDto
    {
        public RelatedYouTubeVideoAddOrUpdateResponseDto(RelatedYouTubeVideo entity)
            :base(entity)
        {

        }
    }
}
