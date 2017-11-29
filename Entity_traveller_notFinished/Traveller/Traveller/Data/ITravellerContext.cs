using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Traveller.Models;

namespace Traveller.Data
{
    public interface ITravellerContext
    {
        IDbSet<Ticket> Tickets { get; set; }
        IDbSet<Journey> Journeys { get; set; }

        int SaveChanges();
    }
}
