using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class ContactInfoDto
    {
        public ContactInfoDto(ContactInfo entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public ContactInfoDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
