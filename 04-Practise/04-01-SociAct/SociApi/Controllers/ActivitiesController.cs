using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SociApplication.Activities;
using SociOmain;

namespace SociApi.Controllers
{
	public class ActivitiesController : BaseApiController
	{

		[HttpGet]
		public async Task<ActionResult<List<Activity>>> GetActivities()
		{
			return await Mediator.Send(new List.Query());
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<Activity>> GetActivity(Guid id)
		{
			return await Mediator.Send(new Details.Query{Id = id});
		}

		[HttpPost]
		public async Task<IActionResult> CreateActivity(Activity activity)
		// Will automatically search in the request body for activity
		{
			return Ok(await Mediator.Send(new Create.Command {Activity = activity}));
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> EditActivity(Guid id, Activity activity)
		{
			activity.Id = id;
			return Ok(await Mediator.Send(new Edit.Command {Activity = activity}));
		}
		
		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteActivity(Guid id)
		{
			return Ok(await Mediator.Send(new Delete.Command {Id = id}));
		}
	}
}