using Chloe.Server.Services.Contracts;

namespace Chloe.Server.Services
{
    public class CacheProvider : ICacheProvider
    {
        public ICache GetCache()
        {
            return MemoryCache.Current;
        }
    }
}