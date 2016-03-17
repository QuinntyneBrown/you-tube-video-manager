using System.ComponentModel.DataAnnotations.Schema;

namespace Chloe.Server.Models
{
    public class YouTubeVideoTag: BaseEntity
    {
        public YouTubeVideoTag()
        {

        }

        [ForeignKey("Tag")]
        public int TagId { get; set; }
        [ForeignKey("YouTubeVideo")]
        public int YouTubeVideoId { get; set; }
        public YouTubeVideo YouTubeVideo { get; set; }
        public Tag Tag { get; set; }
    }
}