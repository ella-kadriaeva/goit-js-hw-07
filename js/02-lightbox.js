import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);



function createGalleryMarkup(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
           <img class="gallery__image" src="${preview}" 
           title="${description}" alt="${description}" />
        </a>`
        })
        .join('');
}
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

var lightbox = new SimpleLightbox('.gallery a');

galleryContainer.addEventListener('click', getImage);

function getImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
      return
    };
     lightbox.on('show.simplelightbox', function () {
	lightbox.defaultOptions.captionDelay = 250;
});   

}
