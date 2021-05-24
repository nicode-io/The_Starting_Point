--
-- Module 2 - Partie I : SELECT ... FROM ...
--


-- Exercice 2.1.1
SELECT last_name, first_name AS [F name]
FROM student;

SELECT last_name lname, first_name AS fname
FROM student;

SELECT last_name + ' ' + first_name AS name
FROM student;

SELECT last_name + first_name AS name, year_result * 10 result
FROM student;

-- Exercice 2.1.2
SELECT last_name, birth_date, login, year_result
FROM student

-- Exercice 2.1.3
SELECT last_name + ' ' + first_name [Nom complet],
	student_id, birth_date
FROM student

-- Exercice 2.1.4
SELECT CONVERT(VARCHAR, student_id) + '|' 
	+ first_name + '|' + last_name + '|'
	+ CONVERT(VARCHAR, birth_date) + '|'
	+ login + '|' + CONVERT(VARCHAR, year_result)
	AS 'Info etudiant'
FROM student


--
-- Module 2 - Partie II : SELECT ... FROM ... WHERE ... ORDER BY
--

-- Exercice 2.2.1
--- Ecrire une requ�te pour pr�senter le login et le r�sultat de tous les �tudiants
--- ayant obtenu un r�sultat annuel sup�rieur � 16

SELECT login, year_result
FROM student
WHERE year_result > 16

-- Exercice 2.2.2
--- Ecrire une requ�te pour pr�senter le nom et l'id de section des �tudiants dont
--- le pr�nom est Georges

SELECT last_name, student_id
FROM student
WHERE first_name LIKE 'Georges'

-- Exercice 2.2.3
--- Ecrire une requ�te pour pr�senter le nom et le r�sultat annuel de tous les
--- Etudiants ayant obtenu un r�sultat annuel compris entre 12 et 16

SELECT last_name, year_result
FROM student
WHERE year_result BETWEEN 12 AND 16

-- Exercice 2.2.4
--- Ecrire une requ�te pour pr�senter le nom, l'id de section et le r�sultat annuel
--- de tous les �tudiants qui ne font pas partie des sections 1010, 1020 et 1110 

SELECT last_name, section_id, year_result
FROM student
WHERE section_id NOT IN(1010, 1020, 1110)

-- Exercice 2.2.5
--- Ecrire une requ�te pour pr�senter le nom et l'id de section de tous les
--- Etudiants qui ont un nom de famille qui termine par "r"

SELECT last_name, section_id
FROM student
WHERE last_name LIKE '%r'

-- Exercice 2.2.6
--- Ecrire une requ�te pour pr�senter le nom et le r�sultat annuel de tous les
--- Etudiants qui ont un nom de famille pour lequel la troisi�me lettre est un "n" et qui ont obtenu
--- un r�sultat annuel sup�rieur � 10

SELECT last_name, year_result
FROM student
WHERE last_name LIKE '__n%'
	AND year_result > 10

-- Exercice 2.2.7
--- Ecrire une requ�te pour pr�senter le nom et le r�sultat annuel class� par
--- r�sultats annuels d�croissants de tous les �tudiants qui ont obtenu un r�sultat annuel inf�rieur ou
--- �gal � 3 

SELECT last_name, year_result
FROM student
WHERE year_result <= 3
ORDER BY year_result DESC

-- Exercice 2.2.8
--- Ecrire une requ�te pour pr�senter le nom complet (nom et pr�nom s�par�s par
--- un espace) et le r�sultat annuel class� par nom croissant sur le nom de tous les �tudiants
--- appartenant � la section 1010

SELECT last_name + ' ' + first_name [Nom complet], 
	year_result
FROM student
WHERE section_id = 1010
ORDER BY last_name

-- Exercice 2.2.9
--- Ecrire une requ�te pour pr�senter le nom, l'id de section et le r�sultat annuel
--- class� par ordre croissant sur la section de tous les �tudiants appartenant aux sections 1010 et
--- 1020 ayant un r�sultat annuel qui n'est pas compris entre 12 et 18 

SELECT last_name, section_id, year_result
FROM student
WHERE section_id IN (1010, 1020)
    AND year_result NOT BETWEEN 12 AND 18
