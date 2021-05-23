const menu = document.querySelector ('.navigation');
const buttonMenu = document.querySelector ('.navigation-button');

menu.classList.remove('no-js');

buttonMenu.addEventListener('click', function(evt){
  evt.preventDefault();
    menu.classList.toggle('navigation--open');
});
