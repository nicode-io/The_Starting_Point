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
	public class ToolsController : BaseApiController
	{
		private readonly DataContext _context;

		public ToolsController(DataContext context)
		{
			_context = context;
		}

		[HttpGet]
		public async Task<ActionResult<List<Tool>>> GetTools()
		{
			return await _context.Tools.ToListAsync();
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<Tool>> GetTool(int id)
		{
			return await _context.Tools.FindAsync(id);
		}
	}
}