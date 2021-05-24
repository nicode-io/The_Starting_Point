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
--- Ecrire une requête pour présenter le login et le résultat de tous les étudiants
--- ayant obtenu un résultat annuel supérieur à 16

SELECT login, year_result
FROM student
WHERE year_result > 16

-- Exercice 2.2.2
--- Ecrire une requête pour présenter le nom et l'id de section des étudiants dont
--- le prénom est Georges

SELECT last_name, student_id
FROM student
WHERE first_name LIKE 'Georges'

-- Exercice 2.2.3
--- Ecrire une requête pour présenter le nom et le résultat annuel de tous les
--- Etudiants ayant obtenu un résultat annuel compris entre 12 et 16

SELECT last_name, year_result
FROM student
WHERE year_result BETWEEN 12 AND 16

-- Exercice 2.2.4
--- Ecrire une requête pour présenter le nom, l'id de section et le résultat annuel
--- de tous les étudiants qui ne font pas partie des sections 1010, 1020 et 1110 

SELECT last_name, section_id, year_result
FROM student
WHERE section_id NOT IN(1010, 1020, 1110)

-- Exercice 2.2.5
--- Ecrire une requête pour présenter le nom et l'id de section de tous les
--- Etudiants qui ont un nom de famille qui termine par "r"

SELECT last_name, section_id
FROM student
WHERE last_name LIKE '%r'

-- Exercice 2.2.6
--- Ecrire une requête pour présenter le nom et le résultat annuel de tous les
--- Etudiants qui ont un nom de famille pour lequel la troisième lettre est un "n" et qui ont obtenu
--- un résultat annuel supérieur à 10

SELECT last_name, year_result
FROM student
WHERE last_name LIKE '__n%'
	AND year_result > 10

-- Exercice 2.2.7
--- Ecrire une requête pour présenter le nom et le résultat annuel classé par
--- résultats annuels décroissants de tous les étudiants qui ont obtenu un résultat annuel inférieur ou
--- égal à 3 

SELECT last_name, year_result
FROM student
WHERE year_result <= 3
ORDER BY year_result DESC

-- Exercice 2.2.8
--- Ecrire une requête pour présenter le nom complet (nom et prénom séparés par
--- un espace) et le résultat annuel classé par nom croissant sur le nom de tous les étudiants
--- appartenant à la section 1010

SELECT last_name + ' ' + first_name [Nom complet], 
	year_result
FROM student
WHERE section_id = 1010
ORDER BY last_name

-- Exercice 2.2.9
--- Ecrire une requête pour présenter le nom, l'id de section et le résultat annuel
--- classé par ordre croissant sur la section de tous les étudiants appartenant aux sections 1010 et
--- 1020 ayant un résultat annuel qui n'est pas compris entre 12 et 18 

SELECT last_name, section_id, year_result
FROM student
WHERE section_id IN (1010, 1020)
    AND year_result NOT BETWEEN 12 AND 18
ORDER BY section_id ASC

-- Exercice 2.2.10
--- Ecrire une requête pour présenter le nom, l'id de section et le résultat annuel
--- sur 100 (nommer la colonne "Resultat sur 100") classé par ordre décroissant du résultat de tous
--- les étudiants appartenant aux sections commençant par 13 et ayant un résultat annuel sur 100
--- inférieur ou égal à 60

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
--- NULL sont-elles ignorées ? 

--- Car elles n'ont pas d'impact sur la recherche de la valeur maximum ou minimum

-- Exercice 2.3.2
--- Pourquoi le type des données n'a-t-il pas d'importance lorsque l'on utilise la
--- fonction COUNT ? 

-- La fonction COUNT compte le nombre de lignes qui correspondent au critére énoncé.
-- Le type des données de la colonne choisie pour effectuer le COUNT n'a pas d'importance puisqu'il
-- s'agit juste de tester si une valeur existe peu importe son type 

