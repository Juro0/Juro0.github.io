let url = (url) => {
    open(url, "_blank")
}

let urlsw = (url) => {
    location.href = url
}

// MOBILE MENU

let toggleMenu = () => {
    $(".mobile-menu").toggleClass("menu-active")
    $(".mobile-menu").toggleClass("menu-unactive")
    $(".menu-icon").toggleClass("uil-bars")
    $(".menu-icon").toggleClass("uil-times")
}

let closeMenu = () => {
    $(".mobile-menu").addClass("menu-unactive")
    $(".mobile-menu").removeClass("menu-active")
    $(".menu-icon").toggleClass("uil-bars")
    $(".menu-icon").toggleClass("uil-times")
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
        const elementVisible = 100; // maggiore è il numero maggiore è lo spazio prima che parta l'animazione
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

// STARTED ON 12/18/2022
// ULTIMATED ON 12/28/2022
