import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);



function createGalleryMarkup(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
          </div>`
        })
        .join('');
}
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', getImage);

function getImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
      return
    };
   const currentImage = event.target.dataset.source; 
   console.log(currentImage);
   onShowPicture (currentImage);    

}

function onShowPicture (currentImage) {
    basicLightbox.create(`
    <img src="${currentImage}" width="800" height="600">
`).show();  
}