ORDER BY section_id ASC

-- Exercice 2.2.10
--- Ecrire une requ�te pour pr�senter le nom, l'id de section et le r�sultat annuel
--- sur 100 (nommer la colonne "Resultat sur 100") class� par ordre d�croissant du r�sultat de tous
--- les �tudiants appartenant aux sections commen�ant par 13 et ayant un r�sultat annuel sur 100
--- inf�rieur ou �gal � 60

SELECT last_name, section_id, 
	year_result * 5 AS [Resultat sur 100]
FROM student
WHERE section_id LIKE '13%' 
	AND year_result * 5 <= 60
ORDER BY [Resultat sur 100] DESC


--
--
-- Module 2 - Partie III : Les Fonctions 
--
--

-- Exercice 2.3.1
--- Pourquoi lorsque l'on utilise la fonction MAX ou MIN les valeurs
--- NULL sont-elles ignor�es ? 

--- Car elles n'ont pas d'impact sur la recherche de la valeur maximum ou minimum

-- Exercice 2.3.2
--- Pourquoi le type des donn�es n'a-t-il pas d'importance lorsque l'on utilise la
--- fonction COUNT ? 

-- La fonction COUNT compte le nombre de lignes qui correspondent au crit�re �nonc�.
-- Le type des donn�es de la colonne choisie pour effectuer le COUNT n'a pas d'importance puisqu'il
-- s'agit juste de tester si une valeur existe peu importe son type 

-- Exercice 2.3.3
--- La fonction AVG renvoie la moyenne de toutes les lignes r�sultantes d'une
--- requ�te SELECT sur une colonne incluant toutes les valeurs NULL. (Vrai/Faux ?) 

-- Faux, la fonction AVG ne tient pas compte des valeurs NULL 

-- Exercice 2.3.4
--- La fonction SUM est utilis�e pour ajouter des totaux aux colonnes.
--- (Vrai/Faux ?) 

-- Faux, la fonction SUM a pour principe de renvoyer le r�sultat d'une somme de valeur.
-- Lorsqu'elle est utilis�e, seule une valeur peut-�tre propos�e dans le r�sultat. La fonction somme ne
-- peut donc ajouter une ligne contenant la somme en fin de colonne 

-- Exercice 2.3.5
--- La fonction COUNT(*) compte toutes les lignes d'une table. (Vrai/Faux ?) 

-- Vrai, � la diff�rence des autres versions de la fonction COUNT, celle contenant l'�toile
-- inclus dans les valeurs les lignes dont la valeur est NULL 

-- Exercice 2.3.6
--- Les requ�tes suivantes sont-elles valides ? 

SELECT COUNT(*)
FROM student;

SELECT COUNT(student_id)
FROM student;

SELECT MIN(year_result), MAX(birth_date)
FROM student
WHERE year_result > 12

-- Exercice 2.3.7
--- Donner le r�sultat annuel moyen pour l'ensemble des �tudiants 

SELECT AVG(year_result)
FROM student

-- Exercice 2.3.8
--- Donner le plus haut r�sultat annuel obtenu par un �tudiant 

SELECT MAX(year_result)
FROM student

-- Exercice 2.3.9
--- Donner la somme des r�sultats annuels 

SELECT SUM(year_result)
FROM student

-- Exercice 2.3.10
--- Donner le r�sultat annuel le plus faible 

SELECT MIN(year_result)
FROM student

-- Exercice 2.3.11
--- Donner le nombre de lignes qui composent la table STUDENT

SELECT COUNT(*)
FROM student

-- Exercice 2.3.12
--- Donner la liste des �tudiants (login et ann�e de naissance) n�s apr�s 1970 

SELECT login, 
	DATEPART(yyyy, birth_date) AS [Annee de naissance]
FROM student
WHERE YEAR(birth_date) > 1970

-- Exercice 2.3.13
--- Donner le login et le nom de tous les �tudiants qui ont un nom compos� d'au
--- moins 8 lettres

SELECT login, last_name
FROM student
WHERE LEN(last_name) >= 8

