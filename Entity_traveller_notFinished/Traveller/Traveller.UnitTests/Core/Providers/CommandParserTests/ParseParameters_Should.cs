using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Collections.Generic;
using System.Linq;
using Traveller.Core.Factories;
using Traveller.Core.Providers;

namespace Traveller.UnitTests.Core.Providers.CommandParserTests
{
    [TestClass]
    public class ParseParameters_Should
    {
        [TestMethod]
        public void ListWithCorrectParameters_WhenFullCommandContainsParameters()
        {
            // Arrange
            var factoryMock = new Mock<ICommandFactory>();

            string fullCommand = "createairplane 250 1 true";
            List<string> expectedResult = new List<string>()
            {
                "250",
                "1",
                "true"
            };

            var parser = new CommandParser(factoryMock.Object);

            // Act
            var result = parser.ParseParameters(fullCommand).ToList();

            // Assert
            CollectionAssert.AreEquivalent(expectedResult, result);
        }

        [TestMethod]
        public void EmptyList_WhenFullCommandDoesNotContainParameters()
        {
            // Arrange
            var factoryMock = new Mock<ICommandFactory>();

            string fullCommand = "listtickets";

            var parser = new CommandParser(factoryMock.Object);

            // Act
            var result = parser.ParseParameters(fullCommand).ToList();

            // Assert
            Assert.AreEqual(0, result.Count);
        }
    }
}
