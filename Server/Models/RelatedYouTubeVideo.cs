using System.ComponentModel.DataAnnotations.Schema;

namespace Chloe.Server.Models
{
    public class RelatedYouTubeVideo: BaseEntity
    {
        public RelatedYouTubeVideo()
        {

        }

        [ForeignKey("YouTubeVideo")]
        public int YouTubeVideoId { get; set; }
        public YouTubeVideo YouTubeVideo { get; set; }
    }
}