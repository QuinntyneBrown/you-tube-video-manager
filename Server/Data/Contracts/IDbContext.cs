using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chloe.Server.Data.Contracts
{
    public interface IDbContext : IDisposable, IObjectContextAdapter
    {
        int SaveChanges();

        DbContextConfiguration Configuration { get; }
    }
}
