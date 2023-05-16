const toggle_menu=document.querySelector('.toggle-menu');
const toggle_close=document.querySelector('.toggle-close');
const nav=document.querySelector('.nav-bars');

toggle_menu.addEventListener("click",()=>{
nav.style.display='flex';
toggle_close.style.display='flex';
toggle_menu.style.display='none';
});
toggle_close.addEventListener("click",()=>{
   nav.style.display='none';
   toggle_close.style.display='none';
   toggle_menu.style.display='flex';
   });