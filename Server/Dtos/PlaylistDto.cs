using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class PlaylistDto
    {
        public PlaylistDto(Playlist entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public PlaylistDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
