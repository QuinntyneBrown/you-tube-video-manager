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
    public class CollectionService : ICollectionService
    {
        public CollectionService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Collections;
            this.cache = cacheProvider.GetCache();
        }

        public CollectionAddOrUpdateResponseDto AddOrUpdate(CollectionAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Collection());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new CollectionAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<CollectionDto> Get()
        {
            ICollection<CollectionDto> response = new HashSet<CollectionDto>();
            repository.GetAll().Where(x => x.IsDeleted == false)
                .ForEachAsync(x => response.Add(new CollectionDto(x)));
            return response;
        }

        public CollectionDto GetById(int id)
        {
            return new CollectionDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Collection> repository;
        protected readonly ICache cache;
    }
}
