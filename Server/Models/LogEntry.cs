using System.Collections.Generic;

namespace Chloe.Server.Models
{
    public class LogEntry: BaseEntity
    {
        public LogEntry()
        {

        }

        public string Message { get; set; }
        public ICollection<LogEntryCategory> Categories { get; set; }
    }
}