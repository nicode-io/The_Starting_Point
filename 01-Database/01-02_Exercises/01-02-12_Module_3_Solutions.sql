-- Exerciec 3.1
-- Inscrivez-vous comme �tudiant dans la base de donn�es DBSlide sans
-- sp�cifier les noms de colonnes dans lesquelles on ins�re les donn�es 

USE DBSlide
GO
BEGIN TRANSACTION

INSERT INTO student 
VALUES(31, 'Nicolas', 'Deno�l', 1983-07-11-1983, 'ndenoel', DEFAULT, 18, 'EG3050')

ROLLBACK TRANSACTION

-- Exercice 3.2
-- Inscrivez votre voisin comme �tudiant dans la base de donn�es DBSlide.
-- Votre voisin n�aura ni nom de famille, ni login, ni r�sultat annuel (valeurs NULL)

USE DBSlide
GO

BEGIN TRANSACTION

INSERT INTO student (student_id, first_name, birth_date, course_id)
VALUES(32, 'Holzkenner', 1971-07-11, 'EG2110')

ROLLBACK TRANSACTION

-- Exercice 3.3
-- Cr�er une table � section_archives � qui contiendra une copie des
-- donn�es contenues dans la table section

USE DBSlide
GO
BEGIN TRANSACTION

CREATE TABLE section_archive (
	section_archive_id INT PRIMARY KEY, 
	section_archive_name VARCHAR(50), 
	section_archive_delegate_id INT
	)
INSERT INTO section_archive
SELECT *
FROM section

SELECT * FROM section
SELECT * FROM section_archive

ROLLBACK TRANSACTION

-- Exercice 3.4 
-- Ins�rer un nouvel �tudiant dans la base de donn�es. Cet �tudiant sera
-- inscrit dans la m�me section que Keanu Reeves, assistera au cours donn� par le professeur
-- Zidda (les lettres �EG� suivies des 4 derniers caract�res du cours en question) mais n�aura
-- pas de login. Les valeurs de l�id de section et du cours devront �tre r�cup�r�es l� o� elles se
-- trouvent dans la base de donn�es, sans les renseigner directement 

USE DBSlide
GO
BEGIN TRANSACTION

INSERT INTO student (student_id, first_name, last_name, birth_date, section_id, year_result, course_id)
VALUES (34, 'Paul', 'Pix', '1983-07-11', 
		(SELECT S.section_id 
			FROM section S join professor P ON S.section_id = P.section_id
			WHERE P.professor_name LIKE 'ZIDDA'), 18,
		'EG' + RIGHT((SELECT C.course_id
			FROM course C join professor P ON C.professor_id = P.professor_id
			WHERE P.professor_name LIKE 'ZIDDA'), 4)
)

SELECT * FROM student WHERE student_id = 34

ROLLBACK TRANSACTION

-- Exercice 3.5
-- Ins�rer une nouvelle section dans la table section qui portera l�ID de
-- section 1530, qui aura l�intitul� � Administration des SI � et qui aura le m�me d�l�gu� que
-- la section dont l�ID est 1010 (vous ne connaissez pas la valeur de l�ID de ce d�l�gu�) 

USE DBSlide
GO
BEGIN TRANSACTION

INSERT INTO section
SELECT 1530, 'Administration des SI', delegate_id
FROM section WHERE section_id = 1010

SELECT * FROM section

ROLLBACK TRANSACTION

-- Exercice 3.6
-- Mettre � jour vos propres donn�es pour vous inscrire au cours EG2210 
USE DBSlide
GO
BEGIN TRANSACTION

UPDATE student
SET course_id = 'EG2210'
WHERE student_id = 31

SELECT * FROM student

ROLLBACK TRANSACTION

-- Exercice 3.7 
-- Mettre � jour les donn�es de votre voisin pour qu�il ait un nom. Ensuite,
-- refaire une mise � jour de la m�me ligne de donn�es et attribuer � votre voisin un r�sultat
-- de 18/20 et un login correspondant � la concat�nation de la premi�re lettre de son pr�nom
-- et de la totalit� de son nom, le tout en minuscules (sans conna�tre les valeurs r�elles du
-- nom et du pr�nom utilis�s)

USE DBSlide
GO
BEGIN TRANSACTION

UPDATE student
SET last_name = 'King', year_result = 18
WHERE student_id = 32

UPDATE student
SET login = LOWER
				(CONCAT
					(LEFT((SELECT first_name FROM student WHERE student_id = 32), 1), 
					(SELECT last_name FROM student WHERE student_id = 32)
				)
			)	
WHERE student_id = 32

SELECT * FROM student

ROLLBACK TRANSACTION

-- Exercice 3.8
-- Mettre � jour les donn�es de la table � student � pour que tous les
-- �tudiants de la section 1010 aient 15/20 

USE DBSlide
GO
BEGIN TRANSACTION

UPDATE student
SET year_result = 15
WHERE section_id = 1010

SELECT * FROM student

ROLLBACK TRANSACTION

-- Exercice 3.9
-- Nommer Keanu Reeves d�l�gu� de la section 1530 (sans conna�tre la
-- valeur r�elle de l�ID de M. Reeves) 

