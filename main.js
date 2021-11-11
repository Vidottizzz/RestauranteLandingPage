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