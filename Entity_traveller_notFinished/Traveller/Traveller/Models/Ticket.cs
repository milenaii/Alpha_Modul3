using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Traveller.Models.Abstractions;

namespace Traveller.Models
{
    public class Ticket : ITicket
    {
        private ICollection<Journey> journeys;

        public Ticket()
        {
            this.journeys = new HashSet<Journey>();
        }

        public Ticket(Journey journey, decimal administrativeCosts)
        {
            this.Journey = journey;
            this.AdministrativeCosts = administrativeCosts;
        }

        public int Id { get; set; }
        
        [Range(0, 1000)]
        public decimal AdministrativeCosts { get; set; }

        public int? JourneyId { get; set; }

        public virtual Journey Journey { get; set; }

        public virtual ICollection<Journey> Journeys
        {
            get
            {
                return this.journeys;
            }
            set
            {
                this.journeys = value;
            }
        }

        public decimal CalculatePrice()
        {
            return this.AdministrativeCosts + this.Journey.CalculateTravelCosts();
        }

        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.AppendLine("Ticket ----");
            sb.AppendLine("Destination: " + this.Journey.Destination);
            sb.Append("Price: " + this.CalculatePrice());

            return sb.ToString();
        }
    }
}
