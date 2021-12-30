const w=window;
const d=document;


const $fila=d.querySelector('.zapatillas')
const $btnIzquierda=d.querySelector('#flecha-izquierda')
const $btnDerecha=d.querySelector('#flecha-derecha')
const $zapatillas=d.querySelectorAll('.zapatilla-img')


$btnDerecha.addEventListener('click',()=>{
    const contador=$fila.offsetWidth

    $fila.scrollLeft += contador;
})

