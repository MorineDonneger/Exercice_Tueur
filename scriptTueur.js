//Exo 2 : Le tueur en série
//Un tueur en série nommé Jason est en cavale. Il est caché quelque part en forêt.
//Une équipe de choc est présente pour le neutraliser.
//Nous avons besoin d’un tueur nommé Jason et qui possède 100 points de vie.
//Nous avons besoin de Caractéristiques de personnages avec des noms bien clichés (nerd, sportif, blonde…),
//Une probabilité de mourir, une de mettre des dégâts et une de mourir en mettant des dégâts (ex: 0.3, 0.5, 0.2)
//Nous avons besoin de 5 Survivants avec un nom généré aléatoirement d’un tableau de prénoms et d’une caractéristique prise de celles disponibles (toujours aléatoire).
//Tant que le tueur n’est pas mort ou que les survivants n’ont pas tué Jason :
//Le tueur attaque un des survivants :
//- soit le survivant meurt
//- soit le survivant esquive et inflige 10 points de dégâts
//- soit le survivant inflige 15 points de dégâts mais meurt
//Les morts seront affichés à la fin
//Un message est attendu pour chaque action (Jason a tué X, X a esquivé et a infligé X dmg, Jason est mort,
//Les survivants ont gagné mais RIP à X, X, X…)

"use strict";

let prenom = "Jason"; //Prénom tueur
let pvDépart = 100; //Point de vie Tueur
let tousSurvivants = ["Jane","Peggy","Maria","Natasha","Wanda","Loki","Thor","Steve","Nicolas","Bucknam","Peter","Pietro","Ned","Bruce","Tony","Clint"] //Tableau de prénom des survivants
let tabCaractéristique = ["L'intello","Populaire","Sportif/Sportiveve","Mystérieuse/Mystérieux","Musicien/Musicienne","Le Bon","La Brute","Le Truand","Geek dans le fauteuil","Monsieur/Madame je sais tout",] //Tableau de caractéristiques des personnages
let equipe2Choc; //Variable qui va récupéré les nombres générés aléatoirement pour les prénoms
let nom; //Variable 
let e2c = []; //Tableau avec la futur équipe de survivant
let randCrctq; //Variable qui va récupéré les nombres générés aléatoirement pour les caractéristiques
let cA; //Variable
let crctq = []; //Tableau avec les futurs caractéristiques de l'équipe
let tab = []; //Tableau avec les prénoms et caractéristiques de la futur équipe de choc
let probabilitéEnd = ["Mourir","Infliger des dégâts","Mourir en inflgeant des dégâts"] //Tableau avec les différentes possibilité de fin
let quePassa; //Variable qui va récupéré les nombres générés aléatoirement pour les actions
let qP; //Future action pour chaque tour
let tabMort = []; //Tableau qui se remplira par le nom des victimes


