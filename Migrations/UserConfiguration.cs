using Chloe.Server.Data;
using Chloe.Server.Models;
using System.Linq;
using System.Data.Entity.Migrations;

namespace Chloe.Migrations
{
    public class UserConfiguration
    {
        public static void Seed(ChloeContext context)
        {
            if (context.Users.FirstOrDefault(x => x.Username == "quinntyne@hotmail.com") == null)
            {
                var user = new User()
                {
                    Username = "quinntyne@hotmail.com",
                    Firstname = "Quinntyne",
                    Lastname = "Brown",
                    Password = "XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=",
                };
                context.Users.AddOrUpdate(user);
                context.SaveChanges();
            }
        }
    }
}