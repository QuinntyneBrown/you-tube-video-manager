using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class TalkDto
    {
        public TalkDto(Talk entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public TalkDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
