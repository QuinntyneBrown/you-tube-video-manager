using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Chloe.Server.Models
{
    public class Playlist: BaseEntity
    {
        public Playlist()
        {
            this.Videos = new HashSet<PlaylistYouTubeVideo>();
        }

        [ForeignKey("User")]
        public int UserId { get; set; }
        public User User { get; set; }
        public ICollection<PlaylistYouTubeVideo> Videos { get; set; }

    }
}