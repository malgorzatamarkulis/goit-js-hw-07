import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryBox = document.querySelector("ul.gallery");

let lightboxInstance = null;
galleryBox.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.tagName === "IMG") {
        const imgSource = event.target.dataset.source;

        lightboxInstance = basicLightbox.create(
            `<img src="${imgSource}" alt="Image description">`
        );

        lightboxInstance.show();

        window.addEventListener("keydown", handleKey);
    }
});
for (const item of galleryItems) {
    const imgGallery = `<div class="gallery__item">
   <a class="gallery__link" href="${item.original}">
   <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
   />
   </a>
  </div>`;
    galleryBox.insertAdjacentHTML("beforeend", imgGallery);
}

function handleKey(event) {
    if (event.key === "Escape") {
        lightboxInstance.close();
        window.removeEventListener("keydown", handleKey);
    }
}

console.log(galleryItems);
