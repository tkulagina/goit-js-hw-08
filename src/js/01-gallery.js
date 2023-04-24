// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
//console.log('hello')

import SimpleLightbox from "simplelightbox";

console.log(SimpleLightbox);

import "simplelightbox/dist/simple-lightbox.min.css";
const listRef = document.querySelector('.gallery');
const markup = galleryItems.map(({preview, original, description}) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`).join('');

listRef.insertAdjacentHTML('beforeend', markup)


new SimpleLightbox('.gallery__item a', {
    captions: true,
    captionType: 'attr', 
    captionsData: `alt`,
    captionPosition: 'bottom',
    captionDelay: 250,
});