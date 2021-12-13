import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const gallerymarkup = onAddGallery(galleryItems);

function onAddGallery(gallery) {
  return gallery
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}" onclick="return false">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    )
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", gallerymarkup);

new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionSelector: "img",
  captionsData: "alt",
  captionDelay: 250,
});