-- Exercice 2.3.3
--- La fonction AVG renvoie la moyenne de toutes les lignes résultantes d'une
--- requête SELECT sur une colonne incluant toutes les valeurs NULL. (Vrai/Faux ?) 

-- Faux, la fonction AVG ne tient pas compte des valeurs NULL 

-- Exercice 2.3.4
--- La fonction SUM est utilisée pour ajouter des totaux aux colonnes.
--- (Vrai/Faux ?) 

-- Faux, la fonction SUM a pour principe de renvoyer le résultat d'une somme de valeur.
-- Lorsqu'elle est utilisée, seule une valeur peut-être proposée dans le résultat. La fonction somme ne
-- peut donc ajouter une ligne contenant la somme en fin de colonne 

-- Exercice 2.3.5
--- La fonction COUNT(*) compte toutes les lignes d'une table. (Vrai/Faux ?) 

-- Vrai, à la différence des autres versions de la fonction COUNT, celle contenant l'étoile
-- inclus dans les valeurs les lignes dont la valeur est NULL 

-- Exercice 2.3.6
--- Les requêtes suivantes sont-elles valides ? 

SELECT COUNT(*)
FROM student;

SELECT COUNT(student_id)
FROM student;

SELECT MIN(year_result), MAX(birth_date)
FROM student
WHERE year_result > 12

-- Exercice 2.3.7
--- Donner le résultat annuel moyen pour l'ensemble des étudiants 

SELECT AVG(year_result)
FROM student

-- Exercice 2.3.8
--- Donner le plus haut résultat annuel obtenu par un étudiant 

SELECT MAX(year_result)
FROM student

-- Exercice 2.3.9
--- Donner la somme des résultats annuels 

SELECT SUM(year_result)
FROM student

-- Exercice 2.3.10
--- Donner le résultat annuel le plus faible 

SELECT MIN(year_result)
FROM student

-- Exercice 2.3.11
--- Donner le nombre de lignes qui composent la table STUDENT

SELECT COUNT(*)
FROM student

-- Exercice 2.3.12
--- Donner la liste des étudiants (login et année de naissance) nés après 1970 

SELECT login, 
	DATEPART(yyyy, birth_date) AS [Annee de naissance]
FROM student
WHERE YEAR(birth_date) > 1970

-- Exercice 2.3.13
--- Donner le login et le nom de tous les étudiants qui ont un nom composé d'au
--- moins 8 lettres

SELECT login, last_name
FROM student
WHERE LEN(last_name) >= 8

-- Exercice 2.3.14
--- Donner la liste des étudiants ayant obtenu un résultat annuel supérieur ou
--- égal à 16. La liste présente le nom de l'étudiant en majuscules (nommer la colonne Nom de
--- Famille) et le prénom de l'étudiant dans l'ordre décroissant des résultats annuels obtenus 

SELECT UPPER(last_name) AS 'Nom de Famille',
	first_name, year_result
FROM student
WHERE year_result >= 16
ORDER BY year_result DESC

-- Exercice 2.3.15
--- Donner un nouveau login à chacun des étudiants ayant obtenu un résultat
--- annuel compris entre 6 et 10. Le login se compose des deux premières lettres du prénom de
--- l'étudiant suivi par les quatre premières lettres de son nom le tout en minuscule. Le résultat
--- reprend pour chaque étudiant, son nom, son prénom l'ancien et le nouveau login (colonne 
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
--- Donner un nouveau log0in à chacun des étudiants ayant obtenu un résultat
--- annuel égal à 10, 12 ou 14. Le login se compose des trois dernières lettres de son prénom suivi du
--- chiffre obtenu en faisant la différence entre l'année en cours et l'année de leur naissance. Le
--- résultat reprend pour chaque étudiant, son nom, son prénom l'ancien et le nouveau login (colonne
--- Nouveau login) 

SELECT first_name, last_name, login,
	RIGHT(first_name, 3) + 
	RIGHT(CONVERT(VARCHAR, YEAR(GETDATE() - birth_date)), 2)
	AS [Nouveau login]
