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
    public class ProfileService : IProfileService
    {
        public ProfileService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Profiles;
            this.cache = cacheProvider.GetCache();
        }

        public ProfileAddOrUpdateResponseDto AddOrUpdate(ProfileAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Profile());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new ProfileAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<ProfileDto> Get()
        {
            ICollection<ProfileDto> response = new HashSet<ProfileDto>();
            repository.GetAll().Where(x => x.IsDeleted == false)
                .ForEachAsync(x => response.Add(new ProfileDto(x)));
            return response;
        }

        public ProfileDto GetById(int id)
        {
            return new ProfileDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Profile> repository;
        protected readonly ICache cache;
    }
}
