using System;

namespace Chloe.Server.Dtos
{
    public class FileUploadDto
    {
        public string Name { get; set; }
        public DateTime Created { get; set; }
        public DateTime Modified { get; set; }
        public long Size { get; set; }
    }
}