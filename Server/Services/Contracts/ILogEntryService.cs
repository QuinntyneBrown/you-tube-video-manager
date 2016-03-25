using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface ILogEntryService
    {
        LogEntryAddOrUpdateResponseDto AddOrUpdate(LogEntryAddOrUpdateRequestDto request);
        ICollection<LogEntryDto> Get();
        LogEntryDto GetById(int id);
        dynamic Remove(int id);
    }
}
