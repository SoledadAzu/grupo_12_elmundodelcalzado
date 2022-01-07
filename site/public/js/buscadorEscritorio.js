
const $formBuscador=document.getElementById('formBuscador')
const $botonSearch=document.getElementById('botonSearch')
const $buscador=document.getElementById('Buscador')
const $buscadorSmall=document.getElementById('buscadorSmall')

$formBuscador.addEventListener('submit',e=>{
    e.preventDefault()
    if($buscador.value==""){
        $buscadorSmall.innerHTML="este campo no puede estar vacio"
        setTimeout(() => {
            $buscadorSmall.innerHTML=""
        }, 3000);
        
    }else{
        $formBuscador.submit()
    }
})
$botonSearch.addEventListener('click',e=>{
    e.preventDefault()
    if($buscador.value==""){
        $buscadorSmall.innerHTML="este campo no puede estar vacio"
        setTimeout(() => {
            $buscadorSmall.innerHTML=""
        }, 3000);
        
    }else{
        $formBuscador.submit()
    }
})