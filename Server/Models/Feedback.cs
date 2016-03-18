using System.ComponentModel.DataAnnotations.Schema;

namespace Chloe.Server.Models
{
    public class Feedback: BaseEntity
    {
        public Feedback()
        {

        }

        public string Description { get; set; }
        [ForeignKey("User")]
        public int? UserId { get; set; }
        public User User { get; set; }
    }
}