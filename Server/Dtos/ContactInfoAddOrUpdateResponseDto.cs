using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class ContactInfoAddOrUpdateResponseDto: ContactInfoDto
    {
        public ContactInfoAddOrUpdateResponseDto(ContactInfo entity)
            :base(entity)
        {

        }
    }
}
