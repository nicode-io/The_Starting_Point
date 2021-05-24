using Microsoft.EntityFrameworkCore.Migrations;

namespace DemoEFCore.Migrations
{
    public partial class seedContact : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropCheckConstraint(
                name: "CK_Email",
                table: "Contact");

            migrationBuilder.InsertData(
                table: "Contact",
                columns: new[] { "Id", "Email", "FirstName", "LastName" },
                values: new object[] { 1, "g.adnet@email.be", "Geoffroy", "Adnet" });

            migrationBuilder.InsertData(
                table: "Contact",
                columns: new[] { "Id", "Email", "FirstName", "LastName" },
                values: new object[] { 2, "s.connor@skynet.com", "Sarah", "Connor" });

            migrationBuilder.InsertData(
                table: "Contact",
                columns: new[] { "Id", "Email", "FirstName", "LastName" },
                values: new object[] { 3, "Hell.master69@lux.god", "Lucifer", "Morningstar" });

            migrationBuilder.AddCheckConstraint(
                name: "CK_Email",
                table: "Contact",
                sql: "Email LIKE '__%@__%.%'");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropCheckConstraint(
                name: "CK_Email",
                table: "Contact");

            migrationBuilder.DeleteData(
                table: "Contact",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Contact",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Contact",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.AddCheckConstraint(
                name: "CK_Email",
                table: "Contact",
                sql: "Email LIKE '__%@__%.%");
        }
    }
}
