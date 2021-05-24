using Microsoft.EntityFrameworkCore.Migrations;

namespace toolbox_api.Migrations
{
    public partial class CatLangReferencesBis : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Categories_Categories_CategoryID1",
                table: "Categories");

            migrationBuilder.DropIndex(
                name: "IX_Categories_CategoryID1",
                table: "Categories");

            migrationBuilder.DropColumn(
                name: "CategoryID1",
                table: "Categories");

            migrationBuilder.CreateIndex(
                name: "IX_Tools_CategoryID",
                table: "Tools",
                column: "CategoryID");

            migrationBuilder.AddForeignKey(
                name: "FK_Tools_Categories_CategoryID",
                table: "Tools",
                column: "CategoryID",
                principalTable: "Categories",
                principalColumn: "CategoryID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tools_Categories_CategoryID",
                table: "Tools");

            migrationBuilder.DropIndex(
                name: "IX_Tools_CategoryID",
                table: "Tools");

            migrationBuilder.AddColumn<int>(
                name: "CategoryID1",
                table: "Categories",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Categories_CategoryID1",
                table: "Categories",
                column: "CategoryID1");

            migrationBuilder.AddForeignKey(
                name: "FK_Categories_Categories_CategoryID1",
                table: "Categories",
                column: "CategoryID1",
                principalTable: "Categories",
                principalColumn: "CategoryID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
