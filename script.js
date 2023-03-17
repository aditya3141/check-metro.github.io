'use strict';

const menu = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksLi = document.querySelectorAll('.nav-links li');

menu.addEventListener('click', () => {
navLinks.classList.toggle('nav-active');
navLinksLi.forEach((link, index) => {
    if (link.style.animation) {
    link.style.animation = '';
    } else {
    link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.5}s`;
    }
});
menu.classList.toggle('toggle');
});


// for observe img 

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            entry.target.classList.add('showright');
            entry.target.classList.add('showtop');
        }
        else{
            entry.target.classList.remove('show');
            entry.target.classList.remove('showright');
            entry.target.classList.remove('showtop');
        }
    })
});
const hiddenClass = document.querySelectorAll('.hidden');
const hiddenRight = document.querySelectorAll('.hiddenright');
const hiddenTop = document.querySelectorAll('.hiddentop');
hiddenClass.forEach((el)=>observer.observe(el));
hiddenRight.forEach((el)=>observer.observe(el));
hiddenTop.forEach((el)=>observer.observe(el));