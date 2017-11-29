using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Traveller.Commands.Contracts;
using Traveller.Core.Factories;
using Traveller.Core.Providers;

namespace Traveller.UnitTests.Core.Providers.CommandParserTests
{
    [TestClass]
    public class ParseCommand_Should
    {
        [TestMethod]
        [DataRow("createbus 10 0.7", "createbus")]
        [DataRow("createtrain 300 0.4 3", "createtrain")]
        [DataRow("createairplane 250 1 true", "createairplane")]
        [DataRow("listvehicles", "listvehicles")]
        public void ReturnCommand_WhenParameterIsCorrect(string fullCommand, string commandName)
        {
            // Arrange
            var factoryMock = new Mock<ICommandFactory>();
            var commandMock = new Mock<ICommand>();

            factoryMock.Setup(m => m.CreateCommand(commandName)).Returns(commandMock.Object);

            var parser = new CommandParser(factoryMock.Object);

            // Act
            var result = parser.ParseCommand(fullCommand);

            // Assert
            Assert.AreEqual(commandMock.Object, result);
        }
    }
}
