document.querySelector('header').className = "header"
document.querySelector("header > div").className ="container"
document.querySelector("button").className = "header__menu-button"
document.querySelector('menu').className = "header__menu"
document.querySelector('div > div').className = "header__content"

document.querySelector("section").className = "gallery__item__image"
document.querySelectorAll("h3").className = "gallery__item__text"
document.querySelectorAll('section > div').className = "gallery"
document.querySelectorAll("section > p")


document.querySelector('div > .container').className = "subscribe"
document.querySelector("p").className = "subscribe_text"

let gallery = document.querySelectorAll("div");
gallery.forEach((div) => {
    section.className = "gallery_item"
})

let elements = document.querySelectorAll('menu > li:last-child');
elements.forEach((menu) => {
    menu.className = 'header_menu'
})


const galleryItem = document.querySelectorAll('section > div');

galleryItem.forEach((section) => {
    section.className = 'gallery_items'
})