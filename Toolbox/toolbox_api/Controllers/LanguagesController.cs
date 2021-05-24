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
	public class LanguagesController : BaseApiController
	{
		private readonly DataContext _context;

		public LanguagesController(DataContext context)
		{
			_context = context;
		}

		[HttpGet]
		public async Task<ActionResult<List<Language>>> GetLanguages()
		{
			return await _context.Languages.ToListAsync();
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<Language>> GetLanguage(int id)
		{
			return await _context.Languages.FindAsync(id);
		}
	}
}