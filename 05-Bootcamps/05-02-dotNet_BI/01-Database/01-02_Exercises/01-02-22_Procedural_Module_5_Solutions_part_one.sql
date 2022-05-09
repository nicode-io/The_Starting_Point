-- MODULE 5 --
-- 5.1 --
-- Cr�er une proc�dure qui remplace la fonction de r�cup�ration de la date en l�affichant
-- directement � l��cran. L�appel de cette proc�dure permet donc d�un seul coup de
-- r�cup�rer la date et l�heure du syst�me, sans passer par � getDate() � ou
-- � CURRENT_TIMESTAMP � 

-- PURGE
IF OBJECT_ID('dbo.dayDate', 'P') IS NOT NULL 
	DROP PROCEDURE dbo.dayDate
GO

--	CREATE
CREATE PROCEDURE dbo.dayDate
AS
BEGIN
	SELECT GETDATE()
	PRINT GETDATE()
END 
GO

-- EXECUTE
EXECUTE dbo.dayDate


-- 5.2 ---
-- Cr�er une proc�dure qui affichera la phrase � Nous sommes le [Date_du_jour] et il est
-- actuellement [heure_du_moment] �. 

-- PURGE
IF OBJECT_ID('dbo.printDate', 'P') IS NOT NULL
	DROP PROCEDURE dbo.printDate
GO

-- CREATE
CREATE PROCEDURE dbo.printDate
AS
BEGIN
	PRINT('Nous sommes le ' + CONVERT(VARCHAR, DAY(GETDATE())) + '. Il est actuellement ' + CONVERT(VARCHAR, CONVERT(TIME, GETDATE())))
END
GO

-- EXECUTE
EXECUTE dbo.printDate


-- 5.3 ---
-- Cr�er une proc�dure qui ins�re dans une table temporaire les donn�es vous concernant.
-- Ces donn�es sont fournies en param�tres.

-- PURGE
IF OBJECT_ID('dbo.ownDataTable', 'P') IS NOT NULL
	DROP PROCEDURE dbo.ownDataTable
GO

-- CREATE
CREATE PROCEDURE dbo.ownDataTable 
	@lastName VARCHAR(50),
	@country VARCHAR(50)
AS
BEGIN 
	CREATE TABLE #dataList (
		lastName VARCHAR(50),
		country VARCHAR(50)
	)

	INSERT INTO #dataList VALUES (
		@lastName,
		@country
	)
	SELECT * FROM #dataList
END
GO

-- EXECUTE
EXECUTE dbo.ownDataTable "Nicolas", "Belgium"


-- 5.5 ---
-- Cr�er une fonction qui renvoie le nombre de lignes contenues dans la table
-- HumanResources.Employee. 

USE AdventureWorks2008R2
GO

-- PURGE
IF OBJECT_ID('dbo.countEmployee', 'FN') IS NOT NULL
	DROP FUNCTION dbo.countEmployee
GO

-- CREATE
CREATE FUNCTION dbo.countEmployee ()

RETURNS INT

BEGIN
	DECLARE @myVariable INT
	SET @myVariable = (SELECT COUNT(*) FROM HumanResources.Employee)
	RETURN @myVariable
END
GO

-- EXECUTE
PRINT dbo.countEmployee()
SELECT dbo.countEmployee()


-- 5.9 ---
-- Cr�er une proc�dure qui permet d�afficher la phrase � X employ�s travaillent au poste
-- de [JobTitle de HumanResources.Employees] �
-- Ce nombre X sera renvoy� par une fonction que vous aurez pr�alablement cr��e et qui
-- demande en param�tre de quel Job il s�agit, param�tre pass� par la proc�dure
-- appelante.
-- Tester la proc�dure pour plusieurs JobTitle diff�rents au sein de la proc�dure. 

USE AdventureWorks2008R2
GO

-- PURGE
IF OBJECT_ID('dbo.generateEmployeeNumber', 'FN') IS NOT NULL
	DROP FUNCTION dbo.generateEmployeeNumber
GO
IF OBJECT_ID('dbo.employeeNumber', 'P') IS NOT NULL
	DROP PROCEDURE dbo.employeeNumber
GO

-- CREATE
CREATE FUNCTION generateEmployeeNumber (@jobTitle NVARCHAR(50))

RETURNS INT
BEGIN
	DECLARE @myVariable INT
	SET @myVariable = (
		SELECT COUNT(*) 
		FROM HumanResources.Employee
		WHERE JobTitle LIKE @jobTiTle
	)
	RETURN @myVariable
END
GO

CREATE PROCEDURE dbo.employeeNumber
	@job NVARCHAR(50)
