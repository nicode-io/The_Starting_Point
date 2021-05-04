CREATE PROCEDURE dbo.AddStudent
	@LastName varchar(50),
	@FirstName varchar(50),
	@BirthDate datetime2(7),
	@YearResult int,
	@SectionID int,
	@Active bit
AS
	BEGIN
		INSERT INTO Student
		OUTPUT inserted.ID 
		VALUES (
			@LastName,
			@FirstName,
			@BirthDate,
			@YearResult,
			@SectionID,
			@Active
		)
	END
