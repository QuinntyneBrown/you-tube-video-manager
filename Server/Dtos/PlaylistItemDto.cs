using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class PlaylistItemDto
    {
        public PlaylistItemDto(PlaylistItem entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public PlaylistItemDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
