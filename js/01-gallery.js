import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const gallerymarkup = onAddGallery(galleryItems);
let galleryOriginal;

function onAddGallery(gallery) {
  return gallery
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
          <a class="gallery__link" href="${original}" onclick="return false">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
          </a>
          </div>`
    )
    .join("");
}

function openGalleryOriginal(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  addGalleryOriginal(e.target.dataset.source);

  galleryOriginal.show();
  console.log(galleryOriginal);

  document.addEventListener("keydown", closeGalleryOriginal);

  const onCloseEcape = document.querySelector(".basicLightbox");
  onCloseEcape.addEventListener("click", CloseEcape, { once: true });
}

function addGalleryOriginal(gallery) {
  galleryOriginal = basicLightbox.create(`<img src="${gallery}">`);
}

function closeGalleryOriginal(e) {
  console.log(e);
  if (e.code === "Escape") {
    galleryOriginal.close();
    document.removeEventListener("keydown", closeGalleryOriginal);
  }
}

function CloseEcape() {
  document.removeEventListener("keydown", closeGalleryOriginal);
}

galleryContainer.insertAdjacentHTML("beforeend", gallerymarkup);
galleryContainer.addEventListener("click", openGalleryOriginal);
