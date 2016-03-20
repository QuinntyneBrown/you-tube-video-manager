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
    public class TechnologyService : ITechnologyService
    {
        public TechnologyService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Technologies;
            this.cache = cacheProvider.GetCache();
        }

        public TechnologyAddOrUpdateResponseDto AddOrUpdate(TechnologyAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Technology());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new TechnologyAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<TechnologyDto> Get()
        {
            ICollection<TechnologyDto> response = new HashSet<TechnologyDto>();
            repository.GetAll().Where(x => x.IsDeleted == false)
                .ForEachAsync(x => response.Add(new TechnologyDto(x)));
            return response;
        }

        public TechnologyDto GetById(int id)
        {
            return new TechnologyDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Technology> repository;
        protected readonly ICache cache;
    }
}
