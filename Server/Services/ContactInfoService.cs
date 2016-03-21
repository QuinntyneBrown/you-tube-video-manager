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
    public class ContactInfoService : IContactInfoService
    {
        public ContactInfoService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.ContactInfos;
            this.cache = cacheProvider.GetCache();
        }

        public ContactInfoAddOrUpdateResponseDto AddOrUpdate(ContactInfoAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new ContactInfo());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new ContactInfoAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<ContactInfoDto> Get()
        {
            ICollection<ContactInfoDto> response = new HashSet<ContactInfoDto>();
            repository.GetAll().Where(x => x.IsDeleted == false)
                .ForEachAsync(x => response.Add(new ContactInfoDto(x)));
            return response;
        }

        public ContactInfoDto GetById(int id)
        {
            return new ContactInfoDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<ContactInfo> repository;
        protected readonly ICache cache;
    }
}
