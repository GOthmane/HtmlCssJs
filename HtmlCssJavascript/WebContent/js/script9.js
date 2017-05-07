//Cibler un élément et modifier le contenu de l'élément
document.getElementById("gros_titre").innerHTML+=" HTML"

//Cibler l'attribut d'un élément et le modifier
document.querySelector("a").href="http://www.wikipedia.org"

//Cibler un élément et modifier sa classe
document.querySelector("p").className="para1";

//Cibler un élément et modifier sa classe
document.getElementById("gros_titre").className="styleTitre";

//Cibler une image et la modifier
document.getElementsByTagName("img")[0].src="img/Kangourou.jpg";

//Création d'un élément de type p
var newPara = document.createElement("p");
//Création d'un nouvel attribut
newPara.id="nouveau";
//Création du texte
var texte = document.createTextNode("Texte inséré!");
//Associer le texte à l'élément
newPara.appendChild(texte);
//Associer l'élement à la page
document.body.appendChild(newPara);

//Création d'un élément de type p
var newPara2 = document.createElement("p");
//Création d'un nouvel attribut
newPara2.id="nouveau2";
//Création du texte
var texte2 = document.createTextNode("Texte inséré avant!");
//Associer le texte à l'élément
newPara2.appendChild(texte2);
//Insérer avant le 1er paragraphe
var par1=document.querySelector("p");
document.body.insertBefore(newPara2,par1)

//Supprimer l'élément
var texteSupprime = document.querySelector("h2");
document.body.removeChild(texteSupprime);

//Alignement d'un texte à droite
document.querySelector("h3").className="styleTexteDroite";
