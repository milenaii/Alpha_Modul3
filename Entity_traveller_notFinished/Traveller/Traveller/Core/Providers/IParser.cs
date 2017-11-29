using System.Collections.Generic;
using Traveller.Commands.Contracts;

namespace Traveller.Core.Providers
{
    public interface IParser
    {
        ICommand ParseCommand(string fullCommand);

        IList<string> ParseParameters(string fullCommand);
    }
}
