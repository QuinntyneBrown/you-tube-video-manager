using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Chloe.Server.Models
{
    public class YouTubeVideoTag: BaseEntity
    {
        [ForeignKey("YouTubeVideo")]
        public int? YouTubeVideoId { get; set; }
        [ForeignKey("Tag")]
        public int? TagId { get; set; }
        public YouTubeVideo YouTubeVideo { get; set; }
        public Tag Tag { get; set; }
    }
}