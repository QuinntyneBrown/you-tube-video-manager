using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class UserDto
    {
        public UserDto(User entity)
        {
            this.Id = entity.Id;
            this.Email = entity.Email;
            this.Firstname = entity.Firstname;
            this.Lastname = entity.Lastname;
        }
        public int Id { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
    }
}