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
    public class ProfileSettingService : IProfileSettingService
    {
        public ProfileSettingService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.ProfileSettings;
            this.cache = cacheProvider.GetCache();
        }

        public ProfileSettingAddOrUpdateResponseDto AddOrUpdate(ProfileSettingAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new ProfileSetting());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new ProfileSettingAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<ProfileSettingDto> Get()
        {
            ICollection<ProfileSettingDto> response = new HashSet<ProfileSettingDto>();
            repository.GetAll().Where(x => x.IsDeleted == false)
                .ForEachAsync(x => response.Add(new ProfileSettingDto(x)));
            return response;
        }

        public ProfileSettingDto GetById(int id)
        {
            return new ProfileSettingDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<ProfileSetting> repository;
        protected readonly ICache cache;
    }
}
