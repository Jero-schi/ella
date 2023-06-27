const linea = document.querySelector('.linea')
const imgs = document.querySelectorAll('.img')
const body =  document.querySelector('body')

document.documentElement.style.setProperty('--size-barrita', `${body.clientHeight}px`)

console.log(body.clientHeight);
getComputedStyle(document.documentElement)
    .getPropertyValue('--size-barrita');

function animarBarrita(entradas) {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            linea.classList.add('animacion')
        }
    });
    console.log(entradas);
}

const observador =  new IntersectionObserver(animarBarrita, {
    root: null,
    rootMargin: '50px',
    threshold: 0.2
})

observador.observe(imgs[0])

// window.addEventListener('scroll', () => {
//     console.log('hola');
// })