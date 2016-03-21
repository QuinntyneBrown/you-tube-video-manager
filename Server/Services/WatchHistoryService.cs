using System;
using System.Collections.Generic;
using Chloe.Server.Data.Contracts;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Data.Entity;
using System.Linq;
using Chloe.Server.Models;

namespace Chloe.Server.Services
{
    public class WatchHistoryService : IWatchHistoryService
    {
        public WatchHistoryService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.WatchHistories;
            this.cache = cacheProvider.GetCache();
        }

        public WatchHistoryAddOrUpdateResponseDto AddOrUpdate(WatchHistoryAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new WatchHistory());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new WatchHistoryAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<WatchHistoryDto> Get()
        {
            ICollection<WatchHistoryDto> response = new HashSet<WatchHistoryDto>();
            repository.GetAll().Where(x => x.IsDeleted == false)
                .ForEachAsync(x => response.Add(new WatchHistoryDto(x)));
            return response;
        }

        public WatchHistoryDto GetById(int id)
        {
            return new WatchHistoryDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<WatchHistory> repository;
        protected readonly ICache cache;
    }
}