USE DBSlide
GO
BEGIN TRANSACTION

UPDATE section
SET delegate_id = student_id 
FROM student ST, section S
WHERE ST.first_name LIKE 'Keanu' AND ST.last_name = 'Reeves' AND S.section_id = 1530

SELECT * FROM student
SELECT * FROM section

ROLLBACK TRANSACTION

-- Exercice 3.10
-- Donner � la section 1530 le m�me nom de section et le m�me d�l�gu�
-- que la section 1320 (en allant rechercher ces valeurs via la requ�te, pas en les renseignant
-- directement) 

USE DBSlide
GO
BEGIN TRANSACTION

UPDATE section
SET section_name = (SELECT section_name FROM section WHERE section_id = 1320), 
	delegate_id =(SELECT delegate_id FROM section WHERE section_id = 1320)
WHERE section_id = 1530

SELECT * FROM section

ROLLBACK TRANSACTION

-- Exercice 3.11 
-- Nommer Alyssa Milano d�l�gu�e de sa section. On ne connait pas la
-- valeur r�elle de la section dans laquelle Mlle Milano est inscrite

USE DBSlide
GO
BEGIN TRANSACTION

SELECT * FROM section

UPDATE section
SET delegate_id = ST.student_id
FROM section S, student ST
WHERE ST.first_name LIKE 'Alyssa' 
	AND ST.last_name LIKE 'Milano' 
	AND S.section_id = ST.section_id

SELECT * FROM section
SELECT * FROM student 

ROLLBACK TRANSACTION

-- Exercice 3.12 
-- Supprimer votre voisin de la base de donn�es 

USE DBSlide
GO
BEGIN TRANSACTION

DELETE FROM student WHERE student_id = 32

ROLLBACK TRANSACTION

-- Exercice 3.13
-- Retirez-vous ainsi que Kim Basinger de la base de donn�es. Comment se
-- fait-il que le syst�me accepte cette manipulation alors que Mlle. Basinger est d�l�gu�e de
-- section ? 

USE DBSlide
GO
BEGIN TRANSACTION

SELECT * FROM section
SELECT * FROM student WHERE first_name = 'Kim' AND last_name = 'Basinger'

DELETE FROM student
WHERE first_name = 'Kim' AND last_name = 'Basinger'

SELECT * FROM section
SELECT * FROM student WHERE first_name = 'Kim' AND last_name = 'Basinger'

ROLLBACK TRANSACTION

-- Exercice 3.14
-- Supprimer tous les �tudiants qui ont moins de 8/20 

USE DBSlide
GO
BEGIN TRANSACTION

SELECT * FROM student WHERE year_result < 8

DELETE FROM student
WHERE year_result < 8

SELECT * FROM student WHERE year_result < 8

ROLLBACK TRANSACTION

-- Exercice 3.15 (USELESS)
-- Supprimer tous les sections qui n�ont pas de professeur

USE DBSlide
GO
BEGIN TRANSACTION

SELECT * FROM course

DELETE FROM course WHERE professor_id = NULL

SELECT * FROM course 

ROLLBACK TRANSACTION

-- Exercice 3.16
-- Sans supprimer les cl�s �trang�res au pr�alable,
-- supprimer les donn�es de toutes les tables dans l�ordre suivant : sections => professeurs =>
-- �tudiants => cours => grades. Il est possible qu�il faille d�abord modifier la structure des
-- tables (ALTER TABLE) afin d�accepter des valeurs nulles � certains endroits� Une
-- modification des donn�es des tables sous-jacentes avant la suppression de certaines
-- donn�es sera s�rement n�cessaire �galement 

USE DBSlide
GO
BEGIN TRANSACTION

	-- D�clarer une variable de gestion d'erreurs
DECLARE @errors INT 
SET @errors = 0 

	-- D�sactiver les contraintes
ALTER TABLE student NOCHECK CONSTRAINT FK_student_section
ALTER TABLE course NOCHECK CONSTRAINT FK_course_professor
ALTER TABLE professor NOCHECK CONSTRAINT FK_professor_section

	-- Effacer les tables
DELETE FROM section
	-- Ajoute l'erreur possible dans la variable
SET @errors = @errors + @@ERROR 

DELETE FROM professor
SET @errors = @errors + @@ERROR 

DELETE FROM student
SET @errors = @errors + @@ERROR 

DELETE FROM course
SET @errors = @errors + @@ERROR

DELETE FROM grade
SET @errors = @errors + @@ERROR 

	-- R�activer les contraintes
ALTER TABLE student NOCHECK CONSTRAINT FK_student_section
ALTER TABLE course NOCHECK CONSTRAINT FK_course_professor
ALTER TABLE professor NOCHECK CONSTRAINT FK_professor_section

	-- Affiche la variable dans la console
PRINT CAST(@errors)

	-- Checker si il y a eu des erreur
IF (@errors = 0)
	COMMIT -- Pas d'erreur => ex�cution (ACID)
ELSE
	ROLLBACK TRANSACTION -- Erreurs => annulation (ACID)