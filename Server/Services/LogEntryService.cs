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
    public class LogEntryService : ILogEntryService
    {
        public LogEntryService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.LogEntries;
            this.cache = cacheProvider.GetCache();
        }

        public LogEntryAddOrUpdateResponseDto AddOrUpdate(LogEntryAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new LogEntry());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new LogEntryAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<LogEntryDto> Get()
        {
            ICollection<LogEntryDto> response = new HashSet<LogEntryDto>();
            repository.GetAll().Where(x => x.IsDeleted == false)
                .ForEachAsync(x => response.Add(new LogEntryDto(x)));
            return response;
        }

        public LogEntryDto GetById(int id)
        {
            return new LogEntryDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<LogEntry> repository;
        protected readonly ICache cache;
    }
}
