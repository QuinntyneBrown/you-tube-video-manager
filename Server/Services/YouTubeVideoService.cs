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
            repository.GetAll().Include( x => x.Tags ).Include("Tags.Tag").Where(x => x.IsDeleted == false)
                .ForEachAsync(x => response.Add(new YouTubeVideoDto(x)));
            return response;
        }

        public YouTubeVideoDto GetById(int id)
        {
            return new YouTubeVideoDto(repository.GetAll().Include(x => x.Tags).Include("Tags.Tag").Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<YouTubeVideo> repository;
        protected readonly ICache cache;
    }
}