-- Exercice 2.3.14
--- Donner la liste des �tudiants ayant obtenu un r�sultat annuel sup�rieur ou
--- �gal � 16. La liste pr�sente le nom de l'�tudiant en majuscules (nommer la colonne Nom de
--- Famille) et le pr�nom de l'�tudiant dans l'ordre d�croissant des r�sultats annuels obtenus 

SELECT UPPER(last_name) AS 'Nom de Famille',
	first_name, year_result
FROM student
WHERE year_result >= 16
ORDER BY year_result DESC

-- Exercice 2.3.15
--- Donner un nouveau login � chacun des �tudiants ayant obtenu un r�sultat
--- annuel compris entre 6 et 10. Le login se compose des deux premi�res lettres du pr�nom de
--- l'�tudiant suivi par les quatre premi�res lettres de son nom le tout en minuscule. Le r�sultat
--- reprend pour chaque �tudiant, son nom, son pr�nom l'ancien et le nouveau login (colonne 
--- Nouveau login) 

SELECT first_name, last_name, login,
	LOWER(
		SUBSTRING(first_name, 1, 2) +
		LEFT(last_name, 4)
	)
	AS [Nouveau login]
FROM student
WHERE year_result BETWEEN 6 AND 10

-- Exercice 2.3.16
--- Donner un nouveau log0in � chacun des �tudiants ayant obtenu un r�sultat
--- annuel �gal � 10, 12 ou 14. Le login se compose des trois derni�res lettres de son pr�nom suivi du
--- chiffre obtenu en faisant la diff�rence entre l'ann�e en cours et l'ann�e de leur naissance. Le
--- r�sultat reprend pour chaque �tudiant, son nom, son pr�nom l'ancien et le nouveau login (colonne
--- Nouveau login) 

SELECT first_name, last_name, login,
	RIGHT(first_name, 3) + 
	RIGHT(CONVERT(VARCHAR, YEAR(GETDATE() - birth_date)), 2)
	AS [Nouveau login]
FROM student
WHERE year_result IN (10, 12, 14)

-- Exercice 2.3.17
--- Donner la liste des �tudiants (nom, login, r�sultat annuel) qui ont un nom
--- commen�ant par D, M ou S. La liste doit pr�senter les donn�es dans l'ordre croissant
--- des dates de naissance des �tudiants 

SELECT last_name, login, year_result
FROM student
WHERE LEFT(last_name, 1) IN ('D', 'M', 'S')
ORDER BY birth_date

-- Exercice 2.3.18
--- Donner la liste des �tudiants (nom, login, r�sultat annuel) qui ont obtenu un
--- r�sultat impair sup�rieur � 10. La liste doit �tre tri�e du plus grand r�sultat au plus petit 

SELECT last_name, login, year_result
FROM student
WHERE year_result > 10
	AND year_result % 2 = 1
ORDER BY year_result DESC

-- Exercice 2.3.19
--- Donner le nombre d'�tudiants qui ont au moins 7 lettres dans leur nom de
--- famille 

SELECT COUNT(*)
	AS 'Nbre de noms de plus de 7 lettres'
FROM student
WHERE LEN(last_name) >= 7

-- Exercice 2.3.20
--- Pour chaque �tudiant n� avant 1955, donner le nom, le r�sultat annuel et le
--- statut. Le statut prend la valeur OK si l'�tudiant a obtenu au moins 12 comme r�sultat annuel
--- et KO dans le cas contraire 

SELECT last_name, year_result,
CASE
    WHEN year_result >= 12 THEN 'OK'
    WHEN year_result < 12 THEN 'KO'
END AS [Satut]
FROM student
WHERE year(birth_date) < 1955

-- Exercice 2.3.21
--- Donner pour chaque �tudiant n� entre 1955 et 1965 le nom, le r�sultat
--- annuel et la cat�gorie � laquelle il appartient. La cat�gorie est fonction du r�sultat annuel obtenu :
--- un r�sultat inf�rieur � 10 appartient � la cat�gorie inf�rieure, un r�sultat �gal � 10 ap

SELECT last_name, year_result,
	CASE
		WHEN year_result < 10
			THEN 'inferieure'
		WHEN year_result = 10
			THEN 'neutre'
		ELSE 'superieure'
	END [Categorie]
