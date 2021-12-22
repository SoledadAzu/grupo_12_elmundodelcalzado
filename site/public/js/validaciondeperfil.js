const d=document
const w=window

const nombre=d.querySelector("#nombre")
const apellido=d.querySelector("#apellido")
const email=d.querySelector("#email")
const password=d.querySelector("#password")
const errorN=d.querySelector("#errorN")
const errorA=d.querySelector("#errorA")
const errorE=d.querySelector("#errorA")
const errorP=d.querySelector("#errorA")

nombre.addEventListener("input",e=>{
    const validate = /^[a-zA-Z\sñáéíóú]*$/

    if(validate.test(e.target.value)){
        console.log("nombre válido"); 
        nombre.classList.add("bordeverde")
        errorN.innerHTML=""

 
    }else{
        nombre.classList.add("borderojo")
        nombre.classList.remove("bordeverde")
        errorN.innerHTML="Nombre invalido"
        

    }
    
})

apellido.addEventListener("input",e=>{
    const validate = /^[a-zA-Z\sñáéíóú]*$/

    if(validate.test(e.target.value)){
        console.log("nombre válido"); 
        apellido.classList.add("bordeverde")
        errorA.innerHTML=""

 
    }else{
        apellido.classList.add("borderojo")
        apellido.classList.remove("bordeverde")
        errorA.innerHTML="Nombre invalido"
        

    }
    
})

email.addEventListener("input",e=>{
    const validate = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if(validate.test(e.target.value)){
        console.log("email válido"); 
        email.classList.add("bordeverde")
        errorE.innerHTML=""

 
    }else{
        email.classList.add("borderojo")
        email.classList.remove("bordeverde")
        errorA.innerHTML="Email invalido"
        

    }
    
})

password.addEventListener("input",e=>{
    const validate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;

    if(validate.test(e.target.value)){
        console.log("contraseña valida"); 
        password.classList.add("bordeverde")
        errorP.innerHTML=""

 
    }else{
         password.classList.add("borderojo")
         password.classList.remove("bordeverde")
         errorP.innerHTML="contraseña invalida"
        

    }
    
})