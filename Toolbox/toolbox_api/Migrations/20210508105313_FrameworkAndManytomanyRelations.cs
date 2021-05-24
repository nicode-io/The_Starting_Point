using Microsoft.EntityFrameworkCore.Migrations;

namespace toolbox_api.Migrations
{
    public partial class FrameworkAndManytomanyRelations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tools_Categories_CategoryID",
                table: "Tools");

            migrationBuilder.DropForeignKey(
                name: "FK_Tools_Languages_LanguageID",
                table: "Tools");

            migrationBuilder.DropIndex(
                name: "IX_Tools_CategoryID",
                table: "Tools");

            migrationBuilder.DropIndex(
                name: "IX_Tools_LanguageID",
                table: "Tools");

            migrationBuilder.DropColumn(
                name: "CategoryID",
                table: "Tools");

            migrationBuilder.DropColumn(
                name: "LanguageID",
                table: "Tools");

            migrationBuilder.CreateTable(
                name: "CategoryTool",
                columns: table => new
                {
                    CategoriesCategoryID = table.Column<int>(type: "INTEGER", nullable: false),
                    ToolsToolID = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoryTool", x => new { x.CategoriesCategoryID, x.ToolsToolID });
                    table.ForeignKey(
                        name: "FK_CategoryTool_Categories_CategoriesCategoryID",
                        column: x => x.CategoriesCategoryID,
                        principalTable: "Categories",
                        principalColumn: "CategoryID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CategoryTool_Tools_ToolsToolID",
                        column: x => x.ToolsToolID,
                        principalTable: "Tools",
                        principalColumn: "ToolID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Framework",
                columns: table => new
                {
                    FrameworkID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ShortName = table.Column<string>(type: "TEXT", nullable: true),
                    LongName = table.Column<string>(type: "TEXT", nullable: true),
                    LanguageID = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Framework", x => x.FrameworkID);
                    table.ForeignKey(
                        name: "FK_Framework_Languages_LanguageID",
                        column: x => x.LanguageID,
                        principalTable: "Languages",
                        principalColumn: "LanguageID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LanguageTool",
                columns: table => new
                {
                    LanguagesLanguageID = table.Column<int>(type: "INTEGER", nullable: false),
                    ToolsToolID = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LanguageTool", x => new { x.LanguagesLanguageID, x.ToolsToolID });
                    table.ForeignKey(
                        name: "FK_LanguageTool_Languages_LanguagesLanguageID",
                        column: x => x.LanguagesLanguageID,
                        principalTable: "Languages",
                        principalColumn: "LanguageID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LanguageTool_Tools_ToolsToolID",
                        column: x => x.ToolsToolID,
                        principalTable: "Tools",
                        principalColumn: "ToolID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CategoryFramework",
                columns: table => new
                {
                    CategoriesCategoryID = table.Column<int>(type: "INTEGER", nullable: false),
                    FrameworksFrameworkID = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoryFramework", x => new { x.CategoriesCategoryID, x.FrameworksFrameworkID });
                    table.ForeignKey(
                        name: "FK_CategoryFramework_Categories_CategoriesCategoryID",
                        column: x => x.CategoriesCategoryID,
                        principalTable: "Categories",
                        principalColumn: "CategoryID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CategoryFramework_Framework_FrameworksFrameworkID",
                        column: x => x.FrameworksFrameworkID,
                        principalTable: "Framework",
                        principalColumn: "FrameworkID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FrameworkTool",
                columns: table => new
                {
                    FrameworksFrameworkID = table.Column<int>(type: "INTEGER", nullable: false),
                    ToolsToolID = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FrameworkTool", x => new { x.FrameworksFrameworkID, x.ToolsToolID });
                    table.ForeignKey(
                        name: "FK_FrameworkTool_Framework_FrameworksFrameworkID",
                        column: x => x.FrameworksFrameworkID,
                        principalTable: "Framework",
                        principalColumn: "FrameworkID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FrameworkTool_Tools_ToolsToolID",
                        column: x => x.ToolsToolID,
                        principalTable: "Tools",
                        principalColumn: "ToolID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CategoryFramework_FrameworksFrameworkID",
                table: "CategoryFramework",
                column: "FrameworksFrameworkID");

            migrationBuilder.CreateIndex(
                name: "IX_CategoryTool_ToolsToolID",
                table: "CategoryTool",
                column: "ToolsToolID");

            migrationBuilder.CreateIndex(
                name: "IX_Framework_LanguageID",
                table: "Framework",
                column: "LanguageID");

            migrationBuilder.CreateIndex(
                name: "IX_FrameworkTool_ToolsToolID",
                table: "FrameworkTool",
                column: "ToolsToolID");

            migrationBuilder.CreateIndex(
                name: "IX_LanguageTool_ToolsToolID",
                table: "LanguageTool",
                column: "ToolsToolID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CategoryFramework");

            migrationBuilder.DropTable(
                name: "CategoryTool");

            migrationBuilder.DropTable(
                name: "FrameworkTool");

            migrationBuilder.DropTable(
                name: "LanguageTool");

            migrationBuilder.DropTable(
                name: "Framework");

            migrationBuilder.AddColumn<int>(
                name: "CategoryID",
                table: "Tools",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "LanguageID",
                table: "Tools",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Tools_CategoryID",
                table: "Tools",
                column: "CategoryID");

            migrationBuilder.CreateIndex(
                name: "IX_Tools_LanguageID",
                table: "Tools",
                column: "LanguageID");

            migrationBuilder.AddForeignKey(
                name: "FK_Tools_Categories_CategoryID",
                table: "Tools",
                column: "CategoryID",
                principalTable: "Categories",
                principalColumn: "CategoryID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Tools_Languages_LanguageID",
                table: "Tools",
                column: "LanguageID",
                principalTable: "Languages",
                principalColumn: "LanguageID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
