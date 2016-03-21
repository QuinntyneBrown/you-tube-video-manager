using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class ProfileSettingAddOrUpdateResponseDto: ProfileSettingDto
    {
        public ProfileSettingAddOrUpdateResponseDto(ProfileSetting entity)
            :base(entity)
        {

        }
    }
}
