using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AnimalKingdom
{
    public class AnimalContext: DbContext
    {
        public DbSet<Animal> Animals { get; set; }
        
        public string DbPath { get; }

        public AnimalContext() 
        {
            var folder = Environment.SpecialFolder.LocalApplicationData;
            var path = Environment.GetFolderPath(folder);
            DbPath = System.IO.Path.Join(path, "AnimalKingdom.db");
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options) => options.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=AnimalKingdom;ConnectRetryCount=0");
    }

    public class Animal
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }

        [ForeignKey("Id")]
        public Country Country { get; set; }
    }
    public class Country 
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }

        public List<Animal> Animals { get; set; } 
    }
}
