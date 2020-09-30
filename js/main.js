'use strict';
// day1
const btnBurger = document.querySelector('.btn-burger'); 
const catalog = document.querySelector('.catalog');
const btnСlose = document.querySelector('.btn-close');
const catalogList = document.querySelector('.catalog-list');
const subCatalog = document.querySelector('.subcatalog');
const subcatalogHeader = document.querySelector('.subcatalog-header');
const btnReturn = document.querySelector('.btn-return');


const overlay = document.createElement('div');

overlay.classList.add('overlay');

document.body.insertAdjacentElement('beforeend', overlay);

const openMenu = () => {
  console.log('word');
  catalog.classList.add('open'); 
  overlay.classList.add('active');
  
};

const closeMenu = () => {
  catalog.classList.remove('open');
  overlay.classList.remove('active');
  closeSubMenu();
};

const openSubMenu = event => {
  event.preventDefault();
  const itemList = event.target.closest('.catalog-list__item');
  if(itemList){
    subcatalogHeader.innerHTML = itemList.innerHTML;
    subCatalog.classList.add('subopen');
  };
};

const closeSubMenu = () => {
  subCatalog.classList.remove('subopen');
};

btnBurger.addEventListener('click', openMenu);
btnСlose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
catalog.addEventListener('click', openSubMenu);
btnReturn.addEventListener('click', closeMenu);




document.addEventListener('keydown', (event) => {
  console.log(event);
  if(event.code === 'Escape'){
    closeMenu();
  }else if(event.code === 'KeyO'){
    openMenu();
  };
});