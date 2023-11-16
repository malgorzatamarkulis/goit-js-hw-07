import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryBox = document.querySelector("ul.gallery")

let lightboxInstance = null;

galleryBox.addEventListener("click", (event) => {

    event.preventDefault();
    if (event.target.tagName === "IMG") {


    }

    console.log(galleryItems);