AS
BEGIN 
	DECLARE @xCount INT
	SET @xCount = dbo.generateEmployeeNumber(@job)

	PRINT(CONVERT(VARCHAR, @xCount) + ' employ�s travaillent au poste de ' + @job )
END
GO

-- EXECUTE
EXECUTE dbo.employeeNumber 'Design Engineer'
EXECUTE dbo.employeeNumber 'Marketing Assistant'
EXECUTE dbo.employeeNumber 'Production Technician - WC60'


-- 5.10 --- 
-- Cr�er une proc�dure qui affiche le nom des produits (Name de Production.Product) et
-- le prix (ListPrice de Production.Product) des produits appartenant � la m�me souscat�gorie que le nom de cat�gorie (Name de Production.ProductSubcategory) pass� en
-- param�tres � la proc�dure et ayant un prix (ListPrice de Production.Product) inf�rieur
-- � un prix �galement pass� en param�tres.
-- Tester la proc�dure dans le cas de tous les articles ayant un rapport avec � %Bikes% �
-- et un prix inf�rieur � 700.
-- La proc�dure renverra �galement une valeur en mode OUTPUT qui informera du
-- nombre total de lignes non-affich�es par la proc�dure.

USE AdventureWorks2008R2
GO

-- PURGE
IF OBJECT_ID('dbo.productCompare', 'P') IS NOT NULL
	DROP PROCEDURE dbo.productCompare
GO

-- CREATE
CREATE PROCEDURE dbo.productCompare
	@prodCat VARCHAR(50),
	@prodPrice INTEGER
AS
BEGIN
	SET NOCOUNT ON 

	SELECT pr.Name, pr.ListPrice, ps.ProductSubcategoryID
	FROM Production.Product AS pr
	JOIN Production.ProductSubcategory AS ps
		ON pr.ProductSubcategoryID = ps.ProductSubcategoryID
	WHERE ps.Name LIKE @prodCat 
		AND pr.ListPrice < @prodPrice

	SELECT @@ROWCOUNT AS 'Line Displayed'
END
GO

-- EXECUTE
EXECUTE dbo.productCompare '%Bikes%', 700


--	5.6
-- Cr�er une fonction qui renvoie le nom du produit (Name de Production.Product) dont
-- le prix (StandardCost de Production.ProductCostHistory) a �t� modifi� le plus grand
-- nombre de fois. S�il y a ex-aequo, il faudra renvoyer une phrase concat�n�e de
-- l�ensemble des noms ! 

USE AdventureWorks2008R2
GO

-- PURGE
IF OBJECT_ID('dbo.MaxProduit', 'FN') IS NOT NULL
	DROP FUNCTION dbo.MaxProduit 
GO

-- CREATE
CREATE FUNCTION dbo.MaxProduit()
RETURNS varchar(max) 
AS
BEGIN
	DECLARE @tabNomsProduits TABLE(
		nom_prod nvarchar(50)
	)
	DECLARE @valeurRetour varchar(max)
	
	INSERT INTO @tabNomsProduits
	SELECT pp.Name
	FROM Production.Product pp
	WHERE		(SELECT COUNT(*) FROM Production.ProductCostHistory
				WHERE ProductID = pp.ProductId
				)
				=
				(SELECT MAX(nbr) FROM 
					(SELECT COUNT(*) AS nbr
					FROM Production.ProductCostHistory
					GROUP BY ProductID) 
				as T)
	-- si 1 produit affiche le produit
	IF(SELECT COUNT(*) FROM @tabNomsProduits) = 1
	BEGIN
		SELECT @valeurRetour = nom_prod FROM @tabNomsProduits
	END
	-- sinon plusieurs : concat�ner un virgule entre chaque produit
	ELSE
	BEGIN
		DECLARE CR_NomsProduits CURSOR 
		FOR SELECT * FROM @tabNomsProduits

		DECLARE @nom_temp nvarchar(50)
		DECLARE @premiere int

		SET @premiere = 1
		SET @valeurRetour = 'Noms des produits : '

		OPEN CR_NomsProduits 
		FETCH CR_NomsProduits  into @nom_temp

		WHILE @@FETCH_STATUS = 0
		BEGIN
			IF @premiere = 1
			BEGIN
				SET @valeurRetour = @valeurRetour + @nom_temp
				SET @premiere = 0
			END
			ELSE
			BEGIN
				SET @valeurRetour = @valeurRetour + ',' + @nom_temp
			END

			FETCH CR_NomsProduits  into @nom_temp
		END

		CLOSE CR_NomsProduits
		DEALLOCATE CR_NomsProduits


	END
	RETURN @valeurRetour
END
GO

-- EXECUTE
DECLARE @affiche varchar(max)
SET @affiche = dbo.MaxProduit()
PRINT @affiche