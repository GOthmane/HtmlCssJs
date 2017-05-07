// Cibler un élément par son id
var titre = document.getElementById("gros_titre");
alert(titre);
// Récupérer le contenu d'un élément
var texteTitre = titre.innerHTML;
alert(texteTitre);

//Cibler des éléments par leur type de balise
var tableau = document.getElementsByTagName("p");
alert("Notre page contient "+tableau.length+" paragraphes");
//Récupérer le contenu d'un élément AVEC balises à l'intérieur
//Les balises de l'élément ciblé n'apparaissent pas
var textePremierParagrapheAvecBalises = tableau[0].innerHTML;
alert(textePremierParagrapheAvecBalises);
//Récupérer le contenu d'un élément SANS les balises à l'intérieur
//Les balises de l'élément ciblé n'apparaissent pas
var textePremierParagrapheSansBalises = tableau[0].textContent;
alert(textePremierParagrapheSansBalises);

//Cibler des éléments par leur classe
var tableau2 = document.getElementsByClassName("para");
alert("Notre page contient "+tableau2.length+" élément(s) de classe para");

//Cibler un élément par son sélecteur avancé
var lien = document.querySelector("p a");
alert(lien);

//Cibler des éléments par leur sélecteur avancé
var tableau3=document.querySelectorAll(".para");
alert("Notre page contient "+tableau3.length+" élément(s) de classe para");