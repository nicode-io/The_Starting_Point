CREATE PROCEDURE dbo.DeleteStudent
	@ID int
AS
	BEGIN
		DELETE FROM Student
		WHERE ID = @ID
	END
