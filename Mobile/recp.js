const burger= document.querySelector('.burger')
const nav=document.querySelector('.nav-items ul')
const hnav=document.querySelector('.h-nav-1')
burger.addEventListener('click',()=>{
     nav.classList.toggle('v-class');
     hnav.classList.toggle('h-nav-1');
})