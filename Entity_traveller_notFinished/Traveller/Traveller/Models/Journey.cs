using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Traveller.Models.Abstractions;
using Traveller.Models.Vehicles.Abstractions;


namespace Traveller.Models
{
    public class Journey : IJourney
    {
        private string startingLocation;
        private string destination;
        private int distance;

        public Journey()
        {
        }

        public Journey(string startingLocation, string destination, int distance, IVehicle vehicle)
        {
            this.StartLocation = startingLocation;
            this.Destination = destination;
            this.Distance = distance;
            this.Vehicle = vehicle;
        }

        public int Id { get; set; }

        [Required]
        [StringLength(25, MinimumLength = 5, ErrorMessage = "The StartingLocation's length cannot be less than 5 or more than 25 symbols long.")]
        public string StartLocation
        {
            get;
            set;
        }

        [Required]
        [StringLength(25, MinimumLength = 5, ErrorMessage = "The Destination's length cannot be less than 5 or more than 25 symbols long.")]
        public string Destination
        {
            get;
            set;
        }

        [Range(5, 5000, ErrorMessage = "The Distance cannot be less than 5 or more than 5000 kilometers.")]
        public int Distance
        {
            get;
            set;
        }

        [NotMapped]
        public IVehicle Vehicle { get; private set; }

        public decimal CalculateTravelCosts()
        {
            return this.Distance * Vehicle.PricePerKilometer;
        }

        public override string ToString()
        {
            var sb = new StringBuilder();

            sb.AppendLine("Journey ----");
            sb.AppendLine("Start location: " + this.StartLocation);
            sb.AppendLine("Destination: " + this.Destination);
            sb.AppendLine("Distance: " + this.Distance);
            sb.AppendLine("Vehicle type: " + this.Vehicle.Type);
            sb.Append("Travel costs: " + this.CalculateTravelCosts());

            return sb.ToString();
        }
    }
}
