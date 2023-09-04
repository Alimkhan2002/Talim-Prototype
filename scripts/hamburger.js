let logo = document.querySelector('.burger-button');
let menu = document.querySelector('.burger-menu');
let body = document.querySelector('body');

logo.addEventListener('click', function(){
    menu.classList.toggle('showmenu');
})

logo.addEventListener('click', function(){
    body.classList.toggle('lock');
})
