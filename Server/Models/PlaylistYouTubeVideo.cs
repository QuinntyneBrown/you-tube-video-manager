using System.ComponentModel.DataAnnotations.Schema;

namespace Chloe.Server.Models
{
    public class PlaylistYouTubeVideo: BaseEntity
    {
        public PlaylistYouTubeVideo()
        {

        }
        
        [ForeignKey("Playlist")]
        public int PlaylistId { get; set; }
        public Playlist Playlist { get; set; }

        [ForeignKey("YouTubeVideo")]
        public int YouTubeVideoId { get; set; }
        public YouTubeVideo YouTubeVideo { get; set; }
    }
}