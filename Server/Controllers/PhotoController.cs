using Chloe.Server.Data.Contracts;
using Chloe.Server.Dtos;
using Chloe.Server.Services;
using Chloe.Server.Services.Contracts;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Linq;
using System.Data.Entity;

namespace Chloe.Server.Controllers
{
    [Authorize]
    [RoutePrefix("api/photo")]
    public class PhotoController : ApiController
    {
        public PhotoController(IPhotoService service)
        {
            this.service = service;
        }

        [Route("add")]
        [HttpPost]
        public IHttpActionResult Add(PhotoAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        public IHttpActionResult Update(PhotoAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        public IHttpActionResult Get(PhotoAddOrUpdateRequestDto dto) { return Ok(this.service.Get()); }

		[Route("getById")]
        [HttpGet]
        public IHttpActionResult GetById(int id) { return Ok(this.service.GetById(id)); }
        
        [Route("remove")]
        [HttpDelete]
        public IHttpActionResult Remove(int id) { return Ok(this.service.Remove(id)); }

        [HttpPost]
        [Route("updload")]
        public async Task<IEnumerable<FileUploadDto>> Add(HttpRequestMessage request)
        {
            string workingFolder = System.Web.HttpContext.Current.Server.MapPath("~/Uploads");

            var provider = new PhotoMultipartFormDataStreamProvider(workingFolder);

            await request.Content.ReadAsMultipartAsync(provider);

            var photos = new List<FileUploadDto>();

            foreach (var file in provider.FileData)
            {
                var fileInfo = new FileInfo(file.LocalFileName);

                var photo = new Models.Photo();

                if (uow.Photos.GetAll().Where(x => x.Name == fileInfo.Name).FirstOrDefault() != null)
                {
                    photo = uow.Photos.GetAll().Where(x => x.Name == fileInfo.Name).Single();
                }
                else
                {
                    uow.Photos.Add(photo);
                }

                photo.Name = fileInfo.Name;

                uow.SaveChanges();
            }

            return photos;
        }

        protected readonly IChloeUow uow;
        protected readonly IPhotoService service;

    }
}
