-- PROCEDURAL SQL MODULE 2

-- Exercice 2.1
-- À l’aide de la commande « PRINT », affichez le message « Le T-SQL, c’est bien
-- pratique ! » 

PRINT 'Le T-SQL, c''est bien pratique!'

-- Exercice 2.2
-- Créer à présent une variable de type « chaine de caractères ». Cette variable contiendra
-- la phrase affichée au point 2.1. Afficher le contenu de la variable via la commande
-- « PRINT »
		
	-- Compact declaration
DECLARE @myVariable VARCHAR(100) = 'Le T-SQL, c''est bien pratique!'

	-- Best practice
DECLARE @myVariableTwo VARCHAR(100) 
SET @myVariableTwo = 'Best practice is to DECLARE and SET in two lines'

PRINT @myVariable + ' ' + @myVariableTwo

-- Exercice 2.3
-- Déclarer une variable qui contiendra le nombre d’employés de la table
-- « Person.Person » de votre base de données AdventureWorks2008R2. Affichez le
-- contenu de cette variable

USE AdventureWorks2008R2
GO

DECLARE @myVariableThree INT

	-- Solution 1
SET @myVariableThree = (SELECT COUNT(*) FROM Person.Person)
PRINT @myVariableThree

	-- Solution 2
SELECT @myVariableThree =  COUNT(*) FROM Person.Person
PRINT @myVariableThree


-- Exercice 2.4
-- Déclarer une variable nommée « prenom_emp », du même type que les valeurs de la
-- colonne « FirstName » de la table Person.Person. Remplir cette variable avec le
-- prénom de M. Eminhizer et afficher le contenu de la variable. Vérifier que cette valeur
-- est bien « Terry » 

USE AdventureWorks2008R2
GO

DECLARE @prenom_emp NVARCHAR(50)

SELECT @prenom_emp = FirstName 
FROM Person.Person
WHERE LastName LIKE 'Eminhizer'
	AND FirstName LIKE 'Terry'

PRINT @prenom_emp

-- Exercie 2.5
-- Correction
DECLARE @x INT, @y INT, @z VARCHAR

	-- Pas d'erreur, juste une addition nulle
SET @z = @x + @y

PRINT @z

-- Exercice 2.6
-- Correction

DECLARE
@x VARCHAR,
@y VARCHAR(50),
@z INTeger

SET @x = 'La valeur de '
SET @y = @x + '@z' + ' est '

	-- Pas d'erreur, le retour est just NULL car @z est NULL
PRINT @y + CONVERT(VARCHAR, @z)

-- Exercice 2.7
-- Créer une variable nommée « date_du_jour » qui aura le format DATETIME et la
-- valeur de la date du jour. Afficher cette date. 

DECLARE @date_du_jour DATETIME 
SET @date_du_jour = GETDATE()
PRINT @date_du_jour

-- Exercice 2.8
-- À l’aide de plusieurs variables, afficher la phrase « M. [Nom] [Prénom] est l’employé
-- numéro [ID de l’employé], a été engagé le [date d’entrée en service de l’employé] et
-- est un [homme/femme] »
-- Les informations dont vous avez besoin se trouvent dans les tables « Person.Person »
-- et « HumanResources.Employee » 

USE AdventureWorks2008R2
GO

DECLARE @var_tab TABLE (gender NVARCHAR(50), lastName NVARCHAR(50), firstName NVARCHAR(50), employeId VARCHAR(50), hireDate VARCHAR(11))
DECLARE @result VARCHAR(200)
INSERT INTO @var_tab SELECT DISTINCT H.gender, P.LastName, P.FirstName, P.BusinessEntityID, H.HireDate
    FROM Person.Person P 
        JOIN HumanResources.Employee H 
        ON P.BusinessEntityID = H.BusinessEntityID
    WHERE P.LastName LIKE 'Eminhizer'
SET @result = (SELECT gender FROM @var_tab) + ' '
    + (SELECT lastName FROM @var_tab) + ' '
    + (SELECT firstName FROM @var_tab) 
    + ' est l’employé numéro '
    + (SELECT employeId FROM @var_tab)
    + ' , a été engagé le '
    + (SELECT hireDate FROM @var_tab)
    + ' et est un'