FROM student
WHERE YEAR(birth_date) BETWEEN 1955 AND 1965

-- Exercice 2.3.22
--- Donner pour chaque �tudiant n� entre 1975 et 1985, son nom, son r�sultat
--- annuel et sa date de naissance sous la forme: jours en chiffre, mois en lettre et ann�es en quatre
--- chiffres (ex : 11 juin 2005) 

SELECT last_name, year_result,
	CONVERT(VARCHAR, DAY(birth_date)) + ' ' +
	CASE MONTH(birth_date)
		WHEN 1 THEN 'janvier'
		WHEN 2 THEN 'fevrier'
		WHEN 3 THEN 'mars'
		WHEN 4 THEN 'avril'
		WHEN 5 THEN 'mai'
		WHEN 6 THEN 'juin'
		WHEN 7 THEN 'juillet'
		WHEN 8 THEN 'aout'
		WHEN 9 THEN 'septembre'
		WHEN 10 THEN 'octobre'
		WHEN 11 THEN 'novembre'
		WHEN 12 THEN 'decembre'
	END 
	+ ' ' +	CONVERT(VARCHAR, YEAR(birth_date))
	AS [Literal_date]
FROM student
WHERE DATEPART(YYYY, birth_date) BETWEEN 1975 AND 1985

-- Exercice 2.3.23
--- Donner pour chaque �tudiant n� en dehors des mois d'hiver et ayant obtenu
--- un r�sultat inf�rieur � 7, son nom, le mois de sa naissance (en chiffre) son r�sultat annuel et son
--- r�sultat annuel corrig� (Nouveau resultat) tel que si le r�sultat annuel est �gal � 4, le valeur
--- propos�e est NULL

SELECT last_name, MONTH(birth_date) [Mois de naissance], year_result,
	NULLIF(year_result, 4) [Nouveau resultat]
FROM student
WHERE MONTH(birth_date) NOT IN (12, 1, 2, 3)
	AND year_result < 7

-- Autre solution (d�pr�ci�e)

SELECT last_name, MONTH(birth_date) [Mois de naissance], year_result,
	CASE year_result
		WHEN 4 THEN NULL
		ELSE year_result
	END
	AS[Nouveau resultat]
FROM student
WHERE MONTH(birth_date) NOT IN (12, 1, 2, 3)
	AND year_result < 7


--
-- Module 2 - Partie IV : GROUP BY ... HAVING
--


-- Exercice 2.4.1
--- L'utilisation de GROUP BY peut �tre consid�r�e comme une forme de
--- boucle dans une requ�te SQL ? (Vrai/Faux)

-- Si l'on consid�re que le syst�me applique plusieurs fois la m�me fonction agr�gative � des
-- ensembles de donn�es diff�rents, le GROUP BY s'apparente en quelques sortes � une boucle 

-- Exercice 2.4.2
--- La r�partition en groupe se fait avant de prendre en compte les restrictions
--- impos�es par un WHERE ? (Vrai/Faux)

-- Faux. Le syst�me passe dans le WHERE avant de s'attaquer au GROUP BY, ce qui lui
-- permet d'�liminer un certains nombres de lignes et d'all�ger le traitement

-- Exercice 2.4.3
--- Un GROUP BY doit imp�rativement porter sur une colonne non alliac�e ?

-- Vrai. Comme le syst�me n'est pas encore pass� dans le SELECT au moment de traiter le
-- GROUP BY, il ne connait pas encore les allias que l'on a �ventuellement cr��s et ne peut donc pas
-- les utiliser 

-- Exercice 2.4.4
--- L'utilisation d'un GROUP BY a pour effet de trier les r�sultats dans l'ordre
--- croissant de la colonne incluse dans le GROUP BY ? (Vrai/Faux)

-- Cela s'av�re vrai sur la plupart des syst�mes

-- Exercice 2.4.5
--- La colonne sur laquelle porte le GROUP BY doit imp�rativement �tre
--- pr�sente dans la clause SELECT ? (Vrai/Faux)

-- Faux. On peut tout � fait n'afficher que le r�sultat du GROUP BY sans le faire
-- correspondre � son groupe, � nous de savoir � quoi correspond l'affichage. C'est d'ailleurs ce que
-- nous devrons faire dans les requ�tes imbriqu�es de la partie VII 

