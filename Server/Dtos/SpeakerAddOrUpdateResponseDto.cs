using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class SpeakerAddOrUpdateResponseDto: SpeakerDto
    {
        public SpeakerAddOrUpdateResponseDto(Speaker entity)
            :base(entity)
        {

        }
    }
}
