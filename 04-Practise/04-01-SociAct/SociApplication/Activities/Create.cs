using System.Threading;
using System.Threading.Tasks;
using MediatR;
using SociOmain;
using SociStence;

namespace SociApplication.Activities
{
	public class Create
	{
		// Command do not return anything
		public class Command : IRequest
		{
			public Activity Activity { get; set; }
		}
		
		public class Handler : IRequestHandler<Command>
		{
			private readonly DataContext _context;

			public Handler(DataContext context)
			{
				_context = context;
			}

			public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
			{
				// Use only AddAsync in database push (so not here)
				_context.Activities.Add(request.Activity);

				await _context.SaveChangesAsync();
				
				// Return is equivalent to nothing here
				return Unit.Value;
			}
		}
	}
}