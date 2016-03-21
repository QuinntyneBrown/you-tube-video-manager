using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class ProfileAddOrUpdateResponseDto: ProfileDto
    {
        public ProfileAddOrUpdateResponseDto(Profile entity)
            :base(entity)
        {

        }
    }
}
