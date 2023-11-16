import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector("ul.gallery");

for (const item of galleryItems) {
    const imgGallery = `<li class="gallery__item"><a class="gallery__link" href="${item.original}">
     <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a></li>`;
    galleryBox.insertAdjacentHTML("beforeend", imgGallery);
}
const lightboxInstance = new SimpleLightbox(".gallery__item a", {
    captions: true,
    captionDelay: 250,
    captionSelector: "img",
    captionsData: "alt",
    captionPosition: "bottom",
});

console.log(galleryItems);
