using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Models
{
    public class YouTubeVideo: BaseEntity
    {
        public YouTubeVideo()
        {
            this.Tags = new HashSet<YouTubeVideoTag>();
        }

        public string YouTubeVideoId { get; set; }
        public string Description { get; set; }
        public ICollection<YouTubeVideoTag> Tags { get; set; }

    }
}