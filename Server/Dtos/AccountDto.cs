using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class AccountDto
    {
        public AccountDto(Account entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public AccountDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
