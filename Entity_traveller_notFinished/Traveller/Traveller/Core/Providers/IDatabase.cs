using System.Collections.Generic;
using Traveller.Models;
using Traveller.Models.Abstractions;
using Traveller.Models.Vehicles.Abstractions;

namespace Traveller.Core.Providers
{
    public interface IDatabase
    {
        IList<IVehicle> Vehicles { get; }
        IList<Journey> Journeys { get; }
        IList<ITicket> Tickets { get; }
    }
}
