using Chloe.Server.Models;
using System.Collections;
using System.Collections.Generic;

namespace Chloe.Server.Dtos
{
    public class YouTubeVideoDto
    {
        public YouTubeVideoDto(YouTubeVideo entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
            this.YouTubeVideoId = entity.YouTubeVideoId;
            this.Description = entity.Description;
            this.Tags = new HashSet<TagDto>();

            foreach(var tag in entity.Tags)
            {
                this.Tags.Add(new TagDto(tag.Tag));
            }
        }

        public YouTubeVideoDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string YouTubeVideoId { get; set; }
        public ICollection<TagDto> Tags { get; set; }
    }
}