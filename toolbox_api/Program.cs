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
using toolbox_api.Database;

namespace toolbox_api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            IHost host = CreateHostBuilder(args).Build();

            using IServiceScope scope = host.Services.CreateScope();

           IServiceProvider services = scope.ServiceProvider;

            try
            {
                DataContext context = services.GetRequiredService<DataContext>();
                context.Database.Migrate();
            }
            catch (Exception exception)
            {
                ILogger logger = services.GetRequiredService<ILogger<Program>>();
                logger.LogError(exception, "Error while applying migrations");
            }
            
            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
