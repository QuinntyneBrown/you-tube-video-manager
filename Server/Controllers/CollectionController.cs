using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Web.Http;

namespace Chloe.Server.Controllers
{
    [Authorize]
    [RoutePrefix("api/collection")]
    public class CollectionController : ApiController
    {
        public CollectionController(ICollectionService service)
        {
            this.service = service;
        }

        [Route("add")]
        [HttpPost]
        public IHttpActionResult Add(CollectionAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        public IHttpActionResult Update(CollectionAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        public IHttpActionResult Get(CollectionAddOrUpdateRequestDto dto) { return Ok(this.service.Get()); }

		[Route("getById")]
        [HttpGet]
        public IHttpActionResult GetById(int id) { return Ok(this.service.GetById(id)); }
        
        [Route("remove")]
        [HttpDelete]
        public IHttpActionResult Remove(int id) { return Ok(this.service.Remove(id)); }

        protected readonly ICollectionService service;

    }
}
