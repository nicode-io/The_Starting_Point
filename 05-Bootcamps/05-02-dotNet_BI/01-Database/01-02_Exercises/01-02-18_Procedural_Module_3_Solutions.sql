-- Module 3 - Conditionnal Statement

-- Exercice 3.1
-- Pour l�employ� num�ro 21 de la table HumanResources.Employee, examinez sa date
-- d�arriv�e dans l�entreprise ainsi que sa date de naissance. Si son anciennet� est de plus
-- de 9 ans, afficher la phrase � L�employ� 21 est un Senior �. Sinon, il faudra signaler
-- qu�il s�agit d�un Junior. USE AdventureWorks2008R2
GODECLARE @entry_date DATE, @birth_date DATESET @entry_date = (SELECT HireDate FROM HumanResources.Employee WHERE BusinessEntityID = 21)SET @birth_date = (SELECT BirthDate FROM HumanResources.Employee WHERE BusinessEntityID = 21)IF (YEAR(GETDATE()) - YEAR(@entry_date) > 9)	BEGIN 		PRINT 'L''employ� 21 est un Senior'	ENDELSE	BEGIN		PRINT 'L''employ� 21 est un Junior'	END-- Exercice 3.2-- S�il existe dans la table Person.Person, quelqu�un du nom de � Zugelder �, affichez
-- son nom complet (Pr�nom, deuxi�me nom, nom de famille)
-- Sinon, signaler qu�il n�existe personne portant ce nom ! USE AdventureWorks2008R2
GODECLARE @first_name VARCHAR(50), @middle_name VARCHAR(50), @last_name VARCHAR(50)IF (EXISTS (SELECT * FROM Person.Person WHERE LastName LIKE 'Zugelder'))	BEGIN		SELECT 			@first_name = FirstName,			@middle_name = MiddleName, 			@last_name = LastName 		FROM Person.Person		WHERE LastName LIKE 'Zugelder'		PRINT @first_name + ' ' + @middle_name + ' ' + @last_name	ENDELSE	BEGIN		PRINT 'Aucune personne ne porte ce nom'	END-- Exercice 3.3-- Si le nombre de femmes est plus important que le nombre d�hommes, affichez, dans
-- une table, � Les femmes domineront le monde ! � Sinon, indiquez � La guerre des
-- sexes n�est pas finie� �
-- Afficher le contenu de votre table

USE AdventureWorks2008R2
GO

CREATE TABLE #tempTable (result VARCHAR(50));

IF (
	(SELECT COUNT(*) FROM HumanResources.Employee WHERE Gender LIKE 'F') > 
	(SELECT COUNT(*) FROM HumanResources.Employee WHERE Gender LIKE 'M') 
)
	BEGIN 
		INSERT INTO #tempTable VALUES ('Les femmes domineront le monde !')
		SELECT * FROM #tempTable
	END
ELSE
	BEGIN
		INSERT INTO #tempTable VALUES ('Pas trop fan du patriarcat')
		SELECT * FROM #tempTable
	END

-- Exercice 3.4
-- Comparer le nombre d�heures d�absence des employ�s 21 et 27. Si le nombre d�heures
-- de repos de l�un ET son nombre d�heures de vacances sont plus importants que ceux
-- de l�autre, signalez-le par un message � l��cran ! Sinon, si le nombre d�heures de repos
-- de l�un est plus grand que celui de l�autre, mais que son nombre d�heures de vacances
-- est inf�rieur, signaler que tout va bien. Dans les autres cas, il n�y a rien � signaler.
-- Choisissez vous-m�me du quel x@employ� vous partirez pour faire la comparaison. 
USE AdventureWorks2008R2
GO

DECLARE @21_Sick SMALLINT, @21_holidays SMALLINT, @27_Sick SMALLINT, @27_Holidays SMALLINT

SELECT @21_sick = SickLeaveHours, @21_holidays = VacationHours FROM HumanResources.Employee WHERE BusinessEntityID = 21
SELECT @27_sick = SickLeaveHours, @21_holidays = VacationHours FROM HumanResources.Employee WHERE BusinessEntityID = 27

IF (@21_sick > @27_sick AND @21_sick > @27_sick) 
	OR (@21_sick < @27_sick AND @21_sick < @27_sick)
	BEGIN
		PRINT 'Message 1'
	END
IF (@21_sick > @27_sick AND @21_holidays < @27_holidays OR
	@21_sick < @27_sick AND @21_holidays > @27_holidays)
	BEGIN
		PRINT 'Tout va bien'
	END 
ELSE 
	BEGIN
		PRINT ' '
	END

