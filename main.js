const imgs = document.querySelectorAll('.img')
const telon = document.querySelectorAll('.telon')

console.log(imgs);
console.log(imgs[0].classList);

imgs.forEach((img, index) => {
    img.addEventListener('mouseenter', () => {
        telon[index].classList.remove('inactive')
        telon[index].classList.add('animation')
    })
    
    img.addEventListener('mouseleave', () => {
        telon[index].classList.add('inactive')
        telon[index].classList.remove('animation')
    })
    
    img.addEventListener('click', () => {
        telon[index].classList.toggle('inactive')
        telon[index].classList.toggle('animation')
    })
})