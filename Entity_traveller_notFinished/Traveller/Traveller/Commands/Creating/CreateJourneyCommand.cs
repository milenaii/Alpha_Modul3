using Bytes2you.Validation;
using System;
using System.Collections.Generic;
using Traveller.Commands.Contracts;
using Traveller.Core.Contracts;
using Traveller.Core.Providers;
using Traveller.Data;
using Traveller.Models.Vehicles.Abstractions;

namespace Traveller.Commands.Creating
{
    public class CreateJourneyCommand : ICommand
    {
        private readonly ITravellerContext context;
        private readonly IDatabase database;
        private readonly ITravellerFactory factory;

        public CreateJourneyCommand(ITravellerContext context, IDatabase database, ITravellerFactory factory)
        {
            Guard.WhenArgument(context, "context").IsNull().Throw();
            Guard.WhenArgument(database, "database").IsNull().Throw();
            Guard.WhenArgument(factory, "factory").IsNull().Throw();

            this.context = context;
            this.database = database;
            this.factory = factory;
        }

        public string Execute(IList<string> parameters)
        {
            string startLocation;
            string destination;
            int distance;
            IVehicle vehicle;

            try
            {
                startLocation = parameters[0];
                destination = parameters[1];
                distance = int.Parse(parameters[2]);
                vehicle = this.database.Vehicles[int.Parse(parameters[3])];
            }
            catch
            {
                throw new ArgumentException("Failed to parse CreateJourney command parameters.");
            }

            var journey = this.factory.CreateJourney(startLocation, destination, distance, vehicle);
            this.database.Journeys.Add(journey);

            //using (TravellerContext context = new TravellerContext())
            //{
            //    context.Journeys.Add(journey);
            //    context.SaveChanges();
            //}

            
            this.context.Journeys.Add(journey);

            try
            {
                this.context.SaveChanges();
            }
            catch
            {
            }

            return $"Journey with ID {this.database.Journeys.Count - 1} was created.";
        }
    }
}
