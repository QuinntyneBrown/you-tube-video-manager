using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Web.Http;

namespace Chloe.Server.Controllers
{
    [Authorize]
    [RoutePrefix("api/talk")]
    public class TalkController : ApiController
    {
        public TalkController(ITalkService service)
        {
            this.service = service;
        }

        [Route("add")]
        [HttpPost]
        public IHttpActionResult Add(TalkAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        public IHttpActionResult Update(TalkAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        public IHttpActionResult Get(TalkAddOrUpdateRequestDto dto) { return Ok(this.service.Get()); }

		[Route("getById")]
        [HttpGet]
        public IHttpActionResult GetById(int id) { return Ok(this.service.GetById(id)); }
        
        [Route("remove")]
        [HttpDelete]
        public IHttpActionResult Remove(int id) { return Ok(this.service.Remove(id)); }

        protected readonly ITalkService service;

    }
}
