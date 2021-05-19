using CampusBokningsSystem.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CampusBokningsSystem.Service
{
    public class CampusDbContext : DbContext
    {
        public CampusDbContext(DbContextOptions<CampusDbContext> options)
            : base(options)
        {
        }
        
        public DbSet<layouts> layouts { get; set; }
        public DbSet<Resources> resources { get; set; }
        public DbSet<Schedules> schedules { get; set; }
        public DbSet<Groups> groups { get; set; }
        public DbSet<Group_Roles> group_Roles { get; set; }
    }
}
