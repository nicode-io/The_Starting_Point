using Microsoft.EntityFrameworkCore.Migrations;

namespace toolbox_api.Migrations
{
    public partial class CategoryLanguageBis : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Category_Tools_ToolID",
                table: "Category");

            migrationBuilder.DropForeignKey(
                name: "FK_Language_Tools_ToolID",
                table: "Language");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Language",
                table: "Language");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Category",
                table: "Category");

            migrationBuilder.RenameTable(
                name: "Language",
                newName: "Languages");

            migrationBuilder.RenameTable(
                name: "Category",
                newName: "Categories");

            migrationBuilder.RenameIndex(
                name: "IX_Language_ToolID",
                table: "Languages",
                newName: "IX_Languages_ToolID");

            migrationBuilder.RenameIndex(
                name: "IX_Category_ToolID",
                table: "Categories",
                newName: "IX_Categories_ToolID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Languages",
                table: "Languages",
                column: "LanguageID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Categories",
                table: "Categories",
                column: "CategoryID");

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Categories_Tools_ToolID",
                table: "Categories");

            migrationBuilder.DropForeignKey(
                name: "FK_Languages_Tools_ToolID",
                table: "Languages");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Languages",
                table: "Languages");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Categories",
                table: "Categories");

            migrationBuilder.RenameTable(
                name: "Languages",
                newName: "Language");

            migrationBuilder.RenameTable(
                name: "Categories",
                newName: "Category");

            migrationBuilder.RenameIndex(
                name: "IX_Languages_ToolID",
                table: "Language",
                newName: "IX_Language_ToolID");

            migrationBuilder.RenameIndex(
                name: "IX_Categories_ToolID",
                table: "Category",
                newName: "IX_Category_ToolID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Language",
                table: "Language",
                column: "LanguageID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Category",
                table: "Category",
                column: "CategoryID");

            migrationBuilder.AddForeignKey(
                name: "FK_Category_Tools_ToolID",
                table: "Category",
                column: "ToolID",
                principalTable: "Tools",
                principalColumn: "ToolID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Language_Tools_ToolID",
                table: "Language",
                column: "ToolID",
                principalTable: "Tools",
                principalColumn: "ToolID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
