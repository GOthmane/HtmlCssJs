//1-Cibler un élément
var p1 = document.querySelector("p");

//2-Ajouter un écouteur d'évènement

// Evenement quand on survole p1
p1.addEventListener("mouseover",Fonction1);
function Fonction1() {
	this.innerHTML="Cliquez sur moi maintenant";
	this.style.backgroundColor="orange";
}

// Evenement quand on sort la souris de p1
p1.addEventListener("mouseout",Reset1);
function Reset1() {
	this.innerHTML="Passez sur moi";
	this.style.backgroundColor="";
}

// Evenement quand on appuie sur la souris
p1.addEventListener("mousedown",Fonction2);
function Fonction2() {
	this.innerHTML="Bravo";
	this.className="styleDown";
}

//Evenement quand on relâche sur la souris
p1.addEventListener("mouseup",Reset2);
function Reset2() {
	this.innerHTML="Passez sur moi";
	this.className="styleUp";
}