const btn = document.querySelector('#btn')
const div = document.querySelector('#div')

btn.addEventListener('click', () => {
    console.log('hola');
    div.innerHTML = `<p>Hola</p>`
    div.classList.add('animation')
})