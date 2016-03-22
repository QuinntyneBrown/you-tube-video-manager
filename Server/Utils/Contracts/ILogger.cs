using System;

namespace Chloe.Server.Utils.Contracts
{
    public interface ILogger
    {
        void Log(Exception exception);
    }
}