IF ((SELECT gender FROM @var_tab) LIKE 'M')
BEGIN
    SET @result = @result + ' homme'
END
ELSE 
BEGIN
    SET @result = @result + 'e femme'
END
PRINT @result

-- Exercice 2.9
-- Créer une variable entière contenant votre âge. Créer une seconde variable de type
-- chaine de caractères, contenant votre nom. Afficher maintenant la concaténation de ces
-- variables.
-- Cette opération pose-t-elle problème ? Avez-vous utilisé la fonction CONVERT dans
-- ce cas ? Aurait-elle été utile ? Si vous ne l’avez pas utilisée, n’hésitez pas à la faire !
-- Cela change-t-il la réponse ?

DECLARE @myAge INT, @myName VARCHAR(50)

SET @myAge = 37
SET @myName = 'Nicolas'
	-- Sans CAST ou CONVERT il y a une erreur (int != varchar)
PRINT CAST(@myAge AS VARCHAR) + ' ' + @myName

-- Exercice 2.10
-- Générer 3 variables entières. Afficher l’addition de ces trois variables dans une table
-- temporaire. La colonne utilisée pour l’affichage aura pour nom « Résultat » 

DECLARE @a INT = 2, @b INT = 5, @c INT = 6
SELECT @a + @b + @c AS Resultat INTO #temptwoT
SELECT * FROM #temptwoT

-- Exercie 2.11
-- Créer des variables pour contenir les données des colonnes « BusinessEntityID »,
-- « JobTitle » et « BirthDate » de la table HumanResources.Employee.
-- Afficher [BusinessEntityID] + ‘ ‘ + [JobTitle] + ‘ ‘ + [BirthDate]
-- Cela affiche-t-il le résultat attendu ? Comment résoudre ce problème ? 

USE AdventureWorks2008R2
GO

DECLARE @var_tabTwo TABLE (businessId VARCHAR(10), jobTitle VARCHAR(50), birthDate VARCHAR(50))
DECLARE @result VARCHAR(200)

INSERT INTO @var_tabTwo SELECT DISTINCT P.BusinessEntityID, H.JobTitle, H.BirthDate
    FROM Person.Person P 
        JOIN HumanResources.Employee H 
        ON P.BusinessEntityID = H.BusinessEntityID
	WHERE P.LastName LIKE 'Eminhizer'

SET @result = (SELECT businessId FROM @var_tabTwo) + ' '
    + (SELECT jobTitle FROM @var_tabTwo) + ' '
    + (SELECT birthDate FROM @var_tabTwo) 

PRINT @result

-- Exercice 2.12
-- Déclarer une table temporaire qui contiendra les données issues des colonnes Title,
-- FirstName et LastName de la table Person.Person.
-- Insérer les données dans la table temporaire. Afficher l’ensemble des données de la
-- table.
-- Déconnectez-vous de SQLServer et reconnectez-vous. La table temporaire existe-t-elle
-- toujours ?
-- A la fin de l’exercice, supprimer la table créée. 

USE AdventureWorks2008R2
GO

CREATE TABLE #tempTable (title VARCHAR(10), firstName VARCHAR(50), lastName VARCHAR(50))

INSERT INTO #tempTable SELECT P.Title, P.FirstName, P.LastName
    FROM Person.Person P 

SELECT * FROM #tempTable

DROP TABLE #tempTable

-- Exercice 2.13
-- Déclarer une variable temporaire de type table qui aura pour colonnes « TitreJob »,
-- « DateEmbauche », « HeuresVacances » et « HeuresMaladie ». Remplir cette variable
-- avec les données de tous les Techniciens de production WC60 de la table
-- HumanResources.Employee. Afficher le contenu de cette table grâce à un select. 
BEGIN TRANSACTION 

USE AdventureWorks2008R2
GO

DECLARE @var_tabThree TABLE (TitreJob NVARCHAR(50), DateEmbauche DATE, HeuresVacances SMALLINT, HeuresMaladie SMALLINT)

