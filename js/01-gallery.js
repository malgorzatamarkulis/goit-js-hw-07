import { galleryItems } from "./gallery-items.js";

document.addEventListener('DOMContentLoaded', () => {
    // Change code below this line
    const selector = "ul.gallery";
    const galleryBox = document.querySelector(selector);
    if (galleryBox === null) {
        console.error('Gallery container not found, using selector: ', selector);
        return;
    }
    let lightboxInstance = null;
    galleryBox.addEventListener("click", (event) => {
        event.preventDefault();
        const et = event.target;
        if (et === null) {
            console.error(' Event target not found. event:', et)
            return;
        }

        // @ts-ignore
        if (et.tagName === "IMG") {
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
    //klik esc
    function handleKey(event) {
        if (event.key === "Escape") {
            lightboxInstance.close();
            window.removeEventListener("keydown", handleKey);
        }
    }

    console.log(galleryItems);
})