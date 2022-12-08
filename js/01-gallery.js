import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`,
  ""
);

gallery.insertAdjacentHTML("beforeend", markup);

const galleryItem = document.querySelector(".gallery__item");
console.log(galleryItem);
// const galleryImage = document.querySelector("gallery__image");
// galleryItem.addEventListener("click", onClick);
// function onClick(evt) {
//   galleryImage.src = "${original}";
// }
