
using Microsoft.EntityFrameworkCore;
using YourNamespace.Domain.Entities;

namespace YourNamespace.Infrastructure.Data
{
    public class MovieDbContext : DbContext
    {
        public DbSet<Movie> Movies { get; set; }

        public MovieDbContext(DbContextOptions<MovieDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Movie>().HasKey(m => m.Id);

        }
    }
}
