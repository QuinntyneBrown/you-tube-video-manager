using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class FeedbackAddOrUpdateResponseDto: FeedbackDto
    {
        public FeedbackAddOrUpdateResponseDto(Feedback entity)
            :base(entity)
        {

        }
    }
}
