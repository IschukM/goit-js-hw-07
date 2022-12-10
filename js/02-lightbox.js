import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<div class="gallery__item">
  <a class="gallery__item" href="${preview}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
  </div>
`,
  ""
);

gallery.insertAdjacentHTML("beforeend", markup);

let galler = new SimpleLightbox(".gallery a");
galler.on("show.simplelightbox");
