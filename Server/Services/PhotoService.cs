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
    public class PhotoService : IPhotoService
    {
        public PhotoService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Photos;
            this.cache = cacheProvider.GetCache();
        }

        public PhotoAddOrUpdateResponseDto AddOrUpdate(PhotoAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Photo());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new PhotoAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<PhotoDto> Get()
        {
            ICollection<PhotoDto> response = new HashSet<PhotoDto>();
            repository.GetAll().Where(x => x.IsDeleted == false)
                .ForEachAsync(x => response.Add(new PhotoDto(x)));
            return response;
        }

        public PhotoDto GetById(int id)
        {
            return new PhotoDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Photo> repository;
        protected readonly ICache cache;
    }
}
