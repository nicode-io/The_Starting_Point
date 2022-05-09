# Menu navigation:
* Section [intro](./intro.md)\
La section intro vous donne une petite idée de ce qu'est MarkDown.
* Section [mise en forme](./mise_en_forme.md)\
La section mise en forme vous montre comment agrémenter votre texte
* Section [media](./media.md)\
La section media vous montre comment ajouter des liens, des images, ...
* Section [source](./source.md)\
La section source vous donne toutes les sources utilisées pour rédiger les fichiers md 


# Comment utiliser les différents niveaux de titres:

Pour avoir différents niveaux de titres, nous devons utiliser le caractère __"#"__.\
Voici quelques exemples avec leur équivalent en html:

- # Titre --> H1
- ## Titre --> H2
- ### Titre --> H3
- ###### Titre --> H6

# Comment créer un paragraphe:

Les paragraphes sont séparés par un saut de ligne entre chaque paragraphe.\
Voici un exemple:

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt risus magna, id faucibus dui gravida ut. Nulla facilisi. Mauris id arcu id urna pharetra gravida nec sit amet lectus. Nam condimentum, lectus sed dictum viverra, tortor justo feugiat neque, ut vehicula velit lacus et dui.

Suspendisse imperdiet maximus urna at elementum. Maecenas est neque, lobortis nec orci quis, suscipit varius nunc. Sed porta velit id cursus condimentum. Proin enim libero, egestas a varius id, lacinia sit amet nisi. Ut posuere ante sed risus fermentum, quis imperdiet risus eleifend. Proin gravida imperdiet nunc, quis vestibulum turpis sodales non. Sed odio felis, feugiat malesuada gravida a, facilisis ac eros.

Etiam lacus lorem, condimentum ac lacus ac, elementum blandit ex. Donec lacinia tortor sed massa faucibus rhoncus. Aliquam varius nisi nisl, eu viverra lectus suscipit convallis. Nullam augue velit, fringilla ut dolor eu, dignissim ornare urna. Quisque in ornare ante, vitae porttitor nisi. Integer aliquam et quam at facilisis. Donec finibus eros id justo ultricies malesuada. Fusce elementum sit amet dui id porta. Vestibulum non lectus augue.

# Comment créer un saut de ligne:

Pour couper une ligne en partie, il faut utiliser __"\\"__ pour arrêter la ligne et recommencer à la ligne suivante.\
Voici un exemple:

Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
Maecenas tincidunt risus magna, id faucibus dui gravida ut.



# Comment créer une liste non ordonnée:

Vous devez utiliser soit le __"-"__, soit le __"*"__.\
Voici un exemple de chaque:

* pomme
* poire
* orange

- carré
- rond
- triangle

Pour créer une sous-liste dans une liste non ordonnée, il faut deux espaces dans cette sous-liste.\
Voici un exemple de liste dans une liste:
* Fruit
  * Apple
  * Orange
  * Banana

- Dairy
  - Milk
  - Cheese

# Comment créer une liste ordonnée:

Vous devez utiliser le chiffre __"1."__ et markdown incrémentera automatiquement la liste.\
Voici un exemple:

1. Un
1. deux
1. trois
1. quatre

Pour créer une sous-liste dans une liste ordonnée, il faut ajouter trois espaces dans cette sous-liste.\
Voici un exemple de liste dans une liste
1. Un
1. deux
   1. deux.un
   1. deux.deux
1. trois

# Comment créer une liste mixte:

Vous devez jongler avec __"*"__ ou __"-"__ et __"1."__ et les espaces.\
Voici un exemple:
* Animaux
  - Mammifères
    - Sauvages
       1. Lions
       1. Tigres
       1. Gazelles
    - Domestiques
       - Chiens
          1. Berger
             1. Berger Allemand
             1. Berger Australien
             1. Berger Belge
          1. Chihuahua
       - Chats
  - Poissons
    
# Comment créer check liste:

Vous devez utiliser __"- [ ]__" ou __"-[X]"__\
Voici un exemple:

- [x] Titres
- [x] liste non ordonnée
- [x] liste ordonnée
- [ ] check list

# Comment créer un tableau:

Vous devez utiliser __"|"__ pour créer les colonnes et __"-"__ pour créer la première ligne pour séparer le nom des colonnes de leurs contenus.\
Voici un exemple :

| Nom colonne 1     | Nom colonne 2     | Nom colonne 3     |
| ------------------| ------------------| ------------------|
| contenu cellule 1 | contenu cellule 2 | contenu cellule 3 |
| contenu cellule 4 | contenu cellule 5 | contenu cellule 6 |
| contenu cellule 7 | contenu cellule 8 | contenu cellule 9 |