FROM student
WHERE year_result IN (10, 12, 14)

-- Exercice 2.3.17
--- Donner la liste des étudiants (nom, login, résultat annuel) qui ont un nom
--- commençant par D, M ou S. La liste doit présenter les données dans l'ordre croissant
--- des dates de naissance des étudiants 

SELECT last_name, login, year_result
FROM student
WHERE LEFT(last_name, 1) IN ('D', 'M', 'S')
ORDER BY birth_date

-- Exercice 2.3.18
--- Donner la liste des étudiants (nom, login, résultat annuel) qui ont obtenu un
--- résultat impair supérieur à 10. La liste doit être triée du plus grand résultat au plus petit 

SELECT last_name, login, year_result
FROM student
WHERE year_result > 10
	AND year_result % 2 = 1
ORDER BY year_result DESC

-- Exercice 2.3.19
--- Donner le nombre d'étudiants qui ont au moins 7 lettres dans leur nom de
--- famille 

SELECT COUNT(*)
	AS 'Nbre de noms de plus de 7 lettres'
FROM student
WHERE LEN(last_name) >= 7

-- Exercice 2.3.20
--- Pour chaque étudiant né avant 1955, donner le nom, le résultat annuel et le
--- statut. Le statut prend la valeur OK si l'étudiant a obtenu au moins 12 comme résultat annuel
--- et KO dans le cas contraire 

SELECT last_name, year_result,
CASE
    WHEN year_result >= 12 THEN 'OK'
    WHEN year_result < 12 THEN 'KO'
END AS [Satut]
FROM student
WHERE year(birth_date) < 1955

-- Exercice 2.3.21
--- Donner pour chaque étudiant né entre 1955 et 1965 le nom, le résultat
--- annuel et la catégorie à laquelle il appartient. La catégorie est fonction du résultat annuel obtenu :
--- un résultat inférieur à 10 appartient à la catégorie inférieure, un résultat égal à 10 ap

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
--- Donner pour chaque étudiant né entre 1975 et 1985, son nom, son résultat
--- annuel et sa date de naissance sous la forme: jours en chiffre, mois en lettre et années en quatre
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
--- Donner pour chaque étudiant né en dehors des mois d'hiver et ayant obtenu
--- un résultat inférieur à 7, son nom, le mois de sa naissance (en chiffre) son résultat annuel et son
--- résultat annuel corrigë (Nouveau resultat) tel que si le résultat annuel est égal à 4, le valeur
--- proposée est NULL

SELECT last_name, MONTH(birth_date) [Mois de naissance], year_result,
	NULLIF(year_result, 4) [Nouveau resultat]
FROM student
WHERE MONTH(birth_date) NOT IN (12, 1, 2, 3)
	AND year_result < 7

-- Autre solution (dépréciée)

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
--- L'utilisation de GROUP BY peut être considérée comme une forme de
--- boucle dans une requête SQL ? (Vrai/Faux)

-- Si l'on considére que le systême applique plusieurs fois la même fonction agrégative à des
-- ensembles de données différents, le GROUP BY s'apparente en quelques sortes à une boucle 

-- Exercice 2.4.2
--- La répartition en groupe se fait avant de prendre en compte les restrictions
--- imposées par un WHERE ? (Vrai/Faux)

-- Faux. Le systême passe dans le WHERE avant de s'attaquer au GROUP BY, ce qui lui
-- permet d'éliminer un certains nombres de lignes et d'allèger le traitement

-- Exercice 2.4.3
--- Un GROUP BY doit impérativement porter sur une colonne non alliacée ?

-- Vrai. Comme le systême n'est pas encore passé dans le SELECT au moment de traiter le
-- GROUP BY, il ne connait pas encore les allias que l'on a éventuellement créés et ne peut donc pas
-- les utiliser 

