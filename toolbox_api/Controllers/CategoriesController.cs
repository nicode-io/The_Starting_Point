using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using toolbox_api.Database;
using toolbox_api.Models;

namespace toolbox_api.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class CategoriesController : BaseApiController
	{
		private readonly DataContext _context;

		public CategoriesController(DataContext context)
		{
			_context = context;
		}

		[HttpGet]
		public async Task<ActionResult<List<Category>>> GetCategories()
		{
			return await _context.Categories.ToListAsync();
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<Category>> GetCategory(int id)
		{
			return await _context.Categories.FindAsync(id);
		}
	}
}