-- Exercice 3.5
-- Afficher, dans une table temporaire dont le nom de la colonne sera � Suivi_employ� �
-- le statut d�un employ� analys�. Selon le cas, si l�employ� est n� apr�s l�an 2000,
-- cela est vraisemblablement impossible. Dans le cas o� l�employ� est arriv� dans
-- l�entreprise entre 2017 et 2018, il est un Junior. Entre 2012 et 2016 il est un Qualified.
-- Entre 2007 et 2011, il est Confirmed, sinon, c�est un President ! Traitez un employ�
-- au hasard, de la table HumanResources.Employee. Un select vers votre table
-- temporaire suffit ! USE AdventureWorks2008R2
GO
CREATE TABLE #34_temp (suivi  VARCHAR(50))DECLARE @status VARCHAR(50)INSERT INTO  #34_tempSELECT 	CASE			WHEN YEAR(BirthDate) > 2000 THEN 'Millenials Power'		WHEN YEAR(HireDate) BETWEEN 2017 AND 2018 THEN 'Junior'		WHEN YEAR(HireDate) BETWEEN 2012 AND 2016 THEN 'Qualified'		WHEN YEAR(HireDate) BETWEEN 2007 AND 2011 THEN 'Confirmed'		ELSE 'President'	ENDFROM HumanResources.EmployeeWHERE BusinessEntityID = 15SELECT * FROM #34_tempDROP TABLE #34_temp-- Exercice 3.6-- En fonction de l��ge de l�employ� trait�, pr�venez-nous s�il sera bient�t � la retraite ou
-- pas via une phrase affich�e � l��cran � Attention, retraite imminente pour
-- [nom_employ�] ! � ou justement, � [nom_employ�] a encore de longues ann�es � faire
-- chez nous ! �
-- Utilisez ici un CASE pour fournir la phrase voulue. USE AdventureWorks2008R2
GODECLARE @phrase VARCHAR(100)SELECT @phrase = 	CASE		WHEN (YEAR(GETDATE() - YEAR(BirthDate)) > 64) 			THEN 'Retraite imminente pour ' + PP.LastName + ' !'		ELSE PP.LastName + ' a encore de longues ann�es � faire chez nous!'	ENDFROM Person.Person PPJOIN HumanResources.Employee HE	ON PP.BusinessEntityID = HE.BusinessEntityIDWHERE PP.BusinessEntityID = 85PRINT @phrase-- Exercice 3.7-- Enregistrez dans une variable de type TABLE, le nombre d�occurrence des noms
-- Coleman, Powell, Suarez et Vance. Vous trouverez ces noms dans la table
-- Person.Person.
-- Il est possible de faire l�op�ration en une seule requ�te, cependant faites le �galement
-- en cr�ant pour chaque �l�ment � transf�rer, une variable suppl�mentaire qui contiendra
-- le nombre de personnes qui portent le m�me nom. BEGIN TRANSACTIONUSE AdventureWorks2008R2
GODECLARE @37_table TABLE (	nom NVARCHAR(50),	occurences INT)INSERT INTO @37_tableSELECT LastName, COUNT(*)FROM Person.PersonWHERE LastName IN ('coleman', 'powell', 'suarez', 'vance')GROUP BY LastNameSELECT * FROM @37_tableROLLBACK TRANSACTION-- Exercice 3.8-- S�il existe plus de 20 employ�s n�s avant 1975, alors dans le cas o� ils ont plus de 80
-- heures d�absence totale (vacances et maladie), afficher dans une table temporaire,
-- qu�ils sont en exc�dant. Dans le cas o� ce nombre est entre 60 et 80, ils sont dans la
-- norme, dans le cas o� ils sont entre 40 et 60 heures d�absence, alors ils sont de bons
-- �l�ments !
-- Faites l�exercice �galement s�il existe plus de 20 employ�s n�s entre 1980 et 1990.
USE AdventureWorks2008R2
GOBEGIN TRANSACTIONCREATE TABLE #tabTempAbsence (Id int, anneeNaissance int, statut varchar(50))
IF(
    ((SELECT COUNT(*) 
        FROM HumanResources.Employee 
        WHERE YEAR(Birthdate)<1975)>20
    ) 
    OR
    ((SELECT COUNT(*) 
        FROM HumanResources.Employee 
        WHERE YEAR(Birthdate) Between 1980 AND 1990) > 20
    )
)
    BEGIN
        INSERT INTO #tabTempAbsence
            SELECT BusinessEntityID, YEAR(BirthDate),
                CASE
                    When (VacationHours + SickLeaveHours) >79 then 'En exc�dant'
                    When (VacationHours + SickLeaveHours) BETWEEN 60 and 80 then 'Dans la norme'
                    When (VacationHours + SickLeaveHours) BETWEEN 40 and 60 then 'Bon �l�ment'
                    Else 'N/A'
                END
            FROM HumanResources.Employee
            WHERE (YEAR(BirthDate) <1975) OR (YEAR(Birthdate)BETWEEN 1980 AND 1990)
    END
SELECT * FROM #tabTempAbsence
DROP TABLE #tabTempAbsence

ROLLBACK TRANSACTION
