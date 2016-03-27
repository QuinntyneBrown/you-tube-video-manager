using System.Collections.Generic;

namespace Chloe.Server.Models
{
    public class YouTubeVideo: BaseEntity
    {
        public YouTubeVideo()
        {
            this.Tags = new HashSet<YouTubeVideoTag>();
            this.RelatedYouTubeVideos = new HashSet<RelatedYouTubeVideo>();
        }

        public string YouTubeVideoId { get; set; }
        public string Description { get; set; }
        public ICollection<YouTubeVideoTag> Tags { get; set; }
        public ICollection<RelatedYouTubeVideo> RelatedYouTubeVideos { get; set; }

    }
}