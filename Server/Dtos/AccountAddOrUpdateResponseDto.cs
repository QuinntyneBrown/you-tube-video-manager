using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class AccountAddOrUpdateResponseDto: AccountDto
    {
        public AccountAddOrUpdateResponseDto(Account entity)
            :base(entity)
        {

        }
    }
}
