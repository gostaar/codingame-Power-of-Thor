<h1>Objectif</h1>
Votre programme doit permettre à Thor de rejoindre l'éclair de puissance.
<h1>Règles</h1>
Thor évolue sur une carte de 40 cases de large et 18 cases de hauteur. Notez que les coordonnées (X et Y) commencent en partant du haut ! Ainsi la case la plus en haut à gauche a pour coordonnées "X=0,Y=0" et celle située le plus en bas à droite a pour coordonnées "X=39,Y=17".

<h2>Au début du programme </h2>vous recevez :
la variable lightX : la position X de l'éclair que Thor doit rejoindre.
la variable lightY : la position Y de l'éclair que Thor doit rejoindre.
la variable initialTX : la position X initiale de Thor.
la variable initialTY : la position Y initiale de Thor.
<h2>À la fin du tour de jeu</h2>, vous devez afficher la direction que Thor doit prendre parmi :
	
N (Nord)
NE (Nord-Est)
E (Est)
SE (Sud-Est)
S (Sud)
SW (Sud-Ouest)
W (Ouest)
NW (Nord-Ouest)
Chaque déplacement fait bouger Thor de 1 case dans la direction choisie.
 
 
Conditions de victoire
Vous gagnez lorsque Thor arrive sur l'éclair de puissance
 
Conditions de défaite
Thor sort de la carte

Phase initiale
Thor démarre sur la carte à la position (3, 6). L'éclair se trouve en (3, 8).

Tour 1
Action S : Thor se dirige vers le sud.
Nouvelle position = (3, 7).

Tour 2
Action S : Thor se dirige vers le sud.
Nouvelle position = (3, 8).
<h1>Note</h1>
N'oubliez pas d'exécuter les tests depuis la fenêtre "Jeu de tests".
Attention : les tests fournis et les validateurs utilisés pour le calcul du score sont légèrement différents pour éviter les solutions codées en dur
<h2>Entrées du jeu</h2>
Le programme doit d'abord lire les données d'initialisation depuis l'entrée standard, puis, dans une boucle infinie fournir sur la sortie standard les instructions de mouvement de Thor.
<h2>Entrées d'initialisation</h2>
Ligne 1 : 4 entiers lightX lightY initialTX initialTY. (lightX, lightY) indique la position de l'éclair. (initialTX, initialTY) indique la position initiale de Thor.
<h2>Entrée pour un tour de jeu</h2>
Ligne 1 : le nombre de déplacements restant pour permettre à Thor de rejoindre l'éclair de puissance remainingTurns. Vous pouvez ignorer cette valeur mais vous devez la lire.
<h2>Sortie pour un tour de jeu</h2>
Une ligne unique indiquant le mouvement à effectuer : N NE E SE S SW W ou NW
<h2>Contraintes</h2>
0 ≤ lightX < 40
0 ≤ lightY < 18
0 ≤ initialTX < 40
0 ≤ initialTY < 18
Temps de réponse pour un tour ≤ 100ms
<h2>Synopsis</h2>
La bataille finale du Ragnarök, le crépuscule des dieux, approche... Vous incarnez Thor qui participe à cette lutte contre toutes les forces du mal menées par Loki, le frère sorcier de Thor.

Thor est sorti blessé d'un précédent combat l'opposant à Fenrir, le dieu-loup. Durant ce combat, Loki, profitant de la confusion, utilisa sa magie pour annihiler les pouvoirs magiques du marteau de Thor, Mjöllnir, en le séparant de son âme : l'éclair de puissance.

Thor, très affaibli, doit au plus vite retrouver et atteindre l'éclair, seul capable de restaurer les pouvoirs de Mjöllnir et de son maitre.
