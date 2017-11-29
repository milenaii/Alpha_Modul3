using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using Traveller.Core.Factories;
using Traveller.Core.Providers;

namespace Traveller.UnitTests.Core.Providers.CommandParserTests
{
    [TestClass]
    public class Constructor_Should
    {
        [TestMethod]
        public void CreateInstance_WhenParametersAreCorrect()
        {
            // Arrange
            var factoryMock = new Mock<ICommandFactory>();

            // Act
            var parser = new CommandParser(factoryMock.Object);

            // Assert
            Assert.IsNotNull(parser);
        }

        [TestMethod]
        public void ThrowException_WhenFactoryIsNull()
        {
            // Arrange & Act & Assert
            Assert.ThrowsException<ArgumentNullException>(() => new CommandParser(null));
        }
    }
}
