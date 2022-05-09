using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using SociApplication.Activities;
using SociApplication.Core;
using SociStence;

namespace SociApi.Extensions
{
	public static class ApplicationServiceExtensions
	{
		public static void AddApplicationService(this IServiceCollection services, IConfiguration config)
		{
			// Swagger
			services.AddSwaggerGen(c =>
			{
				c.SwaggerDoc("v1", new OpenApiInfo { Title = "SociApi", Version = "v1" });
			});
			// SQLite
			services.AddDbContext<DataContext>(opt =>
			{
				opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
			});
			// CORS 
			services.AddCors(opt =>
			{
				opt.AddPolicy("CorsPolicy", policy =>
				{
					policy.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:3000");
				});
			});
			// Mediator
			services.AddMediatR(typeof(List.Handler).Assembly);
			// AutoMapper
			services.AddAutoMapper(typeof(MappingProfiles).Assembly);
		}
	}
}