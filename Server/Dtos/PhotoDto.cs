using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class PhotoDto
    {
        public PhotoDto(Photo entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public PhotoDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
