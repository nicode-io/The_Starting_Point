using Microsoft.EntityFrameworkCore.Migrations;

namespace EfExo.Migrations
{
    public partial class AddMovieCategory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Movie",
                columns: table => new
                {
                    MovieId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Year = table.Column<int>(type: "int", nullable: false),
                    MainActor = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Category = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Director = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Movie", x => x.MovieId);
                    table.CheckConstraint("CK_Year", "Year > 1975");
                });

            migrationBuilder.InsertData(
                table: "Movie",
                columns: new[] { "MovieId", "Category", "Director", "MainActor", "Title", "Year" },
                values: new object[,]
                {
                    { 1, "Science-Fiction", "Georges Lucas", "Mark Hammil", "Star Wars : Un nouvel espoir", 1977 },
                    { 2, "Science-Fiction", "Georges Lucas", "Mark Hammil", "Star Wars : L'empire contre-attaque", 1980 },
                    { 3, "Science-Fiction", "Georges Lucas", "Mark Hammil", "Star Wars : Le retour du Jedi", 1983 },
                    { 4, "Société", "Lexi Alexander", "Charlie Hunnam", "Hooligans", 2005 },
                    { 5, "Heroic-Fantasy", "Peter Jackson", "Elijah Wood", "LOTR - La communauté de l'anneau", 2001 },
                    { 6, "Heroic-Fantasy", "Peter Jackson", "Elijah Wood", "LOTR - Les deux tours", 2002 },
                    { 7, "Heroic-Fantasy", "Peter Jackson", "Elijah Wood", "LOTR - Le retour du roi", 2003 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Movie_Title",
                table: "Movie",
                column: "Title",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Movie");
        }
    }
}
