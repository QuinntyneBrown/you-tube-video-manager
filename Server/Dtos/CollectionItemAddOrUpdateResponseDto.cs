using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class CollectionItemAddOrUpdateResponseDto: CollectionItemDto
    {
        public CollectionItemAddOrUpdateResponseDto(CollectionItem entity)
            :base(entity)
        {

        }
    }
}
