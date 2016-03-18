using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class CollectionDto
    {
        public CollectionDto(Collection entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public CollectionDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
