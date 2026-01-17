Mini projet
Objectif
L'objectif de ce projet est de construire une application de gestion de tâches (To-Do List) moderne. Ce projet vous permettra de manipuler l'ensemble des concepts fondamentaux de React : le découpage en composants, la gestion d'état local, les props, et la persistance de données.
 Mission
Construisez une application de gestion de tâches moderne qui permet de suivre des objectifs quotidiens avec une interface fluide et intuitive.
Fonctionnalités requises
1.	Ajout : Un champ de texte contrôlé pour créer une nouvelle tâche.
2.	Validation : Possibilité de marquer une tâche comme "terminée" (changement visuel : texte barré ou opacité réduite).
3.	Suppression : Un bouton pour retirer définitivement une tâche de la liste.
4.	Filtrage : Implémenter trois vues pour filtrer l'affichage :
o	Toutes : Affiche l'intégralité des tâches.
o	En cours : Affiche uniquement les tâches non terminées.
o	Terminées : Affiche uniquement les tâches complétées.
5.	Persistance : Utiliser le localStorage pour que les tâches restent enregistrées même après avoir actualisé le navigateur.
6.	Compteur : Afficher dynamiquement le nombre de tâches restantes en bas de la liste.
Structure de code suggérée
Pour respecter les bonnes pratiques de React (notamment le Lifting State Up), vous devrez structurer votre application ainsi :
•	App.js : Composant parent. Il contient l'état principal (tasks), l'état du filtre actuel, et les fonctions de modification.
•	TaskForm.jsx : Formulaire contenant l'input et le bouton d'ajout.
•	Filters.jsx : Barre d'outils contenant les boutons de filtrage.
•	TaskList.jsx : Composant qui boucle sur les tâches filtrées pour les afficher.
•	TaskItem.jsx : Composant représentant une seule tâche (reçoit les fonctions de suppression et de validation via les props).
 Contraintes Techniques
•	Utiliser les Hooks useState et useEffect.
•	Gérer les listes avec la méthode .map() en utilisant des key uniques (ne pas utiliser l'index).
•	Empêcher le rechargement de la page lors de la soumission du formulaire (e.preventDefault()).