-- Exercice 2.4.6
--- Les requ�tes suivantes sont-elles valides ?

SELECT section_id, COUNT(last_name)
FROM student
GROUP BY section_id

SELECT section_id, AVG(year_result)
FROM student
GROUP BY section_id
HAVING AVG(year_result) > 10

SELECT section_id, AVG(year_result)
FROM student
WHERE year_result > 10
GROUP BY section_id

-- Exercice 2.4.7 
-- Donner pour chaque section, le r�sultat maximum (dans une colonne appel�e
--- Resultat maximum) obtenu par les �tudiants 

SELECT section_id, MAX(year_result) [Resultat maximum]
FROM student
GROUP BY section_id

-- Exercice 2.4.8 
-- Donner pour toutes les sections commen�ant par 10, le r�sultat annuel moyen
--- PRECIS (dans une colonne appel�e Moyenne) obtenu par les �tudiants 

SELECT section_id, AVG(CAST(year_result AS float)) [Moyenne]
FROM student
WHERE section_id LIKE '10%'
GROUP BY section_id

-- Exercice 2.4.9 
--- Donner le r�sultat moyen (dans une colonne appel�e Moyenne) et le mois
--- en chiffre (dans une colonne appel�e Mois de naissance) pour les �tudiants n�s le m�me mois
--- entre 1970 et 1985 

SELECT MONTH(birth_date) [Mois de naissance],
	AVG(year_result) [Moyenne]
FROM student
WHERE YEAR(birth_date) BETWEEN 1970 AND 1985
GROUP BY MONTH(birth_date)

-- Exercice 2.4.10 
--- Donner pour toutes les sections qui comptent plus de 3 �tudiants, la
--- moyenne PRECISE des r�sultats annuels (dans une colonne appel�e Moyenne) 

SELECT section_id, AVG(CONVERT(FLOAT, year_result))
FROM student
GROUP BY section_id
HAVING COUNT(section_id) > 3


-- Exercice 2.4.11
--- Donner le r�sultat maximum obtenu par les �tudiants appartenant aux
--- sections dont le r�sultat moyen est sup�rieur � 8

SELECT section_id, 
	AVG(year_result) [Moyenne], 
	MAX(year_result) [Resultat maximum]
FROM student
GROUP BY section_id
HAVING AVG(year_result) > 8


--
-- Module 2 - Partie V : CUBE et ROLLUP
--


-- Exercice 2.5.1 
--- L'utilisation de ROLLUP cr�e des groupes de donn�es en se d�pla�ant dans
--- une seule direction, partant de la gauche vers la droite par rapport aux colonnes s�lectionn�es ?
--- (Vrai/Faux)

-- Vrai. Au niveau de l'affichage, le syst�me suivra toujours l'ordre demand� par le select.
-- Cependant, la fonction de regroupement est appliqu�e en remontant les colonnes de la droite vers la
-- gauche. 


-- Exercice 2.5.2 
--- Le r�sultat produit par un ROLLUP pr�sente les r�sultats du plus agr�g� au
--- moins agr�g� ? (Vrai/Faux)

-- Faux, il n'y a pas de tri sur la fa�on dont les donn�es sont regroup�es

-- Exercice 2.5.3 
--- L'op�rateur CUBE permet de produire moins de sous-totaux qu'avec
--- l'op�rateur ROLLUP ? (Vrai/Faux)

-- Faux, c'est l'inverse puisque le CUBE rajoute des agr�gations suppl�mentaires

-- Exercice 2.5.4 
--- Avec l'op�rateur CUBE, le nombre de groupes dans le r�sultat est
--- ind�pendant du nombre de colonnes s�lectionn�es dans le GROUP BY ? (Vrai/Faux)

-- Faux, le CUBE est directement li� au GROUP BY

-- Exercice 2.5.5 
--- L'op�rateur CUBE ne peut pas �tre appliqu� � la fonction d'agr�gation
--- SUM ? (Vrai/Faux)
 
 -- Faux, le CUBE peut �tre utilis� avec toutes les fonctions d'agr�gation 

