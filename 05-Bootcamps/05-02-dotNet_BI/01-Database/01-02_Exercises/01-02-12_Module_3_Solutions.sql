-- Exerciec 3.1
-- Inscrivez-vous comme étudiant dans la base de données DBSlide sans
-- spécifier les noms de colonnes dans lesquelles on insère les données 

USE DBSlide
GO
BEGIN TRANSACTION

INSERT INTO student 
VALUES(31, 'Nicolas', 'Denoël', 1983-07-11-1983, 'ndenoel', DEFAULT, 18, 'EG3050')

ROLLBACK TRANSACTION

-- Exercice 3.2
-- Inscrivez votre voisin comme étudiant dans la base de données DBSlide.
-- Votre voisin n’aura ni nom de famille, ni login, ni résultat annuel (valeurs NULL)

USE DBSlide
GO

BEGIN TRANSACTION

INSERT INTO student (student_id, first_name, birth_date, course_id)
VALUES(32, 'Holzkenner', 1971-07-11, 'EG2110')

ROLLBACK TRANSACTION

-- Exercice 3.3
-- Créer une table « section_archives » qui contiendra une copie des
-- données contenues dans la table section

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
-- Insérer un nouvel étudiant dans la base de données. Cet étudiant sera
-- inscrit dans la même section que Keanu Reeves, assistera au cours donné par le professeur
-- Zidda (les lettres ‘EG’ suivies des 4 derniers caractères du cours en question) mais n’aura
-- pas de login. Les valeurs de l’id de section et du cours devront être récupérées là où elles se
-- trouvent dans la base de données, sans les renseigner directement 

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
-- Insérer une nouvelle section dans la table section qui portera l’ID de
-- section 1530, qui aura l’intitulé « Administration des SI » et qui aura le même délégué que
-- la section dont l’ID est 1010 (vous ne connaissez pas la valeur de l’ID de ce délégué) 

USE DBSlide
GO
BEGIN TRANSACTION

INSERT INTO section
SELECT 1530, 'Administration des SI', delegate_id
FROM section WHERE section_id = 1010

SELECT * FROM section

ROLLBACK TRANSACTION

-- Exercice 3.6
-- Mettre à jour vos propres données pour vous inscrire au cours EG2210 
USE DBSlide
GO
BEGIN TRANSACTION

UPDATE student
SET course_id = 'EG2210'
WHERE student_id = 31

SELECT * FROM student

ROLLBACK TRANSACTION

-- Exercice 3.7 
-- Mettre à jour les données de votre voisin pour qu’il ait un nom. Ensuite,
-- refaire une mise à jour de la même ligne de données et attribuer à votre voisin un résultat
-- de 18/20 et un login correspondant à la concaténation de la première lettre de son prénom
-- et de la totalité de son nom, le tout en minuscules (sans connaître les valeurs réelles du
-- nom et du prénom utilisés)

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
-- Mettre à jour les données de la table « student » pour que tous les
-- étudiants de la section 1010 aient 15/20 

USE DBSlide
GO
BEGIN TRANSACTION

UPDATE student
SET year_result = 15
WHERE section_id = 1010

SELECT * FROM student

ROLLBACK TRANSACTION

-- Exercice 3.9
-- Nommer Keanu Reeves délégué de la section 1530 (sans connaître la
-- valeur réelle de l’ID de M. Reeves) 

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
-- Donner à la section 1530 le même nom de section et le même délégué
-- que la section 1320 (en allant rechercher ces valeurs via la requête, pas en les renseignant
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
-- Nommer Alyssa Milano déléguée de sa section. On ne connait pas la
-- valeur réelle de la section dans laquelle Mlle Milano est inscrite

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
-- Supprimer votre voisin de la base de données 

USE DBSlide
GO
BEGIN TRANSACTION

DELETE FROM student WHERE student_id = 32

ROLLBACK TRANSACTION

-- Exercice 3.13
-- Retirez-vous ainsi que Kim Basinger de la base de données. Comment se
-- fait-il que le système accepte cette manipulation alors que Mlle. Basinger est déléguée de
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
-- Supprimer tous les étudiants qui ont moins de 8/20 

USE DBSlide
GO
BEGIN TRANSACTION

SELECT * FROM student WHERE year_result < 8

DELETE FROM student
WHERE year_result < 8

SELECT * FROM student WHERE year_result < 8

ROLLBACK TRANSACTION

-- Exercice 3.15 (USELESS)
-- Supprimer tous les sections qui n’ont pas de professeur

USE DBSlide
GO
BEGIN TRANSACTION

SELECT * FROM course

DELETE FROM course WHERE professor_id = NULL

SELECT * FROM course 

ROLLBACK TRANSACTION

-- Exercice 3.16
-- Sans supprimer les clés étrangères au préalable,
-- supprimer les données de toutes les tables dans l’ordre suivant : sections => professeurs =>
-- étudiants => cours => grades. Il est possible qu’il faille d’abord modifier la structure des
-- tables (ALTER TABLE) afin d’accepter des valeurs nulles à certains endroits… Une
-- modification des données des tables sous-jacentes avant la suppression de certaines
-- données sera sûrement nécessaire également 

USE DBSlide
GO
BEGIN TRANSACTION

	-- Déclarer une variable de gestion d'erreurs
DECLARE @errors INT 
SET @errors = 0 

	-- Désactiver les contraintes
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

	-- Réactiver les contraintes
ALTER TABLE student NOCHECK CONSTRAINT FK_student_section
ALTER TABLE course NOCHECK CONSTRAINT FK_course_professor
ALTER TABLE professor NOCHECK CONSTRAINT FK_professor_section

	-- Affiche la variable dans la console
PRINT CAST(@errors)

	-- Checker si il y a eu des erreur
IF (@errors = 0)
	COMMIT -- Pas d'erreur => exécution (ACID)
ELSE
	ROLLBACK TRANSACTION -- Erreurs => annulation (ACID)