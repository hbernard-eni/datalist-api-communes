# Appel de l'API Communes

## Le projet

La saisie d'au moins 3 lettres (nom de communes française) dans un champ HTML input texte déclenche un script JavaScript qui appelle l'API [Découpage Administratif Communes](https://geo.api.gouv.fr/decoupage-administratif/communes) pour afficher des suggestions dans une balise HTML datalist associé. Le script JavaScript alimente cet élément datalist avec les nom des communes (création de balises HTML "option" avec des fonctions de manipulation du D.O.M.). 

Les fichiers sont largement commentés pour en comprendre le fonctionnement détaillé. 

## Prérequis

* JavaScript : D.O.M. et Ajax.
* API.

## Installation

* Il n'y a que du HTML et du Javascript, donc les fichiers peruvent être placés où bon vous semble. 
* Ouvrir le fichier _index.html_ dans un navigateur.