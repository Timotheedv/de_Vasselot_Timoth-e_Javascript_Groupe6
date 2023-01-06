
//Selecteur
//const h1 = document.querySelector("h1")

//const = pour les valeurs constantes//
//let = pour des valeurs variables (ex: un score, une couleur)//

//let color ="red";

//color = "blue";

//h1.style.color = "color"//

// Selecteur
const button = document.querySelector("button");
const h1 = document.querySelector("h1");
const body = document.querySelector("body");



// Listener
button.addEventListener("click", function(){ 
  if (body.classList.contains("light")) { 
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    body.classList.add("light");
    body.classList.remove("dark"); }
    
      
 
});


//Possède des propriétés//
//Possède des méthodes//
//String : chaine de caractère//

//Etapes//
//Créer un bouton// :
//<button>>/button>

//Quand on clique//
//.addEventListener()//


//Couleur du titre change//
//Let color = "red";//
//const h1 = document.querySelector("h1");//
//h1.style.color = color//

//Fonction

//les conditions
//if//
