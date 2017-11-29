namespace Traveller.Models.Abstractions
{
    public interface ITicket
    {
        Journey Journey { get; }

        decimal AdministrativeCosts { get; }

        decimal CalculatePrice();
    }
}
