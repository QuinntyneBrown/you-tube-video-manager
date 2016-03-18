using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class CollectionItemDto
    {
        public CollectionItemDto(CollectionItem entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public CollectionItemDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
