# Appel de l'API Communes

## Le projet

La saisie d'au moins 3 lettres (nom de communes françaises) dans un champ HTML `<input type="text">` déclenche un script JavaScript qui appelle 
l'API [Découpage Administratif Communes](https://geo.api.gouv.fr/decoupage-administratif/communes) pour afficher des suggestions 
dans une balise HTML datalist associée. Le script JavaScript alimente cet élément datalist avec les noms des communes via la création de balises HTML `<option>` 
avec des fonctions de manipulation du D.O.M.). 

Les fichiers sont largement commentés pour en comprendre le fonctionnement détaillé. 

## Prérequis

* JavaScript : D.O.M. et Ajax.
* API.

## Installation

* Il n'y a que du HTML et du Javascript, donc les fichiers peuvent être placés où bon vous semble. 
* Ouvrir le fichier _index.html_ dans un navigateur.