-- Exercice 2.5.6 
--- Donner la moyenne exacte des r�sultats obtenus par les �tudiants par section
--- et par cours, ainsi que la moyenne par section uniquement et enfin, la moyenne g�n�rale. La liste
--- ainsi produite reprend l'id de section, de cours le r�sultat moyen (dans une colonne appel�e �
--- Moyenne). Se baser uniquement sur les sections 1010 et 1320

SELECT section_id, course_id, AVG(CONVERT(FLOAT, year_result)) as 'Moyenne'
FROM student
WHERE section_id IN (1010, 1320)
GROUP BY ROLLUP (section_id, course_id)

-- Exercice 2.5.7 
--- Donner la moyenne exacte des r�sultats obtenus par les �tudiants par cours et
--- par section, ainsi que la moyenne par cours uniquement, puis par section uniquement et enfin, la
--- moyenne g�n�rale. La liste ainsi produite reprend l'id de section, de cours le r�sultat moyen (dans
--- une colonne appel�e Moyenne). Se baser uniquement sur les sections 1010 et 1320

SELECT section_id, course_id, AVG(CONVERT(FLOAT, year_result)) as 'Moyenne'
FROM student
WHERE section_id IN (1010, 1320)
GROUP BY CUBE (course_id, section_id)


--
--
-- Module 2 - Partie VI : Jointures
--
--


-- Exercice 2.6.1 
--- Donner pour chaque cours le nom du professeur responsable ainsi que la
--- section dont le professeur fait partie

-- 1ere solution

SELECT c.course_name, s.section_name, p.professor_name
FROM section s, professor p, course c
WHERE p.professor_id = c.professor_id
	AND s.section_id = p.section_id

-- 2eme solution

SELECT c.course_name, s.section_name, p.professor_name
FROM professor p
JOIN section s
	ON p.section_id = s.section_id
JOIN DBO.course c
	ON p.professor_id = c.professor_id

-- Exercice 2.6.2 
--- Donner pour chaque section, l'id, le nom et le nom de son d�l�gu�. Classer les
--- sections dans l'ordre inverse des id de section. Un d�l�gu� est un �tudiant de la table STUDENT

SELECT s.section_id, s.section_name, std.last_name
FROM section s
JOIN student std
	ON s.delegate_id = std.student_id
ORDER BY s.section_id DESC

-- Exercice 2.6.3 
--- Donner pour chaque section, le nom des professeurs qui en sont membre

SELECT s.section_id, s.section_name, p.professor_name
FROM section s
LEFT JOIN professor p
	ON s.section_id = p.section_id
 
-- Exercice 2.6.4 
--- M�me objectif que la question 3 mais seuls les sections comportant au moins
--- un professeur doivent �tre reprises

SELECT s.section_id, s.section_name, p.professor_name
FROM section s
JOIN professor p
	ON s.section_id = p.section_id

-- Exercice 2.6.5 
--- Donner � chaque �tudiant ayant obtenu un r�sultat annuel sup�rieur ou �gal �
--- 12 son grade en fonction de son r�sultat annuel et sur base de la table grade. La liste doit �tre
--- class�e dans l'ordre alphab�tique des grades attribu�s

SELECT s.last_name, s.year_result, g.grade
FROM student s
JOIN grade g
    ON s.year_result BETWEEN g.lower_bound AND g.upper_bound
WHERE s.year_result >=12
ORDER BY g.grade

-- Exercice 2.6.6 
--- Donner la liste des professeurs et la section � laquelle ils se rapportent ainsi
--- que le(s) cour(s) (nom du cours et cr�dits) dont le professeur est responsable. 
--- La liste est tri�e par ordre d�croissant des cr�dits attribu�s � un cours
 
SELECT p.professor_name, s.section_name, c.course_name, c.course_ects
FROM professor p
LEFT JOIN section s
	ON p.section_id = s.section_id
LEFT JOIN course c
	ON p.professor_id = c.professor_id
ORDER BY c.course_ects DESC

-- Avec RIGHT

SELECT p.professor_name, s.section_name, c.course_name, c.course_ects
FROM section s
RIGHT JOIN professor p
	ON p.section_id = s.section_id
