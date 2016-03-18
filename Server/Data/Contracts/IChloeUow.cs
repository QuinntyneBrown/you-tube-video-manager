using Chloe.Server.Models;

namespace Chloe.Server.Data.Contracts
{
    public interface IChloeUow
    {
        IRepository<User> Users { get; }
        IRepository<YouTubeVideoTag> YouTubeVideoTags { get; }
        IRepository<Tag> Tags { get; }
        IRepository<YouTubeVideo> YouTubeVideos { get; }
        IRepository<Playlist> Playlists { get; }
        IRepository<Collection> Collections { get; }
        IRepository<Feedback> Feedbacks { get; }
        void SaveChanges();
    }
}
