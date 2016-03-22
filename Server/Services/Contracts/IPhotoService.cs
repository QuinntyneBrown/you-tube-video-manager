using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IPhotoService
    {
        PhotoAddOrUpdateResponseDto AddOrUpdate(PhotoAddOrUpdateRequestDto request);
        ICollection<PhotoDto> Get();
        PhotoDto GetById(int id);
        dynamic Remove(int id);
    }
}
