CREATE PROCEDURE dbo.AddSection
	@SectionID int,
	@SectionName varchar(50)
AS
	BEGIN
		INSERT INTO Section
		VALUES (
			@SectionId,
			@SectionName
		)
	END
