using System;
using Xunit;

namespace GradeBook.Tests
{
    public class TypeTests
    {
        [Fact]
        public void GetBookReturnsDifferentObjects()
        {
            // Arrange
            var book1 = GetBook("Book 1");
            var book2 = GetBook("Book 2");

            // Assert
            Assert.Equal("Book 1", book1.Name);
            Assert.Equal("Book 2", book2.Name);
            Assert.NotSame(book1, book2);
        }

        [Fact]
        public void TwoVarsCanReferenceSameObject()
        {
            // Arrange
            var book1 = GetBook("Book 1");
            var book2 = book1;

            // Assert
            Assert.True(Object.ReferenceEquals(book1, book2)); // Check if reference is the same between two parameters
        }

        Book GetBook(string name)
        {
            return new Book(name);
        }

        [Fact]
        public void CSharpIsPassByRef()
        {
            // Arrange
            var book1 = GetBook("Book 1");
            GetBookSetNameWithRefParam(ref book1, "New Name"); // You can replace 'ref' by 'out', out will throw an error if book1 is not initialized

            // Assert
            Assert.Equal("New Name", book1.Name);
        }

        public void GetBookSetNameWithRefParam(ref Book book, string name) // You can replace 'ref' by 'out', out will throw an error if book is not initialized
        {
            book = new Book(name);
        }

        [Fact]
        public void CSharpIsPassByValue()
        {
            // Arrange
            var book1 = GetBook("Book 1");
            GetBookSetNameWithValueParam(book1, "New Name");

            // Assert
            Assert.Equal("Book 1", book1.Name);
        }

        public void GetBookSetNameWithValueParam(Book book, string name)
        {
            book = new Book(name);
        }

        [Fact]
        public void CanSetNameFromReferences()
        {
            // Arrange
            var book1 = GetBook("Book 1");
            SetName(book1, "New Name");

            // Assert
            Assert.Equal("New Name", book1.Name);
        }

        private void SetName(Book book, string name)
        {
            book.Name = name;
        }

        [Fact]
        public void ValueTypesAlsoPassByValue()
        {
            var x = GetInt();
            SetInt(ref x);

            Assert.Equal(42, x);
        }

        private void SetInt(ref int z)
        {
            z = 42;
        }

        private int GetInt()
        {
            return 3;
        }

        [Fact]
        public void StringsBehaveLikeValueTypes()
        {
            string name = "Micholas";
            var upper = MakeUppercase(name);

            Assert.Equal("Micholas", name);
            Assert.Equal("MICHOLAS", upper);
        }

        private string MakeUppercase(string parameter)
        {
            return parameter.ToUpper();
        }
    }
}
