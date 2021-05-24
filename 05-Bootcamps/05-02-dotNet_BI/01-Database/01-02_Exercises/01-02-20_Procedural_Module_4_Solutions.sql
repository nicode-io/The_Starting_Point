-- Module 4

-- Exercice 4.1
-- Est-il possible de sortir d�une boucle WHILE en T-SQL ? Si oui comment ?
-- Testez cette possibilit� avec une boucle qui affiche le carr� des nombres de 1 � 20
-- mais qui sort de la boucle si la valeur vaut 12. 
-- R�ponse: on sort d'un while avant la fin de l'it�ration via 'BREAK'

DECLARE @a INT;
SET @a = 1

WHILE @a < 21
	BEGIN
		PRINT @a * @a
		SET @a += 1

		IF @a = 12
			BEGIN
				BREAK
			END
	END

-- Exercice 4.2
-- Comment mettre fin � une boucle en T-SQL ? Quels sont les 2 choses les plus
-- importantes ?
-- Cr�ez une boucle WHILE infinie. Cela fait-il planter SQLServer ? -- R�ponse: Il faut toujours pr�voir une fin par incr�mentation,-- oui la boucle infinie doit �tre hard-stopp�eDECLARE @b INT;
SET @b = 1

WHILE @b < 21
	BEGIN
		PRINT @b * @b
	END

-- Exercie 4.3
-- Afficher le carr� des nombres impairs allant de 1 � 50 sans prendre les nombres
-- compris entre 20 et 30. DECLARE @43 INTSET @43 = 0WHILE @43 < 51	BEGIN		IF @43 >20 OR @43 < 30			BEGIN			IF @43 % 2 = 1				BEGIN				PRINT @43 * @43				END			END		SET @43 += 1	END-- Exercice 4.4-- Ecrire une boucle WHILE qui affiche la phrase � Ceci est un nombre divisible par 3 :
-- [valeur_divisible_par_3] � pour tous les nombres divisibles par 3 entre 1 et 30 DECLARE @44 INT SET @44 = 1WHILE @44 < 31	BEGIN		IF @44 % 3 = 0			BEGIN				PRINT CONVERT(VARCHAR, @44) + ' est divisible par 3'			END		SET @44 += 1	END-- Exercice 4.5-- Ecrire une boucle WHILE qui affiche le d�compte des ann�es depuis aujourd�hui
-- jusqu�� 1983. Incr�menter �galement un compteur � afficher en fin de d�compte dans
-- la phrase � [compteur] ann�es ont �t� d�compt�es depuis [annee_en_cours] �. DECLARE @year INT = YEAR(GETDATE()), @count INT = 0WHILE @year > 1982	BEGIN		PRINT @year		PRINT CONVERT(VARCHAR, @count) + ' ann�es ont �t� d�compt�es depuis ' + CONVERT(VARCHAR, @year)		SET @year -= 1		SET @count += 1	END

-- Exercice 4.6
-- �crire une boucle qui, pour chaque it�ration, enregistre la date sous 5 formats
-- diff�rents (vous avez le choix des formats) dans une variable de type TABLE. Afficher
-- les donn�es r�colt�es � l��cran
-- Pensez ici aux formats de dates pour CONVERT ainsi qu�� la fonction RAND()� 

DECLARE @tableDate TABLE (numFormat INT, forme1 VARCHAR(50))
DECLARE @numFormat INT
DECLARE @e INT = 1 
DECLARE @test INT = 1
WHILE (@e <= 5)
    BEGIN
    SET @numFormat = (RAND()*14 ) +100
    
    WHILE (@test = 1)
        IF (EXISTS(SELECT numFormat FROM @tableDate WHERE numFormat = @numFormat))
            SET @numFormat = (RAND()*14 ) +100
        ELSE SET @test = 0
    INSERT INTO @tableDate VALUES (@numFormat, CONVERT(VARCHAR, GETDATE(), @numFormat))
    
    SET @test = 1
    SET @e += 1
    END
    SELECT * FROM @tableDate

-- Exercice 4.7
-- Ecrire une boucle simple qui permette d�afficher la phrase � [LAST_NAME de
-- l�employ�] est l�employ� dont l�id est [ID de l�employ�] � pour les 100 premiers
-- employ�s de la table � Person.Person �.
-- Faites l�exercice en d�clarant d�abord 2 variables distinctes de type table "tab_nom"
-- qui contiendront les valeurs pour LastName et BusinessEntityId (sans utiliser de
-- curseur) et l'autre "tab_id" qui contiendra le BusinessEntityId (Utiliser une jointure
-- pour afficher les r�sultats). Refaire ensuite l�exercice en stockant d�abord les valeurs
-- r�cup�r�es dans un curseur. 
USE AdventureWorks2008R2
GO

	-- Partie 1
DECLARE @tab_nom TABLE (num INT, nom NVARCHAR(50))
DECLARE @tab_id TABLE (id INT) 

INSERT INTO @tab_nom SELECT BusinessEntityID, LastName FROM Person.Person
INSERT INTO @tab_id SELECT BusinessEntityID FROM Person.Person

SELECT TOP 100 + ' est l''employ� dont l''id est ' + CONVERT(VARCHAR, I.id)
FROM @tab_nom N
JOIN @tab_id I
	ON N.num = I.id


	-- Partie 2 curseur
DECLARE CR_emp CURSOR 
FOR SELECT TOP 100 BusinessEntityID, LastName
FROM Person.Person

DECLARE @nom_emp NVARCHAR(50), @id_emp INT

OPEN CR_emp 

FETCH CR_emp INTO @id_emp, @nom_emp

WHILE ( @@FETCH_STATUS = 0)
	BEGIN
		PRINT @nom_emp + ' est l''employ� dont l''id est ' + CONVERT(VARCHAR, @id_emp)
	END

CLOSE CR_emp

DEALLOCATE CR_emp

