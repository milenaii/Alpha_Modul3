using Ninject;
using System.Data.Entity;
using Traveller.Core;
using Traveller.Data;
using Traveller.Migrations;
using Traveller.Ninject;
using System.Linq;
using Traveller.Models;
using System;

namespace Traveller
{
    public class Startup
    {
        public static void Main(string[] args)
        {
            Database
                .SetInitializer(new MigrateDatabaseToLatestVersion<TravellerContext, Configuration>());

            using (var context = new TravellerContext())
            {
                Journey journey = new Journey();
                journey.StartLocation = "Silistra";
                journey.Destination = "Turnovo";
                journey.Distance = 300;

                //Ticket ticket = new Ticket();
                //ticket.AdministrativeCosts = 1400;
                //ticket.Journey = journey;

                //context.Tickets.Add(ticket);
                //context.SaveChanges();

                var ticket = context.Tickets.Find(4);
                ticket.Journeys.Add(journey);
                context.SaveChanges();
                //Console.WriteLine(ticket.Journeys.Single().Destination);
            }





            //IKernel kernel = new StandardKernel(new TravellerModule());

            //IEngine engine = kernel.Get<IEngine>("Engine");
            //engine.Start();
        }
    }
}
