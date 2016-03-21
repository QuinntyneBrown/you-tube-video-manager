using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class ProfileSettingDto
    {
        public ProfileSettingDto(ProfileSetting entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public ProfileSettingDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
