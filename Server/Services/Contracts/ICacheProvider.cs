using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Services.Contracts
{
    public interface ICacheProvider
    {
        ICache GetCache();
    }
}