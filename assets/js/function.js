let url = (url) => {
    open(url, "_blank")
}

let urlsw = (url) => {
    location.href = url
}

// SCROLL ANIMATION

let reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 250; // maggiore è il numero maggiore è lo spazio prima che parta l'animazione
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

let mobReveal = () => {
    const reveals = document.querySelectorAll(".mobReveal");
    for (var i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 140; // maggiore è il numero maggiore è lo spazio prima che parta l'animazione
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", ()=>{
    reveal(); mobReveal()
});
reveal()
mobReveal()

// show dialogue

let showDialogue = (text) => {
    alert(text)
}

// PORTFOLIO GENERATOR

// !!! WORK IN PROGRESS
