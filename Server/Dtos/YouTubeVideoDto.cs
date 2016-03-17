using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class YouTubeVideoDto
    {
        public YouTubeVideoDto(YouTubeVideo entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
            this.YouTubeVideoId = entity.YouTubeVideoId;
        }

        public YouTubeVideoDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string YouTubeVideoId { get; set; }
    }
}