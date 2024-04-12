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
const dots = document.querySelector(".dots")
let index = 0;


// Fonctions
function suivant() {
	index++;

	if (index > slides.length - 1) {
		index = 0;
	}

	displaySlide()
	updateDots()
}


/**
 * Afficher la slide précédente
 */
function precedent() {
	index--;
	
	if (index < 0) {
		index = slides.length -1;
	}

	displaySlide()
	updateDots()
}


/**
 * Remplace l'affichage de la slide en fonction de la valeur de l'index 
 */
function displaySlide(){
	slideImageDOM.setAttribute("src", slides[index].image);
	slideTextDOM.innerHTML = slides[index].tagLine;
}


/**
 * Cette fonction créé un point pour chacun des objets du tableau slides et rempli le premier point
 */
function displayDots() {
	slides.forEach((slide, index) => {
		const dot = document.createElement("span")
		dot.classList.add("dot")
		dots.appendChild(dot)	

		if (index === 0) {
			dot.classList.add("dot_selected")
		}
	})
}


/**
 * Cette fonction met à jour le remplissage des points en fonction de l'index
 */
function updateDots() {
	const allDots = document.querySelectorAll(".dot");
    
    allDots.forEach((dot, dotPosition) => {
        if (dotPosition === index) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}


// Appels des fonctions 
displaySlide()
displayDots()


// Listeners
arrowLeftDOM.addEventListener("click", precedent)
arrowRightDOM.addEventListener("click", suivant)