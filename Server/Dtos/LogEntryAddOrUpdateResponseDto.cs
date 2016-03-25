using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class LogEntryAddOrUpdateResponseDto: LogEntryDto
    {
        public LogEntryAddOrUpdateResponseDto(LogEntry entity)
            :base(entity)
        {

        }
    }
}
