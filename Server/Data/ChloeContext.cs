﻿using Chloe.Server.Data.Contracts;
using Chloe.Server.Models;
using System.Data.Entity;

namespace Chloe.Server.Data
{
    public class ChloeContext: DbContext, IDbContext
    {
        public ChloeContext()
            : base(nameOrConnectionString: "ChloeContext")
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
            Configuration.AutoDetectChangesEnabled = true;
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<YouTubeVideo> YouTubeVideos { get; set; }
        public DbSet<YouTubeVideoTag> YouTubeVideoTags { get; set; }
        public DbSet<Playlist> Playlists { get; set; }
        public DbSet<Feedback> Feedbacks { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
     
        } 
    }
}
