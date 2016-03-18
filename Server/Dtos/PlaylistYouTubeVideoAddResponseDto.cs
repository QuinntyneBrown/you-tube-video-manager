using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class PlaylistYouTubeVideoAddResponseDto
    {
        public PlaylistYouTubeVideoAddResponseDto(PlaylistYouTubeVideo entity)
        {
            this.PlaylistId = entity.PlaylistId;
            this.YouTubeVideoId = entity.YouTubeVideoId;
            this.YouTubeVideo = new YouTubeVideoDto(entity.YouTubeVideo);
        }

        public int YouTubeVideoId { get; set; }
        public int PlaylistId { get; set; }
        public YouTubeVideoDto YouTubeVideo { get; set; }
    }
}