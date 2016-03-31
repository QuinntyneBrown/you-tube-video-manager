using System;
using System.Collections.Generic;
using Chloe.Server.Data.Contracts;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Data.Entity;
using System.Linq;
using Chloe.Server.Models;
using Chloe.Server.Exceptions;

namespace Chloe.Server.Services
{
    public class YouTubeVideoService : IYouTubeVideoService
    {
        public YouTubeVideoService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.YouTubeVideos;
            this.cache = cacheProvider.GetCache();
        }

        public YouTubeVideoAddOrUpdateResponseDto AddOrUpdate(YouTubeVideoAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new YouTubeVideo());
            entity.Name = request.Name;
            entity.YouTubeVideoId = request.YouTubeVideoId;
            entity.Description = request.Description;
            entity.Tags = new HashSet<YouTubeVideoTag>();

            foreach(var tag in request.Tags)
            {
                uow.YouTubeVideoTags.Add(new YouTubeVideoTag() { YouTubeVideo = entity, Tag = new Tag() { Name = tag.Name } });
            }

            uow.SaveChanges();
            return new YouTubeVideoAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<YouTubeVideoDto> Get()
        {
            ICollection<YouTubeVideoDto> response = new HashSet<YouTubeVideoDto>();
            var entities = repository.GetAll().Include(x => x.Tags).Include("Tags.Tag").Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new YouTubeVideoDto(entity)); }    
            return response;
        }

        public YouTubeVideoDto GetById(int id)
        {
            var entity = repository.GetAll().Include(x => x.Tags).Include("Tags.Tag").Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault();
            if (entity == null) throw new YouTubeVideoNotFoundException();
            return new YouTubeVideoDto(entity);
        }

        public YouTubeVideoDto GetByVideoId(string id)
        {
            var entity = repository.GetAll().Include(x => x.Tags).Include("Tags.Tag").Where(x => x.YouTubeVideoId == id && x.IsDeleted == false).FirstOrDefault();
            if (entity == null) throw new YouTubeVideoNotFoundException();
            return new YouTubeVideoDto(entity);
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<YouTubeVideo> repository;
        protected readonly ICache cache;
    }
}