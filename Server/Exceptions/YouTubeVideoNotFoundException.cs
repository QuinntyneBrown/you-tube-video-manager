using System;

namespace Chloe.Server.Exceptions
{
    public class YouTubeVideoNotFoundException: NotFoundException
    {
        public YouTubeVideoNotFoundException()
            :base("You Tube Video Not Found")
        {
        }

        public YouTubeVideoNotFoundException(string message)
            :base(message)
        {

        }

        public YouTubeVideoNotFoundException(string message, Exception inner)
        {

        }
    }
}