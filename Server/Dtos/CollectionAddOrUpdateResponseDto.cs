using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class CollectionAddOrUpdateResponseDto: CollectionDto
    {
        public CollectionAddOrUpdateResponseDto(Collection entity)
            :base(entity)
        {

        }
    }
}
