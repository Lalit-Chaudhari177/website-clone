



burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navlist = document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
rightnav.classList.toggle('vis');
navlist.classList.toggle('vis')
navbar.classList.toggle('hnav')


})