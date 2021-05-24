# Menu navigation:
* Section [intro](./intro.md)\
La section intro vous donne une petite idée de ce qu'est MarkDown.
* Section [mise en forme](./mise_en_forme.md)\
La section mise en forme vous montre comment agrémenter votre texte
* Section [hierarchie](./hierarchie.md):
La section hierarchie donne des informations sur comment hierarchiser votre fichier.
* Section [source](./source.md)\
La section source vous donne toutes les sources utilisées pour rédiger les fichiers md 

## Liens et médias dans markdown

### Liens
Pour réaliser un lien simple, il faut utiliser la syntaxe suivante:   
`[title](https://www.example.com)`  
*Exemple:* `[Lien vers Linkedin](https://www.linkedin.com)` vous donnera [Lien vers Linkedin](https://www.linkedin.com)  

### Liens relatifs
Pour réaliser un lien relatif, il faut utiliser la syntaxe suivante:   
`[title](folder/readme.md)`  
*Exemple:* `[Lien vers l'index](/readme.md)` vous donnera [Lien vers l'index](/readme.md) 

### Images 
Pour afficher une image, il faut utiliser la syntaxe suivante:  
`![alt text](image.jpg)`  
*Exemple:* `![img-cat](img/cat.jpg))` vous donnera <img src=img/cat.jpg width=50px height=50px>  

### Images animées .gif
Pour afficher une image animée, il faut utiliser la syntaxe suivante:  
`![alt text](image.jpg)`  
*Exemple:* `![img-cat](img/gifex.gif))` vous donnera <img src=img/gifex.gif width=50px height=50px> 

### Citations
Pour écrire une citation, on utilise un chevron fermant `>`suivi d'un espace pour débuter la citation.
*Exemple:* `> Rien de grand ne s'est accompli dans le monde sans passion`vous donnera: 
> Rien de grand ne s'est accompli dans le monde sans passion

### Mentions
Pour mentionner un membre de votre équipe ou une organistion, on utilise la syntaxe suivante:
`username@mentions`  
*Exemple:* `ch-vlvd-dev@mentions`vous donnera : ch-vlvd-dev@mentions  

### Bloc de code  
Un bloc code commence par une première ligne composée de : ````` et se termine par une ligne similaire.
Vous placez votre code entre ces deux lignes.

*Exemple:* 
<p>
```
$result = $dbcon->query('SELECT * FROM tableop WHERE tags LIKE "%php%" ORDER BY title');
      while ($data = $result->fetch()) 
```
</p>

vous donnera :

```
$result = $dbcon->query('SELECT * FROM tableop WHERE tags LIKE "%php%" ORDER BY title');
      while ($data = $result->fetch()) 
```


### Emoji
**M**ark**D**own vous permet d'insérer des `emojis` en utilisant `:nom-emoji:`  
*Exemple:* `:rocket:` vous donnera :rocket:  

La liste complète des emojis est disponible [ici](https://gist.github.com/rxaviers/7360908)  

