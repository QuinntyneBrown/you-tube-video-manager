using Chloe.Server.Config;
using Chloe.Server.Config.Contracts;
using Chloe.Server.Data;
using Chloe.Server.Data.Contracts;
using Chloe.Server.Services;
using Chloe.Server.Services.Contracts;
using Chloe.Server.Utils;
using Chloe.Server.Utils.Contracts;
using Microsoft.Practices.Unity;

namespace Chloe.Server
{
    public class UnityConfiguration
    {
        public static IUnityContainer GetContainer(bool useMock = false)
        {
            var container = new UnityContainer();
            container.RegisterType<IChloeUow, ChloeUow>();
            container.RegisterType<ICollectionService, CollectionService>();
            container.RegisterType<IDbContext, ChloeContext>();
            container.RegisterType<IRepositoryProvider, RepositoryProvider>();
            container.RegisterType<IEncryptionService, EncryptionService>();
            container.RegisterType<IIdentityService, IdentityService>();
            container.RegisterType<ICacheProvider, CacheProvider>();
            container.RegisterType<IFeedbackService, FeedbackService>();
            container.RegisterType<IConfigurationProvider,ConfigurationProvider>();
            container.RegisterType<ITagService, TagService>();
            container.RegisterType<IUserService, UserService>();
            container.RegisterType<IYouTubeVideoService, YouTubeVideoService>();
            container.RegisterType<IPlaylistService, PlaylistService>();
            container.RegisterType<ISpeakerService, SpeakerService>();
            container.RegisterType<ITalkService, TalkService>();
            container.RegisterType<ITechnologyService, TechnologyService>();
            container.RegisterType<IProfileService, ProfileService>();
            container.RegisterType<IProfileSettingService, IProfileSettingService>();
            container.RegisterType<IContactInfoService, ContactInfoService>();
            container.RegisterType<IAccountService, AccountService>();
            container.RegisterType<IWatchHistoryService, WatchHistoryService>();
            container.RegisterType<IPhotoService, PhotoService>();
            container.RegisterType<ILogger, Logger>();
            return container;
        }
    }
}