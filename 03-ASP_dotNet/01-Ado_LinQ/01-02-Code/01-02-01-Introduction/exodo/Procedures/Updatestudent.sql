CREATE PROCEDURE dbo.Updatestudent
	@ID int,
	@YearResult int,
	@SectionId int
AS
	BEGIN
		UPDATE Student
		SET YearResult = @YearResult,
			SectionId = @SectionId
		WHERE ID = @ID
	END
