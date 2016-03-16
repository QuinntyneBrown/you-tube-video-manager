using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Config.Contracts
{
    public interface IConfigurationProvider
    {
        T Get<T>() where T : class;
    }
}