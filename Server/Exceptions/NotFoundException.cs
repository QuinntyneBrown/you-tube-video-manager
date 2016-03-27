using System;

namespace Chloe.Server.Exceptions
{
    public class NotFoundException: Exception
    {
        public NotFoundException()
            :base("Entity Not Found")
        {
        }

        public NotFoundException(string message)
            :base(message)
        {

        }

        public NotFoundException(string message, Exception inner)
        {

        }
    }
}