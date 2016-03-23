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
    public class SpeakerService : ISpeakerService
    {
        public SpeakerService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Speakers;
            this.cache = cacheProvider.GetCache();
        }

        public SpeakerAddOrUpdateResponseDto AddOrUpdate(SpeakerAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Speaker());
            entity.Name = request.Name;
            entity.GitHubUsername = request.GitHubUsername;
            uow.SaveChanges();
            return new SpeakerAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<SpeakerDto> Get()
        {
            ICollection<SpeakerDto> response = new HashSet<SpeakerDto>();
            repository.GetAll().Where(x => x.IsDeleted == false)
                .ForEachAsync(x => response.Add(new SpeakerDto(x)));
            return response;
        }

        public SpeakerDto GetById(int id)
        {
            return new SpeakerDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Speaker> repository;
        protected readonly ICache cache;
    }
}
