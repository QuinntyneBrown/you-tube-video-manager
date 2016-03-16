using System;
using System.Runtime.Caching;

namespace Chloe.Server.Services
{
    public class MemoryCache : Cache
    {
        private static volatile MemoryCache current = null;
        ObjectCache cache = System.Runtime.Caching.MemoryCache.Default;

        public static MemoryCache Current
        {
            get
            {
                if (current == null)
                    current = new MemoryCache();
                return current;
            }
        }

        public override T Get<T>(string key)
        {
            return (T)Get(key);
        }

        public override object Get(string key)
        {
            return cache[key];
        }

        public override void Add(object objectToCache, string key)
        {
            if (objectToCache == null)
            {
                cache.Remove(key);
            }
            else
            {
                cache[key] = objectToCache;
            }
        }

        public override void Add<T>(object objectToCache, string key)
        {
            if (objectToCache == null)
            {
                cache.Remove(key);
            }
            else
            {
                cache[key] = objectToCache;
            }
        }

        public override void Add<T>(object objectToCache, string key, double cacheDuration)
        {
            throw new NotImplementedException();
        }

        public override void Remove(string key)
        {
            cache.Remove(key);
        }

        public override void ClearAll()
        {
            throw new NotImplementedException();
        }

        public override bool Exists(string key)
        {
            throw new NotImplementedException();
        }
    }
}