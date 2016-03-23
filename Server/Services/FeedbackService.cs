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
    public class FeedbackService : IFeedbackService
    {
        public FeedbackService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Feedbacks;
            this.cache = cacheProvider.GetCache();
        }

        public FeedbackAddOrUpdateResponseDto AddOrUpdate(FeedbackAddOrUpdateRequestDto request, string username)
        {
            var entity = repository.GetAll()
                .Include(x=>x.User)
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();

            var user = uow.Users.GetAll().Where(x => x.Username == username).Single();

            if (entity == null) {
                repository.Add(entity = new Feedback());
            }

            entity.Name = request.Name;
            entity.UserId = user.Id;
            entity.Description = request.Description;

            uow.SaveChanges();
            return new FeedbackAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<FeedbackDto> Get()
        {
            throw new NotImplementedException();
            ICollection<FeedbackDto> response = new HashSet<FeedbackDto>();
            repository.GetAll().Where(x => x.IsDeleted == false)
                .ForEachAsync(x => response.Add(new FeedbackDto(x)));
            return response;
        }

        public FeedbackDto GetById(int id)
        {
            return new FeedbackDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Feedback> repository;
        protected readonly ICache cache;
    }
}
