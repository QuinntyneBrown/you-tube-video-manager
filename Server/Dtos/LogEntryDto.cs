using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class LogEntryDto
    {
        public LogEntryDto(LogEntry entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
            this.Message = entity.Message;
        }

        public LogEntryDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Message { get; set; }
    }
}
