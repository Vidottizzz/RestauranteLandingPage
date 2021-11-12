const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');
const titles = document.querySelectorAll('nav ul li a')

for (const element of toggle) {
    element.addEventListener('click', ()=> {
        //se tiver o show, tira, se não tiver coloca (toggle)
        nav.classList.toggle('show');
    })
}
for (const title of titles) {
    title.addEventListener('click', ()=> {
        nav.classList.remove('show')
    })
}

// mudar o header da pagina quando der scroll

const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

window.addEventListener('scroll', ()=> {
    if(window.scrollY >= navHeight) {
    header.classList.add('scroll');
    } else {
    header.classList.remove('scroll');
    }
})

// testimonials carousel slider swiper



  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination"
    },
    mousewheel: true,
    keyboard: true,
  });

/* ScrollReveal: mostrar elementos quando der scroll na pagina*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 630,
    reset: true
})

scrollReveal.reveal(
`#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links
`,
{interval: 100 })