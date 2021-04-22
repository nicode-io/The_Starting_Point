using AutoMapper;
using SociOmain;

namespace SociApplication.Core
{
	public class MappingProfiles : Profile
	{
		// Activity AutoMapper
		public MappingProfiles()
		{
			CreateMap<Activity, Activity>();
		}
	}
}