import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>
`,
  ""
);

gallery.insertAdjacentHTML("beforeend", markup);

const galleryItem = document.querySelector(".gallery__item");
console.log(galleryItem);
const galleryImage = document.querySelector("gallery__image");
gallery.addEventListener("click", onClick);

function onClick(evt) {
  if (!evt.target.classList.contains(".gallery__image")) {
    return;
  }
  console.log(evt.target);
}
