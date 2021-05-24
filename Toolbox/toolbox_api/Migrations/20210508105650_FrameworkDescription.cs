using Microsoft.EntityFrameworkCore.Migrations;

namespace toolbox_api.Migrations
{
    public partial class FrameworkDescription : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ShortName",
                table: "Framework",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "LongName",
                table: "Framework",
                newName: "Description");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Framework",
                newName: "ShortName");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Framework",
                newName: "LongName");
        }
    }
}
