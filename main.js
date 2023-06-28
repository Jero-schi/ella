const linea = document.querySelector('.linea')
const body =  document.querySelector('body')
const dia =  document.querySelector('#dias')
const section =  document.querySelector('section')

info.forEach((fecha, index) => {
    // console.log(index);
    section.innerHTML += `
    <div id="conteiner-${index}" class="conteiner">
    <p class="fecha">${fecha.fecha}</p>

    <div class="conteiner-img">
    <img class="img" src="${fecha.img}" alt="" style="object-position: ${fecha.position}">
    </div>
    
    <p class="descripcion">${fecha.info}</p>
    </div>
    `
});

document.documentElement.style.setProperty('--size-barrita', `${body.clientHeight}px`)
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


let hoy = Date.now()
let fecha1 = new Date("07/23/2019");
let fecha2 = new Date(hoy);

let diferencia = fecha2.getTime() - fecha1.getTime();

let diasDeDiferencia = Math.trunc(diferencia / 1000 / 60 / 60 / 24);

dia.textContent = `${diasDeDiferencia} días`