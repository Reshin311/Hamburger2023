

console.log("test1")

const btn = document.querySelector('.p-button-menu');
const menu = document.querySelector('.p-aside-container');
const overlay = document.querySelector('.p-menu__bg');
btn.addEventListener('click', () => {
    console.log("test2")
overlay.classList.toggle('overlay');
menu.classList.toggle('open-menu');

}); 

console.log("test3")


const close = document.querySelector('.c-btn_menu-close');
close.addEventListener('click',() => {
    menu.classList.remove('open-menu');
    overlay.classList.remove('overlay');
});