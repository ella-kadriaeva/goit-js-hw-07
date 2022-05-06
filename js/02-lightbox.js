import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);



function createGalleryMarkup(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `
        <li>
        <a class="gallery__item" href="${original}">
           <img class="gallery__image" src="${preview}" 
           title="${description}" alt="${description}" />
        </a>
        </li>`
        })
        .join('');
}
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

var lightbox = new SimpleLightbox('.gallery a');

galleryContainer.addEventListener('click', lightbox.on('show.simplelightbox', function () {
	lightbox.defaultOptions.captionDelay = 250;
}));
  


