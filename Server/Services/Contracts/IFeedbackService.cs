using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IFeedbackService
    {
        FeedbackAddOrUpdateResponseDto AddOrUpdate(FeedbackAddOrUpdateRequestDto request, string username);
        ICollection<FeedbackDto> Get();
        FeedbackDto GetById(int id);
        dynamic Remove(int id);
    }
}
