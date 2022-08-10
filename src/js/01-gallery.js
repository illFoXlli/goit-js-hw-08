// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const divGallery = document.querySelector('.gallery');
galleryItems.map(item => {
  divGallery.insertAdjacentHTML(
    'afterbegin',
    `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
   <img
    class="gallery__image"
    src="${item.preview}"
    data-fox="${item.original}"
    alt="${item.description}"
   />
  </a>
 </div>`
  );
});
let lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionPosition: 'bottom',
  captionDelay: 250,
  captionsData: 'alt',
});
