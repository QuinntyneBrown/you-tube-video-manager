using Chloe.Server.Data.Contracts;
using Chloe.Server.Models;
using System;

namespace Chloe.Server.Data
{
    public class ChloeUow : IChloeUow
    {
        protected IDbContext dbContext;

        protected IRepositoryProvider RepositoryProvider { get; set; }

        public ChloeUow(IDbContext dbContext = null)
        {
            this.dbContext = dbContext;
            ConfigureDbContext(this.dbContext);
            var repositoryProvider = new RepositoryProvider(new RepositoryFactories());
            repositoryProvider.dbContext = this.dbContext;
            RepositoryProvider = repositoryProvider;
        }

        public ChloeUow(IRepositoryProvider repositoryProvider, IDbContext dbContext = null)
        {
            this.dbContext = dbContext;
            ConfigureDbContext(this.dbContext);
            repositoryProvider.dbContext = this.dbContext;
            RepositoryProvider = repositoryProvider;
        }

        public IRepository<User> Users { get { return GetStandardRepo<User>(); } }
        public IRepository<Role> Roles { get { return GetStandardRepo<Role>(); } }
        public IRepository<Tag> Tags { get { return GetStandardRepo<Tag>(); } }
        public IRepository<YouTubeVideo> YouTubeVideos { get { return GetStandardRepo<YouTubeVideo>(); } }
        public IRepository<YouTubeVideoTag> YouTubeVideoTags { get { return GetStandardRepo<YouTubeVideoTag>(); } }
        public IRepository<Playlist> Playlists { get { return GetStandardRepo<Playlist>(); } }
        public IRepository<Collection> Collections { get { return GetStandardRepo<Collection>(); } }
        public IRepository<Feedback> Feedbacks { get { return GetStandardRepo<Feedback>(); } }
        public IRepository<Speaker> Speakers { get { return GetStandardRepo<Speaker>(); } }
        public IRepository<Talk> Talks { get { return GetStandardRepo<Talk>(); } }
        public IRepository<Technology> Technologies { get { return GetStandardRepo<Technology>(); } }
        public IRepository<ProfileSetting> ProfileSettings { get { return GetStandardRepo<ProfileSetting>(); } }
        public IRepository<Account> Accounts { get { return GetStandardRepo<Account>(); } }
        public IRepository<ContactInfo> ContactInfos { get { return GetStandardRepo<ContactInfo>(); } }
        public IRepository<Profile> Profiles { get { return GetStandardRepo<Profile>(); } }
        public IRepository<WatchHistory> WatchHistories { get { return GetStandardRepo<WatchHistory>(); } }
        public IRepository<Photo> Photos { get { return GetStandardRepo<Photo>(); } }

        protected void ConfigureDbContext(IDbContext dbContext)
        {
            dbContext.Configuration.ProxyCreationEnabled = false;
            dbContext.Configuration.LazyLoadingEnabled = false;
            dbContext.Configuration.ValidateOnSaveEnabled = false;
        }
        
        public void SaveChanges()
        {
            this.dbContext.SaveChanges();
        }

        protected IRepository<T> GetStandardRepo<T>() where T : class
        {
            return RepositoryProvider.GetRepositoryForEntityType<T>();
        }

        protected T GetRepo<T>() where T : class
        {
            return RepositoryProvider.GetRepository<T>();
        }

        #region IDisposable

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (this.dbContext != null)
                {
                    this.dbContext.Dispose();
                }
            }
        }

        #endregion
        
        public void Add<T>(T entity)
        {
            throw new NotImplementedException();
        }

        public void Update<T>(T entity)
        {
            throw new NotImplementedException();
        }
    }
}
