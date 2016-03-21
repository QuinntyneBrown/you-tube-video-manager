using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class ProfileDto
    {
        public ProfileDto(Profile entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public ProfileDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
