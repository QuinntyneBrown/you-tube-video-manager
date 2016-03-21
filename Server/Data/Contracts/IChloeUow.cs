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
        IRepository<Speaker> Speakers { get; }
        IRepository<Talk> Talks { get; }
        IRepository<Technology> Technologies { get; }
        IRepository<Profile> Profiles { get; }
        IRepository<Account> Accounts { get; }
        IRepository<ProfileSetting> ProfileSettings { get; }
        IRepository<ContactInfo> ContactInfos { get; }
        IRepository<WatchHistory> WatchHistories { get; }
        void SaveChanges();
    }
}
