using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class PhotoAddOrUpdateResponseDto: PhotoDto
    {
        public PhotoAddOrUpdateResponseDto(Photo entity)
            :base(entity)
        {

        }
    }
}
