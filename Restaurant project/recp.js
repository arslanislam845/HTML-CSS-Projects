const burger= document.querySelector('.burger')
const burger2= document.querySelector('.pg3 .burger')
const nav=document.querySelector('.nav-items')
const hnav=document.querySelector('.h-nav-1')
const nav2=document.querySelector('.pg3 .nav-items')
burger.addEventListener('click',()=>{
     nav.classList.toggle('nav-items');
     hnav.classList.toggle('h-nav-1');
})

burger2.addEventListener('click',()=>{
     nav2.classList.toggle('.pg3 .nav-items');
})