-- Exercice 2.4.4
--- L'utilisation d'un GROUP BY a pour effet de trier les résultats dans l'ordre
--- croissant de la colonne incluse dans le GROUP BY ? (Vrai/Faux)

-- Cela s'avère vrai sur la plupart des systêmes

-- Exercice 2.4.5
--- La colonne sur laquelle porte le GROUP BY doit impérativement être
--- présente dans la clause SELECT ? (Vrai/Faux)

-- Faux. On peut tout à fait n'afficher que le résultat du GROUP BY sans le faire
-- correspondre à son groupe, à nous de savoir à quoi correspond l'affichage. C'est d'ailleurs ce que
-- nous devrons faire dans les requêtes imbriquées de la partie VII 

-- Exercice 2.4.6
--- Les requêtes suivantes sont-elles valides ?

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
-- Donner pour chaque section, le résultat maximum (dans une colonne appelée
--- Resultat maximum) obtenu par les étudiants 

SELECT section_id, MAX(year_result) [Resultat maximum]
FROM student
GROUP BY section_id

-- Exercice 2.4.8 
-- Donner pour toutes les sections commençant par 10, le résultat annuel moyen
--- PRECIS (dans une colonne appelée Moyenne) obtenu par les étudiants 

SELECT section_id, AVG(CAST(year_result AS float)) [Moyenne]
FROM student
WHERE section_id LIKE '10%'
GROUP BY section_id

-- Exercice 2.4.9 
--- Donner le résultat moyen (dans une colonne appelée Moyenne) et le mois
--- en chiffre (dans une colonne appelée Mois de naissance) pour les étudiants nés le même mois
--- entre 1970 et 1985 

SELECT MONTH(birth_date) [Mois de naissance],
	AVG(year_result) [Moyenne]
FROM student
WHERE YEAR(birth_date) BETWEEN 1970 AND 1985
GROUP BY MONTH(birth_date)

-- Exercice 2.4.10 
--- Donner pour toutes les sections qui comptent plus de 3 étudiants, la
--- moyenne PRECISE des résultats annuels (dans une colonne appelée Moyenne) 

SELECT section_id, AVG(CONVERT(FLOAT, year_result))
FROM student
GROUP BY section_id
HAVING COUNT(section_id) > 3


-- Exercice 2.4.11
--- Donner le résultat maximum obtenu par les étudiants appartenant aux
--- sections dont le résultat moyen est supérieur à 8

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
--- L'utilisation de ROLLUP crée des groupes de données en se déplaçant dans
--- une seule direction, partant de la gauche vers la droite par rapport aux colonnes sélectionnées ?
--- (Vrai/Faux)

-- Vrai. Au niveau de l'affichage, le systême suivra toujours l'ordre demandé par le select.
-- Cependant, la fonction de regroupement est appliquée en remontant les colonnes de la droite vers la
-- gauche. 


-- Exercice 2.5.2 
--- Le résultat produit par un ROLLUP présente les résultats du plus agrégé au
--- moins agrégé ? (Vrai/Faux)

-- Faux, il n'y a pas de tri sur la façon dont les données sont regroupées

-- Exercice 2.5.3 
--- L'opérateur CUBE permet de produire moins de sous-totaux qu'avec
--- l'opérateur ROLLUP ? (Vrai/Faux)

-- Faux, c'est l'inverse puisque le CUBE rajoute des agrégations supplémentaires

-- Exercice 2.5.4 
--- Avec l'opérateur CUBE, le nombre de groupes dans le résultat est
--- indépendant du nombre de colonnes sélectionnées dans le GROUP BY ? (Vrai/Faux)

-- Faux, le CUBE est directement lié au GROUP BY

-- Exercice 2.5.5 
--- L'opérateur CUBE ne peut pas étre appliqué à la fonction d'agrégation
--- SUM ? (Vrai/Faux)
 
 -- Faux, le CUBE peut être utilisé avec toutes les fonctions d'agrégation 

