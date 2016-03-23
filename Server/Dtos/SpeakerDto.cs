using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class SpeakerDto
    {
        public SpeakerDto(Speaker entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
            this.GitHubUsername = entity.GitHubUsername;
        }

        public SpeakerDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string GitHubUsername { get; set; }
    }
}
