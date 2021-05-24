CREATE TABLE [dbo].[Student]
(
	ID INT NOT NULL PRIMARY KEY IDENTITY, 
    FirstName VARCHAR(50) NULL, 
    LastName VARCHAR(50) NULL, 
    BirthDate DATETIME2 NULL, 
    YearResult INT NULL, 
    SectionID INT NULL, 
    Active BIT NULL DEFAULT 1, 
    CONSTRAINT FK_Student_Section FOREIGN KEY (SectionID) REFERENCES Section(ID), 
    CONSTRAINT CK_YearResult CHECK (YearResult > 0 AND YearResult < 20), 
    CONSTRAINT CK_BirthDate CHECK (BirthDate >= '1930-01-01')
)

GO

CREATE TRIGGER dbo.TR_DeleteStudent_UpdateStudent
    ON dbo.Student
    INSTEAD OF DELETE
    AS
    BEGIN
        SET NoCount ON
        UPDATE Student SET Active = 0  
        WHERE ID IN(SELECT ID FROM deleted WHERE Active = 1)
    END