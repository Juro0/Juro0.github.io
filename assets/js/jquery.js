
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

$(document).ready(() => {

    // ONCLICK EVENTS

    $(".nav-logo").click(() => {
        urlsw("#home");
    });

    $(".home-cta-1").click(() => {
        urlsw("#about");
    });

    $(".home-cta-2").click(() => {
        urlsw("#portfolio");
    });

    $(".scroll-down-about").click(() => {
        urlsw("#about");
    });

    $(".scroll-down-portfolio").click(() => {
        urlsw("#portfolio");
    });

    $(".send").click(() => {
        setTimeout(urlsw('#'), 1000)
    });

    // MOBILE MENU

    $(".menu-icon").click(() => {
        toggleMenu();
    });

    $("#gotoHome").click(() => {
        urlsw("#home");
        closeMenu();
    });
    $("#gotoAbout").click(() => {
        urlsw("#about");
        closeMenu();
    });
    $("#gotoPortfolio").click(() => {
        urlsw("#portfolio");
        closeMenu();
    });
    $("#gotoContacts").click(() => {
        urlsw("#contacts");
        closeMenu();
    });


    // SOCIALS
    $(".nav-instagram").click(() => {
        url("https://instagram.com/juri_gemignani");
    });
    $(".nav-links").click(() => {
        url("https://juro0.github.io/links");
    });
    $(".nav-github").click(() => {
        url("https://github.com/Juro0");
    });

    // PORTFOLIO

    $(".gotoBereal").click(() => {
        url("https://juro0.github.io/doItWorst/BeReal");
    });
    $(".gotoNob").click(() => {
        url("https://juro0.github.io/nob-site");
    });
    $(".gotoExipom").click(() => {
        url("https://juro0.github.io/exipom");
    });
    $(".gotoLinks").click(()=>{
        url("https://juro0.github.io/links")
    });
    $(".gotoSimon").click(()=>{
        url("https://juro0.github.io/simon-game")
    });

});