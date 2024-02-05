// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const result = [];

for (let item of galleryItems) {
  let newItem = document.createElement('div');
  newItem.classList.add('gallery__item');

  let newLink = document.createElement('a');
  newLink.classList.add('gallery__link');
  newLink.setAttribute('href', item.original);

  let newImage = document.createElement('img');
  newImage.classList.add('gallery__image');
  newImage.setAttribute('src', item.preview);
  newImage.setAttribute('alt', item.description);
  newImage.setAttribute('data-source', item.original);

  newLink.append(newImage);
  newItem.append(newLink);
  result.push(newItem);
}

gallery.append(...result);

let lightbox = new SimpleLightbox('.gallery a');
