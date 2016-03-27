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
    public class RelatedYouTubeVideoService : IRelatedYouTubeVideoService
    {
        public RelatedYouTubeVideoService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.RelatedYouTubeVideos;
            this.cache = cacheProvider.GetCache();
        }

        public RelatedYouTubeVideoAddOrUpdateResponseDto AddOrUpdate(RelatedYouTubeVideoAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new RelatedYouTubeVideo());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new RelatedYouTubeVideoAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<RelatedYouTubeVideoDto> Get()
        {
            ICollection<RelatedYouTubeVideoDto> response = new HashSet<RelatedYouTubeVideoDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new RelatedYouTubeVideoDto(entity)); }    
            return response;
        }


        public RelatedYouTubeVideoDto GetById(int id)
        {
            return new RelatedYouTubeVideoDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<RelatedYouTubeVideo> repository;
        protected readonly ICache cache;
    }
}
