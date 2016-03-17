using Chloe.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Dtos
{
    public class TagAddOrUpdateResponseDto: TagDto
    {
        public TagAddOrUpdateResponseDto(Tag entity)
            :base(entity)
        {
            
        }
    }
}