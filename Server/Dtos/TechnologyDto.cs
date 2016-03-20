using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class TechnologyDto
    {
        public TechnologyDto(Technology entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public TechnologyDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
