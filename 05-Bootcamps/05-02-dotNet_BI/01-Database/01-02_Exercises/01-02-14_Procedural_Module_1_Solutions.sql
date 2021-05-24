-- Exercice 1.1
-- 1.1 Se connecter � SQL Server et cr�er une nouvelle requ�te.
-- Cr�er une table ayant une colonne de type INTEGER, auto-incr�ment�e.
-- O� cette table s�est-elle cr��e ? Comment pouvez-vous la visualiser ? 
-- Se cr�e dans la DB active, par d�faut Master

CREATE TABLE oneDotOne (
	col1 INT IDENTITY
);

-- Exercice 1.2
-- Cr�er une nouvelle base de donn�es (CREATE DATABASE nom_de_votre_bd)
-- Cr�er une table contenant 2 colonnes dont une poss�de la contrainte UNIQUE, dans cette
-- base de donn�es. S�assurer que la table appara�t bien dans cette nouvelle base de donn�es
-- et pas dans la base de donn�es � MASTER � 

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
-- A l�aide de l�instruction � PRINT �, afficher le message � Bonjour, et bienvenue dans le
-- cours de Transact SQL ! �

PRINT 'Bonjour et bienvenue dans le cours de Transact SQL !'

-- Exercice 1.4
-- Afficher le m�me message qu�� l�exercice 1.3. mais en utilisant cette fois une table
-- temporaire

BEGIN TRANSACTION

SELECT ('Bonjour et bienvenue dans le cours de Transact SQL !') 
AS Message
INTO #tempTable

SELECT * FROM #tempTable

ROLLBACK TRANSACTION

-- Exercice 1.5
-- Ins�rer une ligne de valeurs dans la table cr��e au point 1.2.
-- Ins�rer une seconde ligne identique. Un message d�erreur doit appara�tre. A quelle ligne se
-- situe le message ? Comment trouver cette ligne instantan�ment ?
-- Comprenez-vous ce message ? Comment pouvez-vous faire pour le comprendre si
-- l�anglais n�est pas votre fort ? 

-- R�ponse: double clic sur l'erreur dans la console pour se 
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
-- A l�aide d�une instruction de simple � SELECT �, afficher les donn�es contenues dans la
-- table du point 1.2.
-- Stocker � pr�sent la requ�te SQL dans une variable que vous aurez pr�alablement d�clar�e
-- pour afficher son contenu � l�aide de la commande � EXEC �.
-- R�f�rez-vous aux informations du cours th�orique pour la d�claration de votre variable
-- que nous n�avons pas encore vu � ce stade. 
DECLARE @SQL VARCHAR(1000)
DECLARE @TABLE VARCHAR(100)

SET @TABLE = 'table_two'

SET @SQL = 'SELECT * FROM ' +  @TABLE

EXEC (@SQL)

