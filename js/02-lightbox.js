import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const gallerymarkup = onAddGallery(galleryItems);

function onAddGallery(gallery) {
  return gallery
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item"><a class="gallery__link" href="${original}" onclick="return false">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a></li>`
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
