using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Web.Http;

namespace Chloe.Server.Controllers
{
    [RoutePrefix("api/user")]
    public class UserController : ApiController
    {
        public UserController(IUserService service)
        {
            this.service = service;
        }

        [HttpPost]
        [Route("register")]
        [AllowAnonymous]
        public IHttpActionResult Register(RegistrationRequestDto request)
        {
            return Ok(this.service.Register(request));
        }
        
        [HttpGet]
        [Route("current")]
        [Authorize]
        public IHttpActionResult Current()
        {
            return Ok(this.service.GetUser(User.Identity.Name));
        }

        protected readonly IUserService service;
    }
}
