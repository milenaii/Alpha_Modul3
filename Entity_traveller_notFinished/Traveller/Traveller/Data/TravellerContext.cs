using System.Data.Entity;
using Traveller.Models;

namespace Traveller.Data
{
    public class TravellerContext : DbContext, ITravellerContext
    {
        public TravellerContext()
            : base("TravellerConnection")
        {
        }

        public IDbSet<Ticket> Tickets { get; set; }

        public IDbSet<Journey> Journeys { get; set; }
    }
}
