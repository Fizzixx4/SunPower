// ---------------MODAL CONTACT 1 --------------
import formulaire1 from "./form.js";
import formulaire2 from "./form2.js";
import formulaire3 from "./form3.js";

// Je déclare mes variables 
let overlay = document.getElementById("overlay_1");
let contact = document.getElementById("contact_1");
let span_close = document.getElementsByClassName("close1")[0];

// Au click -> overlay passe de none -> block et body sans scroll
contact.addEventListener('click', () => {
    formulaire1();
    overlay.style.display = "block" ;
    document.body.style.overflow = "hidden";
})

// Au click sur "close" -> overlay -> none et body -> scroll
span_close.addEventListener('click', () => {
    overlay.style.display="none";
    document.body.style.overflow = "scroll";    
})

// Je rajoute un écouteur d'évenement -> au click à l'exterieur je ferme ma modal
overlay.addEventListener('mousedown', (event) => {
    if(event.target === overlay) {
        overlay.style.display = "none";
        document.body.style.overflow = "scroll";
    }
})

// ---------------MODAL CONTACT 2 --------------

let overlay2 = document.getElementById("overlay_2");
let contact2 = document.getElementById("contact_2");
let span_close2 = document.getElementsByClassName("close2")[0];

// Au click -> overlay passe de none -> block et body sans scroll
contact2.addEventListener('click', () => {
    formulaire2();
    overlay2.style.display = "block" ;
    document.body.style.overflow = "hidden";
})

// Au click sur "close" -> overlay -> none et body -> scroll
span_close2.addEventListener('click', () => {
    overlay2.style.display="none";
    document.body.style.overflow = "scroll";    
})

// Je rajoute un écouteur d'évenement -> au click à l'exterieur je ferme ma modal
overlay2.addEventListener('mousedown', (event) => {
    if(event.target === overlay2) {
        overlay2.style.display = "none";
        document.body.style.overflow = "scroll";
    }
})

// ---------------MODAL CONTACT 3 --------------

let overlay3 = document.getElementById("overlay_3");
let contact3 = document.getElementById("contact_3");
let span_close3 = document.getElementsByClassName("close3")[0];

// Au click -> overlay passe de none -> block et body sans scroll
contact3.addEventListener('click', () => {
    formulaire3();
    overlay3.style.display = "block" ;
    document.body.style.overflow = "hidden";
})

// Au click sur "close" -> overlay -> none et body -> scroll
span_close3.addEventListener('click', () => {
    overlay3.style.display="none";
    document.body.style.overflow = "scroll";    
})

// Je rajoute un écouteur d'évenement -> au click à l'exterieur je ferme ma modal
overlay3.addEventListener('mousedown', (event) => {
    if(event.target === overlay3) {
        overlay3.style.display = "none";
        document.body.style.overflow = "scroll";
    }
})