function rencontreSurvivant(pv,survivant,caractéristique,probabilité){

    for(let i = 0; e2c.length<5; i++){ //Pour i allant de 0 à 4,
        equipe2Choc = (Math.floor(Math.random() * tousSurvivants.length)) //On génère un nombre aléatoire avec la longeur du tableau des survivants

        switch(equipe2Choc){ //Je "transcrit" le chiffre aléatoire avec le prénom du survivant avec qui il correspond
            case 1:
                nom = "Jane";
                break;
            case 2:
                nom = "Peggy";
                break;
            case 3:
                nom = "Maria";
                break;
            case 4:
                nom = "Natasha";
                break;
            case 5:
                nom = "Wanda";
                break;
            case 6:
                nom = "Loki"
                break;
            case 7:
                nom = "Thor";
                break;
            case 8:
                nom = "Steve"
                break;
            case 9:
                nom = "Nicolas";
                break;
            case 10:
                nom = "Bucknam";
                break;
            case 11:
                nom = "Peter";
                break;
            case 12:
                nom = "Pietro";
                break;
            case 13:
                nom = "Ned";
                break;
            case 14:
                nom = "Bruce"
                break;
            case 15:
                nom = "Tony";
                break;
            case 16:
                nom = "Clint"
                break;
        }
        e2c.push(nom); //J'affecte les 5 prénoms à ce tableau

        //for(let i=0; i<e2c.length; i++) {
            //if(nom === e2c[i]){
            //    break;
            //}else{
                //e2c.push(nom); //J'affecte les 5 prénoms à ce tableau
                //break;
            //}
    }

    for(let i = 0; i<5; i++){ //Pour i allant de 0 à 4,
        randCrctq = (Math.floor(Math.random() * tabCaractéristique.length)) //On génère un nombre aléatoire avec la longeur du tableau des caractéristiques

        switch(randCrctq){ //Je "transcrit" le chiffre aléatoire avec la caractéristique avec qui elle correspond
            case 1:
                cA = "L'intello";
                break;
            case 2:
                cA = "Populaire";
                break;
            case 3:
                cA = "Sportif/Sportive";
                break;
            case 4:
                cA = "Mystérieuse/Mystérieux";
                break;
            case 5:
                cA = "Musicien/Musicienne";
                break;
            case 6:
                cA = "Le Bon"
                break;
            case 7:
                cA = "La Brute";
                break;
            case 8:
                cA = "Le Truand"
                break;
            case 9:
                cA = "Geek dans le fauteuil";
                break;
            case 10:
                cA = "Monsieur/Madame je sais tout";
                break;
        }
        crctq.push(cA); //J'affecte les 5 caractéristiques à ce tableau
        
    }
    for(let i = 0; i<5; i++){ //Pour i allant de 0 à 4,
        tab.push(`${e2c[i]} ${crctq[i]}`); //Je récupère les prénoms et caractéristiques générés et je les concatène dans ce tableau
    }
    while(pv != 0){
        for(let i = 0; i<tab.length; i++){ //Pour i allant de 0 à 4,
            quePassa = (Math.floor(Math.random() * probabilitéEnd.length)) //On génère un nombre aléatoire avec la longeur du tableau des actions possibles
    
            switch(quePassa){ //Je "transcrit" le chiffre aléatoire avec l'action du tueur et des survivant qui correspond
                case 1:
                    qP = "Mourir"; //Le tueur tue le survivant
                    break;
                case 2:
                    qP = "Infliger des dégâts"; //Le survivant inglige des dégâts au tueur
                    break;
                case 3:
                    qP = "Mourir en inflgeant des dégâts"; //Le survivant inglige des dégâts au tueur mais il meurt
                    break;
            }
    
            if(qP == "Mourir"){ //Si le tueur tue le survivant
                tabMort.push(tab[i]) //On apprend la victime dans le tableau des morts
                console.log(`${prenom} a tué ${tab[i]}.`); //On affiche ce qu'il en est dans la console
                tab.splice(tab[i]) //On enlève le survivant du tableau étant donné qu'il est mort
            }else if(qP == "Infliger des dégâts"){ //Si le survivant inglige des dégâts au tueur
                pv = pv - 10 //Jason perd 15 point de vie
                console.log(`${tab[i]} a esquivé l'attaque du tueur et a infligé 10 dégâts à ${prenom}`); //On affiche ce qu'il en est dans la console
            }else{ //Si le survivant inglige des dégâts au tueur mais il meurt
                pv = pv - 15 //Jason perd 15 point de vie
                tabMort.push(tab[i]) //On apprend la victime dans le tableau des morts
                console.log(`${prenom} a été attaqué par ${tab[i]} et perd 15 dégâts mais ${tab[i]} est mort sur le coup.`); //On affiche ce qu'il en est dans la console
                tab.splice(tab[i]) //On enlève le survivant du tableau étant donné qu'il est mort
            }
            if(tab.length == 0){ //Si tab est vide alors il n'y a plus de survivant
                break; //donc on arrête la boucle while
            }
        }
    }
    if(pv == 0){ //Si Jason n'a plus de point de vie,
        console.log(`${prenom} n'a pas survécu à léquipe de choc des survivants. Nou comptons tout de même ${tabMort} parmis les morts.`); //Alors les survivants gagne et on affiche qui sont les victimes du tueur
    }else if(pv != 0){ //S'il reste des points de vie à Jason,
        console.log(`Les survivants sont tous morts assasinés par ${prenom}.Le tueur est toujours en fuite. Pamis les morts nouc comptons ${tabMort}.`); //Alors il gagne et on affiche tous les morts
    }
    }
    
    rencontreSurvivant(pvDépart,tousSurvivants,tabCaractéristique,probabilitéEnd) //J'appelle la fonction pour executer le programme
