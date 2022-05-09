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
	public class FrameworksController : BaseApiController
	{
		private readonly DataContext _context;

		public FrameworksController(DataContext context)
		{
			_context = context;
		}

		[HttpGet]
		public async Task<ActionResult<List<Framework>>> GetFrameworks()
		{
			return await _context.Frameworks.ToListAsync();
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<Framework>> GetFramework(int id)
		{
			return await _context.Frameworks.FindAsync(id);
		}
	}
}