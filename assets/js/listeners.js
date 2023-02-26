
let clickListener = (el, fun) => {
    el.addEventListener('click', ()=>{
        fun.call()
    })
}

// NAV LOGO
clickListener(
    document.getElementById('nav-logo'),
    ()=>{
        urlsw("#home")
    }
)

// HOME CTAs
clickListener(
    document.getElementsByClassName('home-cta')[0],
    ()=>{
        urlsw("#about")
    }
)
clickListener(
    document.getElementsByClassName('home-cta')[1],
    ()=>{
        urlsw("#portfolio")
    }
)

// scroll down
clickListener(
    document.getElementsByClassName('scroll-down')[0],
    ()=>{
        urlsw("#about")
    }
)
clickListener(
    document.getElementsByClassName('scroll-down')[1],
    ()=>{
        urlsw("#portfolio")
    }
)

// SEND
clickListener(
    document.getElementsByClassName('send')[0],
    ()=>{
        setTimeout(urlsw('#'), 1000)
    }
)

// MOBILE MENU

clickListener(
    document.getElementsByClassName('menu-icon')[0],
    ()=>{
        toggleMenu()
    }
)
clickListener(
    document.getElementById('gotoHome'),
    ()=>{
        urlsw("#home");
        closeMenu();
    }
)
clickListener(
    document.getElementById('gotoAbout'),
    ()=>{
        urlsw("#about");
        closeMenu();
    }
)
clickListener(
    document.getElementById('gotoPortfolio'),
    ()=>{
        urlsw("#portfolio");
        closeMenu();
    }
)
clickListener(
    document.getElementById('gotoContacts'),
    ()=>{
        urlsw("#contacts");
        closeMenu();
    }
)

// SOCIALS
$(".nav-instagram").click(() => {
    url("https://instagram.com/juro.dev");
});
$(".nav-links").click(() => {
    url("https://juro0.github.io/links");
});
$(".nav-github").click(() => {
    url("https://github.com/Juro0");
});
