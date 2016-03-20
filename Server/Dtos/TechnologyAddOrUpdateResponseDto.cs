using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class TechnologyAddOrUpdateResponseDto: TechnologyDto
    {
        public TechnologyAddOrUpdateResponseDto(Technology entity)
            :base(entity)
        {

        }
    }
}
