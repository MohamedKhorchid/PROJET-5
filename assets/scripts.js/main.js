//slides.nomImage = image1

/*
console.log(slides[0]) =>
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},


console.log(slides[1]) =>
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},


console.log(slides[1].image) => "slide2.jpg",
*/

//Méthode avec le tableau et l'incrémentation

const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Variables
const arrowLeftDOM = document.querySelector(".arrow_left");
const arrowRightDOM = document.querySelector(".arrow_right");
const slideImageDOM = document.querySelector(".banner-img");
const slideTextDOM = document.querySelector("#banner p");
let index = 0;

// Fonctions
function suivant() {
	index++;
	if (index > slides.length - 1) {/* slides.length pour traduire à javascript la dernière valeur du tableau pour qu'il revienne à la
		 premire valeur sinon il prendra une 4eme valeur qui n'existe pas*/
		index = 0;//retour à la première valeur
	}

	displaySlide()
}

/**
 * Afficher la slide précédente
 */
function precedent() {
	index--;/*je pars de l'image qui correspond à l'objet 0 du tableau et je décrémente, donc, je retire 1 et maintenant index = -1, 
	sauf que javascript ne connait pas de valeur -1 dans le tableau il connait juste 0,1,2,3 
	il faudra donc que index corresponde à autre chose que -1*/
	if (index < 0) { //je crée une condition qui permet de vérifier si l'index correspond à un nombre inférieur au premier objet du tableau 
		index = slides.length -1;/*si c'est le cas, je remplace la valeur -1 (qui est inférieur à 0 et que javascript ne connait pas)
		 par la derniere valeur du tableau, c'est à dire, par l'objet 3*/
	}

	displaySlide()
}

/**
 * Remplace l'affichage de la slide en fonction de la valeur de l'index 
 */
function displaySlide(){
	slideImageDOM.src = slides[index].image;/* j'entengistre une nouvelle source à mon image qui prendra pour valeur la valeur image du tableau slide en fonction de la position de l'index*/
	slideTextDOM.innerHTML=slides[index].tagLine; 
}


// Listeners
arrowLeftDOM.addEventListener("click", precedent)
arrowRightDOM.addEventListener("click", suivant)


//Méthode en vérifiant les sources des images
/*
let myImage = document.querySelector(".banner-img");
let myArrowLeft = document.querySelector(".arrow_left");
let myArrowRight = document.querySelector(".arrow_right");

myArrowRight.addEventListener("click", function() {
	let mySrc = myImage.getAttribute("src");
	if (mySrc === "./assets/images/slideshow/slide1.jpg") {
		myImage.setAttribute("src", "./assets/images/slideshow/slide2.jpg")
	} else if (mySrc === "./assets/images/slideshow/slide2.jpg") {
		myImage.setAttribute("src", "./assets/images/slideshow/slide3.jpg")
	} else if (mySrc === "./assets/images/slideshow/slide3.jpg") {
		myImage.setAttribute("src", "./assets/images/slideshow/slide4.png")
	} else {
		myImage.setAttribute("src", "./assets/images/slideshow/slide1.jpg")
	}
})

myArrowLeft.addEventListener("click", function() {
	let mySrc = myImage.getAttribute("src");
	if (mySrc === "./assets/images/slideshow/slide1.jpg") {
		myImage.setAttribute("src", "./assets/images/slideshow/slide4.png")
	} else if (mySrc === "./assets/images/slideshow/slide4.png") {
		myImage.setAttribute("src", "./assets/images/slideshow/slide3.jpg")
	} else if (mySrc === "./assets/images/slideshow/slide3.jpg") {
		myImage.setAttribute("src", "./assets/images/slideshow/slide2.jpg")
	} else {
		myImage.setAttribute("src", "./assets/images/slideshow/slide1.jpg")
	}
})
*/