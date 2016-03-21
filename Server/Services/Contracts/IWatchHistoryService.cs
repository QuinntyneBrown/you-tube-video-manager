using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IWatchHistoryService
    {
        WatchHistoryAddOrUpdateResponseDto AddOrUpdate(WatchHistoryAddOrUpdateRequestDto request);
        ICollection<WatchHistoryDto> Get();
        WatchHistoryDto GetById(int id);
        dynamic Remove(int id);
    }
}
