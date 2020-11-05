# Fixer les acquis en git


## configuration & clef


**git config --global user.email "[email address]"** configufation 

**ssh-keygen -t rsa -b 4096 -C "your_email@example.com"** Pour la clé SSH


## les commandes utiliser 


**git clone url** permet de cloner un répertoire

**ls** permet de voir les fichiers présenter dans le répertoire

**git branch -a** liste les branches

**git checkout nombranche** se déplace dans la branche

>bien souvent c'est __origin nombranche__



### création d'une branche 


**git branch nombranche** création d'une branche

**git checkout -b nombranche** création d'une branche et se place dans la branche créer



### rajouter fichier


**git add nomfichier** rajout fichier

__git add *__ rajouter tout les fichiers

**git commit -m "commentaire"** rajouter d'un commentaire

**git push** rajout sur le serveur



### rajouter modification sur une autre branche 

**git checkout nombranche** aller sur une autre branche

**git merge nombranche** merge la branche à cloner

**git commit -m "commentaire"** ajout d'un commentaire

**git push --set-upstream origin nombranche** rajout sur le serveur 


### autres commandes


**git pull** permet de charger les nouveautés.

**git revert** retour en arrière dans une modification 
>commande spécial Loïc \o/


