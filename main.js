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