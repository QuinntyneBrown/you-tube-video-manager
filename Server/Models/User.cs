using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Models
{
    public class User: BaseEntity
    {
        public User()
        {
            this.Roles = new HashSet<Role>();
        }

        public string Password { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }

        public ICollection<Role> Roles { get; set; }
    }
}