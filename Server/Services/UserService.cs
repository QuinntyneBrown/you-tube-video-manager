using Chloe.Server.Data.Contracts;
using Chloe.Server.Dtos;
using Chloe.Server.Models;
using Chloe.Server.Services.Contracts;
using System.Linq;

namespace Chloe.Server.Services
{
    public class UserService: IUserService
    {
        public UserService(IChloeUow uow, IEncryptionService encryptionService)
        {
            this.uow = uow;
            this.encryptionService = encryptionService;
        }

        public RegistrationResponseDto Register (RegistrationRequestDto request)
        {
            if (uow.Users.GetAll().Where(x => x.Username == request.EmailAddress).FirstOrDefault() == null)
            {
                User user = new User()
                {
                    Firstname = request.Firstname,
                    Lastname = request.Lastname,
                    Email = request.EmailAddress,
                    Username = request.EmailAddress,
                    Password = encryptionService.TransformPassword(request.Password)
                };
                uow.Users.Add(user);
                uow.SaveChanges();
            }

            return new RegistrationResponseDto();
        }

        protected readonly IChloeUow uow;
        protected readonly IEncryptionService encryptionService;

    }
}