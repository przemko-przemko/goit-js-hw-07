import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");
const items = galleryItems
  .map(
    (galleryItems) =>
      `
<a class = "gallery__link" href="${galleryItems.original}"">
<img 
class="gallery__image"
src="${galleryItems.preview}"
alt="${galleryItems.description}"
data-source="${galleryItems.original}"
</a>
`
  )
  .join("");
gallery.insertAdjacentHTML("beforeEnd", items);


let galleryLightbox = new SimpleLightbox ('.gallery a', {
    captionDelay: 250,
    captionsData : "alt",

});


