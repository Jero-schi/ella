const linea = document.querySelector('.linea')
const body =  document.querySelector('body')
const section =  document.querySelector('section')

document.documentElement.style.setProperty('--size-barrita', `${body.clientHeight}px`)

console.log(info);

info.forEach(fecha => {
    console.log(fecha);
    section.innerHTML += `
    <div class="conteiner">
        <p class="fecha">${fecha.fecha}</p>

        <div class="conteiner-img">
            <img class="img" src="${fecha.img}" alt="" style="object-position: ${fecha.position}">
        </div>

        <p class="descripcion">${fecha.info}</p>
        </div>
    `
});

const imgs = document.querySelectorAll('.img')


function animarBarrita(entradas) {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            linea.classList.add('animacion')
        }
    });
}

const observador =  new IntersectionObserver(animarBarrita, {
    root: null,
    rootMargin: '50px',
    threshold: 0.2
})

observador.observe(imgs[0])
