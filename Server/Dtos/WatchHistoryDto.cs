using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class WatchHistoryDto
    {
        public WatchHistoryDto(WatchHistory entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public WatchHistoryDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
