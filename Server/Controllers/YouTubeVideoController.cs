﻿using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Web.Http;

namespace Chloe.Server.Controllers
{
    [Authorize]
    [RoutePrefix("api/youTubeVideo")]
    public class YouTubeVideoController : ApiController
    {
        public YouTubeVideoController(IYouTubeVideoService service)
        {
            this.service = service;
        }

        [Route("add")]
        [HttpPost]
        public IHttpActionResult Add(YouTubeVideoAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        public IHttpActionResult Update(YouTubeVideoAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        public IHttpActionResult Get() { return Ok(this.service.Get()); }

        [Route("getById")]
        [HttpGet]
        public IHttpActionResult GetById(int id) { return Ok(this.service.GetById(id)); }

        [Route("getByVideoId")]
        [AllowAnonymous]
        [HttpGet]
        public IHttpActionResult GetByVideoId(string id) { return Ok(this.service.GetByVideoId(id)); }

        [Route("remove")]
        [HttpDelete]
        public IHttpActionResult Remove(int id) { return Ok(this.service.Remove(id)); }

        protected readonly IYouTubeVideoService service;
    }
}
