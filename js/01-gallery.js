import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const items = galleryItems
  .map(
    (galleryItems) =>
      `<div class="gallery__item>
<a class = "gallery__link" href="${galleryItems.original}"">
<img 
class="gallery__image"
src="${galleryItems.preview}"
alt="${galleryItems.description}"
data-source="${galleryItems.original}"
</a>
</div>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeEnd", items);

const galleryImages = document.querySelectorAll(".gallery__image");
console.log(galleryImages);

galleryImages.forEach((image) => {
  image.addEventListener("click", (e) => {
    e.preventDefault();
    const divModal = basicLightbox.create(
      `<img src="${image.dataset.source}" alt"${image.alt}">`
    );
    divModal.show();
    if (divModal.visible() === true) {
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          divModal.close();
        }
      });
    }

  });
});

function keyPress (e) {
  if(e.key === "Escape") {
    console.log("eeeeee")
      // write your logic here.
  }
}