-- Exercice 2.5.6 
--- Donner la moyenne exacte des résultats obtenus par les étudiants par section
--- et par cours, ainsi que la moyenne par section uniquement et enfin, la moyenne générale. La liste
--- ainsi produite reprend l'id de section, de cours le résultat moyen (dans une colonne appelée à
--- Moyenne). Se baser uniquement sur les sections 1010 et 1320

SELECT section_id, course_id, AVG(CONVERT(FLOAT, year_result)) as 'Moyenne'
FROM student
WHERE section_id IN (1010, 1320)
GROUP BY ROLLUP (section_id, course_id)

-- Exercice 2.5.7 
--- Donner la moyenne exacte des résultats obtenus par les étudiants par cours et
--- par section, ainsi que la moyenne par cours uniquement, puis par section uniquement et enfin, la
--- moyenne générale. La liste ainsi produite reprend l'id de section, de cours le résultat moyen (dans
--- une colonne appelée Moyenne). Se baser uniquement sur les sections 1010 et 1320

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
--- Donner pour chaque section, l'id, le nom et le nom de son délégué. Classer les
--- sections dans l'ordre inverse des id de section. Un délégué est un étudiant de la table STUDENT

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
--- Même objectif que la question 3 mais seuls les sections comportant au moins
--- un professeur doivent être reprises

SELECT s.section_id, s.section_name, p.professor_name
FROM section s
JOIN professor p
	ON s.section_id = p.section_id

-- Exercice 2.6.5 
--- Donner à chaque étudiant ayant obtenu un résultat annuel supérieur ou égal à
--- 12 son grade en fonction de son résultat annuel et sur base de la table grade. La liste doit être
--- classée dans l'ordre alphabétique des grades attribués

SELECT s.last_name, s.year_result, g.grade
FROM student s
JOIN grade g
    ON s.year_result BETWEEN g.lower_bound AND g.upper_bound
WHERE s.year_result >=12
ORDER BY g.grade

-- Exercice 2.6.6 
--- Donner la liste des professeurs et la section à laquelle ils se rapportent ainsi
--- que le(s) cour(s) (nom du cours et crédits) dont le professeur est responsable. 
--- La liste est triée par ordre décroissant des crédits attribués à un cours
 
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
--- Donner pour chaque professeur son id et le total des crédits ECTS
--- (ECTS_TOT) qui lui sont attribués. La liste proposée est triée par ordre décroissant de la somme
--- des crédits alloués

SELECT p.professor_id, SUM(c.course_ects) [ECTS_TOT]
FROM professor p
LEFT JOIN course c
	ON p.professor_id = c.professor_id
GROUP BY p.professor_id
ORDER BY [ECTS_TOT] DESC

-- Exercice 2.6.8 
--- Donner la liste (nom et prénom) de l'ensemble des professeurs et des
--- étudiants dont le nom est composé de plus de 8 lettres. Ajouter une colonne pour préciser la
--- catégorie (S pour STUDENT, P pour PROFESSOR) à laquelle appartient l'individu

-- Récupérer la liste de l'ensemble des professeurs dont le nom est composé de plus de 8 lettres
SELECT professor_surname, professor_name, 'P' as [Categorie]
FROM professor
WHERE LEN(professor_name) > 8

-- Récupérer la liste de l'ensemble des étudiants où le nom est composé de plus de 8 lettres
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
--- Donner l'id de chacune des sections qui n'ont pas de professeur attitré

-- Récupérer la liste des sections
SELECT section_id
FROM section

-- Récupérer la liste des professeurs
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
-- Module 2 - Partie VII : Requêtes imbriquées
--
--


-- Exercice 2.7.1 
--- Donner la liste des étudiants (nom et prénom) qui font partie de la même
--- section que mademoiselle Roberts. La liste doit être classée par ordre alphabétique sur le nom
--- et mademoiselle Roberts ne doit pas apparaitre dans la liste

