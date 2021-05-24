using Microsoft.EntityFrameworkCore.Migrations;

namespace toolbox_api.Migrations
{
    public partial class CatLangReferences : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Categories_Tools_ToolID",
                table: "Categories");

            migrationBuilder.DropForeignKey(
                name: "FK_Languages_Tools_ToolID",
                table: "Languages");

            migrationBuilder.DropIndex(
                name: "IX_Languages_ToolID",
                table: "Languages");

            migrationBuilder.DropIndex(
                name: "IX_Categories_ToolID",
                table: "Categories");

            migrationBuilder.DropColumn(
                name: "ToolID",
                table: "Languages");

            migrationBuilder.DropColumn(
                name: "ToolID",
                table: "Categories");

            migrationBuilder.AddColumn<int>(
                name: "CategoryID1",
                table: "Categories",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tools_LanguageID",
                table: "Tools",
                column: "LanguageID");

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

            migrationBuilder.AddForeignKey(
                name: "FK_Tools_Languages_LanguageID",
                table: "Tools",
                column: "LanguageID",
                principalTable: "Languages",
                principalColumn: "LanguageID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Categories_Categories_CategoryID1",
                table: "Categories");

            migrationBuilder.DropForeignKey(
                name: "FK_Tools_Languages_LanguageID",
                table: "Tools");

            migrationBuilder.DropIndex(
                name: "IX_Tools_LanguageID",
                table: "Tools");

            migrationBuilder.DropIndex(
                name: "IX_Categories_CategoryID1",
                table: "Categories");

            migrationBuilder.DropColumn(
                name: "CategoryID1",
                table: "Categories");

            migrationBuilder.AddColumn<int>(
                name: "ToolID",
                table: "Languages",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ToolID",
                table: "Categories",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Languages_ToolID",
                table: "Languages",
                column: "ToolID");

            migrationBuilder.CreateIndex(
                name: "IX_Categories_ToolID",
                table: "Categories",
                column: "ToolID");

            migrationBuilder.AddForeignKey(
                name: "FK_Categories_Tools_ToolID",
                table: "Categories",
                column: "ToolID",
                principalTable: "Tools",
                principalColumn: "ToolID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Languages_Tools_ToolID",
                table: "Languages",
                column: "ToolID",
                principalTable: "Tools",
                principalColumn: "ToolID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
