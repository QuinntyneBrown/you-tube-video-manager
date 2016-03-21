using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class WatchHistoryAddOrUpdateResponseDto: WatchHistoryDto
    {
        public WatchHistoryAddOrUpdateResponseDto(WatchHistory entity)
            :base(entity)
        {

        }
    }
}
