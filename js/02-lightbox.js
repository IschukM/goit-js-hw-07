import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");

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

galleryBox.insertAdjacentHTML("beforeend", markup);

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionPosition: "bottom",
  captionDelay: 250,
  captionsData: "alt",
});
gallery.on("show.simplelightbox");
