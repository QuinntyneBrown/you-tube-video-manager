using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Web.Http;

namespace Chloe.Server.Controllers
{
    [Authorize]
    [RoutePrefix("api/feedback")]
    public class FeedbackController : ApiController
    {
        public FeedbackController(IFeedbackService service)
        {
            this.service = service;
        }

        [Route("add")]
        [HttpPost]
        public IHttpActionResult Add(FeedbackAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto, User.Identity.Name)); }

        [Route("update")]
        [HttpPut]
        public IHttpActionResult Update(FeedbackAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto, User.Identity.Name)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        public IHttpActionResult Get(FeedbackAddOrUpdateRequestDto dto) {

            return Ok(this.service.Get());
        }

		[Route("getById")]
        [HttpGet]
        public IHttpActionResult GetById(int id) { return Ok(this.service.GetById(id)); }
        
        [Route("remove")]
        [HttpDelete]
        public IHttpActionResult Remove(int id) { return Ok(this.service.Remove(id)); }

        protected readonly IFeedbackService service;

    }
}
