namespace Chloe.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Chloe.Server.Data.ChloeContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(Chloe.Server.Data.ChloeContext context)
        {
            UserConfiguration.Seed(context);
        }
    }
}
