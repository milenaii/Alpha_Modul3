using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using Traveller.Commands.Creating;
using Traveller.Core.Contracts;
using Traveller.Core.Providers;

namespace Traveller.UnitTests.Commands.Creating.CreateTicketCommandTests
{
    [TestClass]
    public class Constructor_Should
    {
        [TestMethod]
        public void CreateInstance_WhenParametersAreCorrect()
        {
            // Arrange
            var databaseMock = new Mock<IDatabase>();
            var factoryMock = new Mock<ITravellerFactory>();

            // Act
            var command = new CreateTicketCommand(databaseMock.Object, factoryMock.Object);

            // Assert
            Assert.IsNotNull(command);
        }

        [TestMethod]
        public void ThrowException_WhenDatabaseIsNull()
        {
            // Arrange
            var factoryMock = new Mock<ITravellerFactory>();

            // Act & Assert
            Assert.ThrowsException<ArgumentNullException>(() => new CreateTicketCommand(null, factoryMock.Object));
        }

        [TestMethod]
        public void ThrowException_WhenFactoryIsNull()
        {
            // Arrange
            var databaseMock = new Mock<IDatabase>();

            // Act & Assert
            Assert.ThrowsException<ArgumentNullException>(() => new CreateTicketCommand(databaseMock.Object, null));
        }
    }
}