INSERT INTO @var_tabThree SELECT JobTitle, HireDate, VacationHours, SickLeaveHours 
		FROM HumanResources.Employee WHERE JobTitle LIKE 'Production Technician - WC60'

SELECT * FROM @var_tabThree

-- Exercice 2.14
-- Afficher maintenant les données de la variable de type table de l’exercice précédent
-- dans une table.

-- !! Il faut exécuter l'exercice 2.13 en même temps car sinon 
-- la variable @var_tabThree ne sera pas accessible
-- Si vous insérez un GO dans votre script, la variable disparait lors 
-- de l'exécution du GO

CREATE TABLE #two_fourteen (
	TitreJob NVARCHAR(50), 
	DateEmbauche DATE, 
	HeuresVacances SMALLINT, 
	HeuresMaladie SMALLINT
)

INSERT INTO #two_fourteen (TitreJob, DateEmbauche, HeuresVacances, HeuresMaladie) 
SELECT TitreJob, DateEmbauche, HeuresVacances, HeuresMaladie FROM @var_tabThree

SELECT * FROM #two_fourteen

ROLLBACK TRANSACTION

-- Exercice 2.15
-- Déclarer une table temporaire qui contiendra une colonne contenant le mois de
-- naissance, une deuxième contenant le nom, une troisième le prénom et une dernière la
-- ville où résident 5 de vos connaissances. Remplir cette table avec les données
-- attendues.
-- Déclarer une variable qui permettra de copier toutes les données de la table temporaire
-- que vous venez de créer, y transférer les données qu’elle contient et afficher le contenu
-- de la table temporaire et de la variable.
-- Modifier les 2 premières lignes de votre table temporaire avec les données de deux
-- autres personnes.
-- Les données ont-elles été modifiées aux deux endroits simultanément ? Pourquoi ?
-- Créer un nouveau script. Essayer d’afficher à nouveau les données des deux éléments
-- créés (table et variable). Existent-ils toujours ?
BEGIN TRANSACTION

CREATE TABLE #two_fifteen (
	moisNaissance INT,
	nom VARCHAR(50),
	prenom VARCHAR(50),
	ville VARCHAR(50)
)

INSERT INTO #two_fifteen 
VALUES (11, 'Denoel', 'Nicolas', 'Nivelles'),
	(01, 'Denoel', 'Nicolas', 'Bruxelles'),
	(05, 'Denoel', 'Nicolas', 'Leh'),
	(07, 'Denoel', 'Nicolas', 'Lisbonne'),
	(09, 'Denoel', 'Nicolas', 'Marrakech')

DECLARE @data TABLE ( 
			moisNaissance INT,
			nom VARCHAR(50),
			prenom VARCHAR(50),
			ville VARCHAR(50)
			)

INSERT INTO @data SELECT moisNaissance, nom, prenom, ville
				  FROM #two_fifteen

SELECT * FROM #two_fifteen
SELECT * FROM @data

UPDATE @data SET moisNaissance = 08 WHERE moisNaissance = 01
UPDATE @data SET moisNaissance = 12 WHERE moisNaissance = 07

SELECT * FROM #two_fifteen
SELECT * FROM @data

ROLLBACK TRANSACTION

-- Exercice 2.16
-- Quel est le nom de chacun des techniciens de productions WC60 ? Récupérer leur
-- nom, prénom et leur job dans une variable temporaire dont on affiche le résultat dans
-- une table temporaire. 

BEGIN TRANSACTION

USE AdventureWorks2008R2
GO

DECLARE @var_tab TABLE (nom VARCHAR(50))

INSERT INTO @var_tab SELECT P.LastName, P.FirstName, H.JobTitle
FROM Person.Person P 
	JOIN HumanResources.Employee H 
	ON P.BusinessEntityID = H.BusinessEntityID
WHERE H.JobTitle LIKE 'Production Technician - WC60'

CREATE TABLE #two_sixteen (nom VARCHAR(50))

INSERT INTO #two_sixteen SELECT nom FROM @var_tab

SELECT * FROM #two_sixteen

ROLLBACK TRANSACTION