-- Préparer la requête en 2 parties : 

--- D'abord la sous-requete : qu'est-ce qu'on doit récupérer pour réaliser 
--- la requête principale

SELECT section_id
FROM student
WHERE last_name LIKE 'Roberts'

--- Ensuite la requête principale (assemblage de la requête principale avec
--- la sous-requête)

SELECT last_name, first_name, section_id
FROM student
WHERE section_id = (
		SELECT section_id
		FROM student
		WHERE last_name LIKE 'Roberts'	
	) AND last_name <> 'Roberts'

-- Exercice 2.7.2 
--- Donner la liste des étudiants (nom, prénom et résultat) de l'ensemble des
--- étudiants ayant obtenu un résultat annuel supérieur au double du résultat moyen pour l'ensemble
--- des étudiants

-- Récupérer le résultat moyen pour l'ensemble des étudiants
SELECT AVG(year_result)
FROM student

-- Récupérer la liste des étudiants
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
--- Donner la liste des éudiants qui ont comme mois de naissance le mois
--- correspondant à la date d'engagement du professeur Giot. Classer les étudiants par ordre de
--- résultat annuel décroissant

-- Sous-requête - mois de naissance le mois correspondant à la date d'engagement du professeurGiot
SELECT MONTH(professor_hire_date)
FROM professor p
WHERE p.professor_name LIKE 'Giot'

-- Requête principale
SELECT last_name, first_name, CONVERT(VARCHAR, birth_date, 101) [Date de Naissance], year_result
FROM student
WHERE DATEPART(MONTH, birth_date) = (
		SELECT MONTH(professor_hire_date)
		FROM professor p
		WHERE p.professor_name LIKE 'Giot'
	)
ORDER BY year_result DESC

-- Exercice 2.7.5 
--- Donner la liste des étudiants qui ont obtenu le grade TB pour leur résultat
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
--- Donner la liste des étudiants qui appartienne à la section pour laquelle
--- Mademoiselle Marceau est déléguée
 
-- Mademoiselle Marceau est déléguée - section
SELECT student_id
FROM student
WHERE last_name LIKE 'Marceau'

-- Récupération de la section de Marceau
SELECT section_id
FROM section
WHERE delegate_id = 15

-- Récupération de la liste des étudiants de la section de Marceau
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
--- Donner la liste des sections qui se composent de plus de quatre étudiants

-- Récupérer les sections (id) où les étudiants sont plus de 4 => table étudiant
SELECT section_id
FROM student
GROUP BY section_id
HAVING COUNT(*) > 4

-- Récupérer les informations des sections => table section
SELECT section_id, section_name
FROM section
WHERE section_id IN (
		SELECT section_id
		FROM student
		GROUP BY section_id
		HAVING COUNT(*) > 4
	)


-- Exercice 2.7.8 
--- Donner la liste des étudiants premiers de leur section en terme de résultat
--- annuel et qui n'appartiennent pas aux sections dont le résultat moyen est inférieure à 10

-- Moyenne par section ?
SELECT AVG(year_result)
FROM student
GROUP BY section_id

-- Sections dont le résultat moyen est inférieure à 10 ?

SELECT section_id
FROM student
GROUP BY section_id
HAVING AVG(year_result) < 10

-- étudiants qui n'appartiennent pas aux sections dont le résultat moyen est inférieure à 10
SELECT * 
FROM student
WHERE section_id NOT IN (
		SELECT section_id
		FROM student
		GROUP BY section_id
		HAVING AVG(year_result) < 10
	)

-- Meilleur résultat par section
SELECT section_id, MAX(year_result)
FROM student
GROUP BY section_id

-- Infos du meilleur étudiant par section
SELECT last_name, first_name, section_id
FROM student s
WHERE year_result = (
		SELECT MAX(year_result)
		FROM student s1
		WHERE s.section_id = s1.section_id
		GROUP BY section_id
	)

-- Requête principale

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


