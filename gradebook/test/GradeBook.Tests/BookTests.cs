using System;
using Xunit;

namespace GradeBook.Tests
{
    public class BookTests
    {
        [Fact] // Attribute attached to Test1
        public void BookCalculatesAnAverageGrade()
        {
            // Arrange
            var book = new InMemoryBook("");
            book.AddGrade(89.1);
            book.AddGrade(90.5);
            book.AddGrade(77.4);

            // Act 
            var result = book.GetStatistics();

            // Assert
            Assert.Equal(85.7, result.Average, 1);
            Assert.Equal(90.5, result.High);
            Assert.Equal(77.4, result.Low);
            Assert.Equal('B', result.Letter);
            Assert.InRange(result.Average, 0, 100);
        }
    }
}
