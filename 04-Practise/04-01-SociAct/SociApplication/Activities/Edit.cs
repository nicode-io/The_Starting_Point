using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using SociOmain;
using SociStence;

namespace SociApplication.Activities
{
	public class Edit
	{
		public class Command : IRequest
		{
			public Activity Activity { get; set;  }
		}
		
		public class Handler : IRequestHandler<Command>
		{
			private readonly DataContext _context;
			private readonly IMapper _mapper;

			public Handler(DataContext context, IMapper mapper)
			{
				_context = context;
				_mapper = mapper;
			}

			public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
			{
				var activity = await _context.Activities.FindAsync(request.Activity.Id);
				
				// AutoMapper will save every fields of activity that's updated in the request's body
				_mapper.Map(request.Activity, activity);

				await _context.SaveChangesAsync();
				
				return Unit.Value;
			}
		}
	}
}