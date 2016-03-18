using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class FeedbackDto
    {
        public FeedbackDto(Feedback entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
            this.Description = entity.Description;
        }

        public FeedbackDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
