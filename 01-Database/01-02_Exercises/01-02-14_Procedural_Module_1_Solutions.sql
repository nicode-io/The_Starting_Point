-- Exercice 1.1
-- 1.1 Se connecter à SQL Server et créer une nouvelle requête.
-- Créer une table ayant une colonne de type INTEGER, auto-incrémentée.
-- Où cette table s’est-elle créée ? Comment pouvez-vous la visualiser ? 
-- Se crée dans la DB active, par défaut Master

CREATE TABLE oneDotOne (
	col1 INT IDENTITY
);

-- Exercice 1.2
-- Créer une nouvelle base de données (CREATE DATABASE nom_de_votre_bd)
-- Créer une table contenant 2 colonnes dont une possède la contrainte UNIQUE, dans cette
-- base de données. S’assurer que la table apparaît bien dans cette nouvelle base de données
-- et pas dans la base de données « MASTER » 

CREATE DATABASE nom_de_votre_db
GO

USE nom_de_votre_db
GO

	-- Solution 1
BEGIN TRANSACTION

CREATE TABLE table_one (
	col1 INT UNIQUE,
	col2 INT
);

ROLLBACK TRANSACTION

	-- Solution 2
BEGIN TRANSACTION

CREATE TABLE table_two (
	col1 INT,
	col2 INT,
	CONSTRAINT UK_col1 UNIQUE (col1)
);

ROLLBACK TRANSACTION

-- Exercice 1.3
-- A l’aide de l’instruction « PRINT », afficher le message « Bonjour, et bienvenue dans le
-- cours de Transact SQL ! »

PRINT 'Bonjour et bienvenue dans le cours de Transact SQL !'

-- Exercice 1.4
-- Afficher le même message qu’à l’exercice 1.3. mais en utilisant cette fois une table
-- temporaire

BEGIN TRANSACTION

SELECT ('Bonjour et bienvenue dans le cours de Transact SQL !') 
AS Message
INTO #tempTable

SELECT * FROM #tempTable

ROLLBACK TRANSACTION

-- Exercice 1.5
-- Insérer une ligne de valeurs dans la table créée au point 1.2.
-- Insérer une seconde ligne identique. Un message d’erreur doit apparaître. A quelle ligne se
-- situe le message ? Comment trouver cette ligne instantanément ?
-- Comprenez-vous ce message ? Comment pouvez-vous faire pour le comprendre si
-- l’anglais n’est pas votre fort ? 

-- Réponse: double clic sur l'erreur dans la console pour se 
-- placer dans le script au niveau de l'erreur

USE nom_de_votre_db
GO

BEGIN TRANSACTION

INSERT INTO table_two
VALUES (42, 45)

INSERT INTO table_two
VALUES (42, 45)

ROLLBACK TRANSACTION

-- Exercie 1.6
-- A l’aide d’une instruction de simple « SELECT », afficher les données contenues dans la
-- table du point 1.2.
-- Stocker à présent la requête SQL dans une variable que vous aurez préalablement déclarée
-- pour afficher son contenu à l’aide de la commande « EXEC ».
-- Référez-vous aux informations du cours théorique pour la déclaration de votre variable
-- que nous n’avons pas encore vu à ce stade. 
DECLARE @SQL VARCHAR(1000)
DECLARE @TABLE VARCHAR(100)

SET @TABLE = 'table_two'

SET @SQL = 'SELECT * FROM ' +  @TABLE

EXEC (@SQL)

