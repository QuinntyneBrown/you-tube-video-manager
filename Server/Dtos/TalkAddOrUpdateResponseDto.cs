using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class TalkAddOrUpdateResponseDto: TalkDto
    {
        public TalkAddOrUpdateResponseDto(Talk entity)
            :base(entity)
        {

        }
    }
}
