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
    public class AccountService : IAccountService
    {
        public AccountService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Accounts;
            this.cache = cacheProvider.GetCache();
        }

        public AccountAddOrUpdateResponseDto AddOrUpdate(AccountAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Account());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new AccountAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<AccountDto> Get()
        {
            ICollection<AccountDto> response = new HashSet<AccountDto>();
            repository.GetAll().Where(x => x.IsDeleted == false)
                .ForEachAsync(x => response.Add(new AccountDto(x)));
            return response;
        }

        public AccountDto GetById(int id)
        {
            return new AccountDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Account> repository;
        protected readonly ICache cache;
    }
}
