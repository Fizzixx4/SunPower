// On déclare une variable correspondant à l'élément du DOM du bouton burger
const burgerBouton = document.getElementById("nav_bar_burger");

// On déclare une variable correspondant à l'élément du DOM du menu burger
// const burgerMenu = document.getElementsByClassName("navbar_dekstop");
const burgerMenu = document.querySelector(".navbar_dekstop");

//On déclare des variables pointant sur le main et le footer
const main = document.querySelector("main");
const footer = document.querySelector("footer");

//On crée un évènement sur le clic du bouton burger pour afficher le menu
burgerBouton.addEventListener("click", () => {
    if(burgerMenu.classList.contains("transition_nav")){
        burgerMenu.classList.remove("transition_nav"); 
    }
    else{
        burgerMenu.classList.add("transition_nav");
    }
});

//On crée un évènement pour pouvoir fermer le menu en cliquant n'importe où sur l'écran
main.addEventListener("click", () => {
    burgerMenu.classList.remove("transition_nav");
});

footer.addEventListener("click", () => {
    burgerMenu.classList.remove("transition_nav");
});