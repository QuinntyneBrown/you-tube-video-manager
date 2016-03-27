using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class RelatedYouTubeVideoDto
    {
        public RelatedYouTubeVideoDto(RelatedYouTubeVideo entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
            this.YouTubeVideoId = entity.YouTubeVideoId;
        }

        public RelatedYouTubeVideoDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int YouTubeVideoId { get; set; }
    }
}
