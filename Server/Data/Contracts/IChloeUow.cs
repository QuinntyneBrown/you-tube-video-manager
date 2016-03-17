using Chloe.Server.Models;

namespace Chloe.Server.Data.Contracts
{
    public interface IChloeUow
    {
        IRepository<User> Users { get; }
        IRepository<Tag> Tags { get; }
        IRepository<YouTubeVideo> YouTubeVideos { get; }
        void SaveChanges();
    }
}