LEFT JOIN course c
	ON p.professor_id = c.professor_id
ORDER BY c.course_ects DESC

-- Exercice 2.6.7 
--- Donner pour chaque professeur son id et le total des cr�dits ECTS
--- (ECTS_TOT) qui lui sont attribu�s. La liste propos�e est tri�e par ordre d�croissant de la somme
--- des cr�dits allou�s

SELECT p.professor_id, SUM(c.course_ects) [ECTS_TOT]
FROM professor p
LEFT JOIN course c
	ON p.professor_id = c.professor_id
GROUP BY p.professor_id
ORDER BY [ECTS_TOT] DESC

-- Exercice 2.6.8 
--- Donner la liste (nom et pr�nom) de l'ensemble des professeurs et des
--- �tudiants dont le nom est compos� de plus de 8 lettres. Ajouter une colonne pour pr�ciser la
--- cat�gorie (S pour STUDENT, P pour PROFESSOR) � laquelle appartient l'individu

-- R�cup�rer la liste de l'ensemble des professeurs dont le nom est compos� de plus de 8 lettres
SELECT professor_surname, professor_name, 'P' as [Categorie]
FROM professor
WHERE LEN(professor_name) > 8

-- R�cup�rer la liste de l'ensemble des �tudiants o� le nom est compos� de plus de 8 lettres
SELECT first_name, last_name, 'S' as [Categorie]
FROM student
WHERE LEN(last_name) > 8

-- Ensuite assembler les deux listes

SELECT professor_surname, professor_name, 'P' as [Categorie]
FROM professor
WHERE LEN(professor_name) > 8

UNION

SELECT first_name, last_name, 'S' as [Categorie]
FROM student
WHERE LEN(last_name) > 8

-- Exercice 2.6.9 
--- Donner l'id de chacune des sections qui n'ont pas de professeur attitr�

-- R�cup�rer la liste des sections
SELECT section_id
FROM section

-- R�cup�rer la liste des professeurs
SELECT section_id
FROM professor

-- Assembler 

SELECT section_id
FROM section

EXCEPT

SELECT section_id
FROM professor


--
--
-- Module 2 - Partie VII : Requ�tes imbriqu�es
--
--


-- Exercice 2.7.1 
--- Donner la liste des �tudiants (nom et pr�nom) qui font partie de la m�me
--- section que mademoiselle Roberts. La liste doit �tre class�e par ordre alphab�tique sur le nom
--- et mademoiselle Roberts ne doit pas apparaitre dans la liste

-- Pr�parer la requ�te en 2 parties : 

--- D'abord la sous-requete : qu'est-ce qu'on doit r�cup�rer pour r�aliser 
--- la requ�te principale

SELECT section_id
FROM student
WHERE last_name LIKE 'Roberts'

--- Ensuite la requ�te principale (assemblage de la requ�te principale avec
--- la sous-requ�te)

SELECT last_name, first_name, section_id
FROM student
WHERE section_id = (
		SELECT section_id
		FROM student
		WHERE last_name LIKE 'Roberts'	
	) AND last_name <> 'Roberts'

-- Exercice 2.7.2 
--- Donner la liste des �tudiants (nom, pr�nom et r�sultat) de l'ensemble des
--- �tudiants ayant obtenu un r�sultat annuel sup�rieur au double du r�sultat moyen pour l'ensemble
--- des �tudiants

-- R�cup�rer le r�sultat moyen pour l'ensemble des �tudiants
SELECT AVG(year_result)
FROM student

-- R�cup�rer la liste des �tudiants
SELECT last_name, first_name, year_result
FROM student
WHERE year_result > 2 * (
		SELECT AVG(year_result)
		FROM student
	)

-- Exercice 2.7.3 
--- Donner la liste de toutes les sections qui n'ont pas de professeur

SELECT DISTINCT section_id
FROM professor

SELECT section_id, section_name
FROM section
WHERE section_id NOT IN (
		SELECT DISTINCT section_id
		FROM professor
	)
 
-- Exercice 2.7.4 
--- Donner la liste des �udiants qui ont comme mois de naissance le mois
--- correspondant � la date d'engagement du professeur Giot. Classer les �tudiants par ordre de
--- r�sultat annuel d�croissant

