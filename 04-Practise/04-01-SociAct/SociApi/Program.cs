using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using SociStence;

namespace SociApi
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();
            
            // Dispose of the scope after Main execution
            // to start our services
            using var scope = host.Services.CreateScope();
            
            // Launch services provider
            var services = scope.ServiceProvider;

            try
            {
                // Launch service to create database if it doesn't exist
                var context = services.GetRequiredService<DataContext>();
                await context.Database.MigrateAsync();
                // Seed with data if not existing in database
                await Seed.SeedData(context);
            }
            catch (Exception ex)
            {
                // Launch error logger service
                var logger = services.GetRequiredService<ILogger<Program>>();
                logger.LogError(ex, "Error occured during migration");
            }
            
            // Run application
            await host.RunAsync();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
