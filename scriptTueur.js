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
let equipe2Choc; //Variable qui va récupérer les nombres générés aléatoirement pour les prénoms
let nom; //Variable 
let e2c = []; //Tableau avec la futur équipe de survivant
let randCrctq; //Variable qui va récupérer les nombres générés aléatoirement pour les caractéristiques
let cA; //Variable
let crctq = []; //Tableau avec les futurs caractéristiques de l'équipe
let tab = []; //Tableau avec les prénoms et caractéristiques de la futur équipe de choc
let probabilitéEnd = ["Mourir","Infliger des dégâts","Mourir en inflgeant des dégâts"] //Tableau avec les différentes possibilité de fin
let quePassa; //Variable qui va récupérer les nombres générés aléatoirement pour les actions
let qP; //Future action pour chaque tour
let tabMort = []; //Tableau qui se remplira par le nom des victimes
let tabSurv = []; //Tableau qui se remplira par le nom des survivants


function rencontreSurvivant(pv,survivant,caractéristique,probabilité){ //Je créé une fonction avec les paramètres pv, survivant, caractéristique et probabilité

//Partie où on génère l'équipe des survivants et où on leur affecte leur caractéristique cliché

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

        e2c.push(nom);

        //Boucle qui devait éviter les doublons de prénom dans l'équipe des survivants

        //for(let ie = 0; ie<e2c.length; ie++){ //Je parcours le tableau e2c
            //if(e2c.length == 0){ //Si le tableau est vide,
                //e2c.push(nom); //J'affecte ce prénom au tableau
            //}else if(nom === e2c[ie]){ //Si le prénom généré n'est pas déjà inscrit dans le tableau,
                //e2c[ie] = nom //Je réafecte au même indice le prénom, c'est comme si je faisais rien
            //}else{ //Sinon, si le prénom n'est pas dans le tableau,
                //e2c.push(nom); //J'affecte ce prénom au tableau
            //}
        //}

        //Mais qui ne fonctionne pas !!
        //Je devais faire de même pour les caractéristiques

    }

    console.log(`Prénom des survivants : ${e2c}`); //J'affiche dans la console pour vérifier que cela fonctionne

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

    console.log(`Caractéristiques des survivants : ${crctq}`); //J'affiche dans la console pour vérifier que cela fonctionne

    for(let i = 0; i<5; i++){ //Pour i allant de 0 à 4,
        tab.push(` ${e2c[i]} ${crctq[i]}`); //Je récupère les prénoms et caractéristiques générés et je les concatène dans ce tableau
    }

    console.log(`Prénom et caractéristiques de léquipe des survivants : ${tab}`); //J'affiche dans la console pour vérifier que cela fonctionne


//Fin de partie où on génère l'équipe des survivants et où on leur affecte leur caractéristique cliché
//Partie où il y a le programme pour savoir qui gagne et qui perd dans la partie

let ind = 0; //On affecte 0 à ind, cela représentera l'indice du premier élément du tableau, on changera quand même de survivants à chaque tour vu qu'on supprimera le premier élément et qu'on affectera l'indice de cette personne dans un tableau pour mort ou survivant créé à cet effet.

    while(pv != 0){ //Tant que pv est différent de 0, c'est-à-dire tant que Jason est en vie,

        if(tab.length != 0){ //Si le tableau tab n'est pas vide,

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
                tabMort.push(tab[ind]) //On apprend la victime dans le tableau des morts
                console.log(`${prenom} a tué ${tab[ind]}.`); //On affiche ce qu'il en est dans la console
            }else if(qP == "Infliger des dégâts"){ //Si le survivant inglige des dégâts au tueur
                pv = pv - 10 //Jason perd 10 points de vie
                tabSurv.push(tab[ind]) //On apprend le vivant dans le tableau des survivants
                console.log(`${tab[ind]} a esquivé l'attaque du tueur et a infligé 10 dégâts à ${prenom}`); //On affiche ce qu'il en est dans la console
            }else{ //Si le survivant inglige des dégâts au tueur mais il meurt
                pv = pv - 15 //Jason perd 15 points de vie
                tabMort.push(tab[ind]) //On apprend la victime dans le tableau des morts
                console.log(`${prenom} a été attaqué par ${tab[ind]} et perd 15 dégâts mais ${tab[ind]} est mort sur le coup.`); //On affiche ce qu'il en est dans la console
            }
            
            tab.shift(tab[ind]) //Je supprime l'élément du tableau car je l'ai ajouté au tableau des morts ou des vivants
            
        }else if(tab.length == 0){ //Si tab est vide alors il n'y a plus de survivant
            if(tabSurv.length != 0){ //Si jamais il reste des survivants dans le tableau des survivants,
                tab = tabSurv //Alors on les remets dans le tableau tab
            }else{ //Sinon,
                break; //On arrête la boucle while
            }
        }
    
    }

//Dernière condition pour afficher la phrase de fin pour savoir qui sont les gagnants et perdants

    if(pv == 0){ //Si Jason n'a plus de point de vie,
        console.log(`${prenom} n'a pas survécu à léquipe de choc des survivants. Nous comptons tout de même ${tabMort} parmis les morts.`); //Alors les survivants gagnent et on affiche qui sont les victimes potentielles du tueur
    }else if(pv != 0){ //S'il reste des points de vie à Jason,
        console.log(`Les survivants sont tous morts assasinés par ${prenom}.Le tueur est toujours en fuite. Pamis les morts nous comptons ${tabMort}.`); //Alors il gagne et on affiche tous les morts
    }

}
    
rencontreSurvivant(pvDépart,tousSurvivants,tabCaractéristique,probabilitéEnd) //J'appelle la fonction pour executer le programme
