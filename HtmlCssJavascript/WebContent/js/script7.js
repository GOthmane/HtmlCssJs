//fonction classique
function multiplication(x,y)
{
	return x*y;
}

//fonction anonyme
var carre=function(x)
{
	return x*x;
}
//appel d'une fonction classique
alert(multiplication(5,2));

var c=prompt("saisir une valeur)")
//appel d'une fonction anonyme
alert(carre(c));
var a = prompt("entrer le premier nombre");
var b = prompt("entrer le deuxième nombre");
alert(multiplication(a,b));