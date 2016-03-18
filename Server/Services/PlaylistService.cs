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
    public class PlaylistService : IPlaylistService
    {
        public PlaylistService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Playlists;
            this.cache = cacheProvider.GetCache();
        }

        public PlaylistAddOrUpdateResponseDto AddOrUpdate(PlaylistAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Playlist());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new PlaylistAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<PlaylistDto> Get()
        {
            ICollection<PlaylistDto> response = new HashSet<PlaylistDto>();
            repository.GetAll().Where(x => x.IsDeleted == false)
                .ForEachAsync(x => response.Add(new PlaylistDto(x)));
            return response;
        }

        public PlaylistDto GetById(int id)
        {
            return new PlaylistDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        public PlaylistYouTubeVideoAddResponseDto AddYouTubeVideo(PlaylistYouTubeVideoAddRequestDto request)
        {
            throw new NotImplementedException();
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Playlist> repository;
        protected readonly ICache cache;
    }
}
