// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}


// Scroll section active link

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)
        {
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        };
    });
    /* sticky navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.screenY > 100);

    /* remove toggle icon and navbar when click navbar link */

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*  Scroll reveal */
ScrollReveal({
    
    reset: true,
    distance: '50px',
    duration: 400,
    delay: 400
 });
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });


ScrollReveal().reveal('.home-img, .skill-list,.portfolio-box, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });

ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/* Typed js */

const typed = new Typed('.multiple-text',{
    strings: ['Backend developer','Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* after submited form */
const btn = document.querySelector('.btn');
const formInput1 = document.querySelector('.form1');
const formInput2 = document.querySelector('.form2');
const formInput3 = document.querySelector('.form3');
const formInput4 = document.querySelector('.form4');
const formInput5 = document.querySelector('.form5');

btn.onclick = () =>{
    formInput1.value = "";
    formInput2.value = "";
    formInput3.value = "";
    formInput4.value = "";
    formInput5.value = "";
}