-- Sous-requ�te - mois de naissance le mois correspondant � la date d'engagement du professeurGiot
SELECT MONTH(professor_hire_date)
FROM professor p
WHERE p.professor_name LIKE 'Giot'

-- Requ�te principale
SELECT last_name, first_name, CONVERT(VARCHAR, birth_date, 101) [Date de Naissance], year_result
FROM student
WHERE DATEPART(MONTH, birth_date) = (
		SELECT MONTH(professor_hire_date)
		FROM professor p
		WHERE p.professor_name LIKE 'Giot'
	)
ORDER BY year_result DESC

-- Exercice 2.7.5 
--- Donner la liste des �tudiants qui ont obtenu le grade TB pour leur r�sultat
--- annuel

SELECT lower_bound
FROM grade
WHERE grade LIKE 'TB'

SELECT upper_bound
FROM grade
WHERE grade LIKE 'TB'


SELECT last_name, first_name, year_result
FROM student
WHERE year_result BETWEEN (
		SELECT lower_bound
		FROM grade
		WHERE grade LIKE 'TB'
	) AND (
		SELECT upper_bound
		FROM grade
		WHERE grade LIKE 'TB'
	)

-- Exercice 2.7.6 
--- Donner la liste des �tudiants qui appartienne � la section pour laquelle
--- Mademoiselle Marceau est d�l�gu�e
 
-- Mademoiselle Marceau est d�l�gu�e - section
SELECT student_id
FROM student
WHERE last_name LIKE 'Marceau'

-- R�cup�ration de la section de Marceau
SELECT section_id
FROM section
WHERE delegate_id = 15

-- R�cup�ration de la liste des �tudiants de la section de Marceau
SELECT last_name, first_name, section_id
FROM student
WHERE section_id = 1110

--- Query finale

SELECT last_name, first_name, section_id
FROM student
WHERE section_id = (
		SELECT section_id
			FROM section
			WHERE delegate_id = (
				 SELECT student_id
				 FROM student
				 WHERE last_name LIKE 'Marceau'
				)
	)

-- Exercice 2.7.7 
--- Donner la liste des sections qui se composent de plus de quatre �tudiants

-- R�cup�rer les sections (id) o� les �tudiants sont plus de 4 => table �tudiant
SELECT section_id
FROM student
GROUP BY section_id
HAVING COUNT(*) > 4

-- R�cup�rer les informations des sections => table section
SELECT section_id, section_name
FROM section
WHERE section_id IN (
		SELECT section_id
		FROM student
		GROUP BY section_id
		HAVING COUNT(*) > 4
	)


-- Exercice 2.7.8 
--- Donner la liste des �tudiants premiers de leur section en terme de r�sultat
--- annuel et qui n'appartiennent pas aux sections dont le r�sultat moyen est inf�rieure � 10

-- Moyenne par section ?
SELECT AVG(year_result)
FROM student
GROUP BY section_id

-- Sections dont le r�sultat moyen est inf�rieure � 10 ?

SELECT section_id
FROM student
GROUP BY section_id
HAVING AVG(year_result) < 10

-- �tudiants qui n'appartiennent pas aux sections dont le r�sultat moyen est inf�rieure � 10
SELECT * 
FROM student
WHERE section_id NOT IN (
		SELECT section_id
		FROM student
		GROUP BY section_id
		HAVING AVG(year_result) < 10
	)

-- Meilleur r�sultat par section
SELECT section_id, MAX(year_result)
FROM student
GROUP BY section_id

-- Infos du meilleur �tudiant par section
SELECT last_name, first_name, section_id
FROM student s
WHERE year_result = (
		SELECT MAX(year_result)
		FROM student s1
		WHERE s.section_id = s1.section_id
		GROUP BY section_id
	)

-- Requ�te principale

SELECT last_name, first_name, section_id
FROM student s
WHERE year_result = (
		SELECT MAX(year_result)
		FROM student s1
		WHERE s.section_id = s1.section_id
		GROUP BY section_id
	) AND section_id NOT IN (
		SELECT section_id
		FROM student
		GROUP BY section_id
		HAVING AVG(year_result) < 10
	)


