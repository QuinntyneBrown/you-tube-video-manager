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
    public class TalkService : ITalkService
    {
        public TalkService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Talks;
            this.cache = cacheProvider.GetCache();
        }

        public TalkAddOrUpdateResponseDto AddOrUpdate(TalkAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Talk());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new TalkAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<TalkDto> Get()
        {
            ICollection<TalkDto> response = new HashSet<TalkDto>();
            repository.GetAll().Where(x => x.IsDeleted == false)
                .ForEachAsync(x => response.Add(new TalkDto(x)));
            return response;
        }

        public TalkDto GetById(int id)
        {
            return new TalkDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Talk> repository;
        protected readonly ICache cache;
    }
}
