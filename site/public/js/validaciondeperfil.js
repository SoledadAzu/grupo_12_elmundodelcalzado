/*const d=document
const w=window*/

const nombre=d.querySelector("#nombre")
const apellido=d.querySelector("#apellido")
const email=d.querySelector("#email")
const password=d.querySelector("#password")
const errorN=d.querySelector("#errorN")
const errorA=d.querySelector("#errorA")
const errorE=d.querySelector("#errorE")
const errorP=d.querySelector("#errorP")
const formulario=d.querySelector("#form")
const button=d.querySelector("#button")
button.disabled=true
console.log(formulario)
const validate ={
    nombre:false,
    apellido:false,
    email:false,
    password:false
}
console.log("validate")

const funcValidate = (obj) => {
    let arr = Object.values(obj)
    if (!arr.includes(false)) {
        button.disabled= false
       /* button.classList.remove("bttn-invalid")*/
    }else{
        button.disabled= true
    }
}




/*button.classList.add("bttn-invalid")*/

//nombre
nombre.addEventListener("input",e=>{
    const validate = /^[a-zA-Z\sñáéíóú]*$/

    if(validate.test(e.target.value)){
        console.log("nombre válido"); 
        nombre.classList.add("bordeverde")
        nombre.classList.remove("borderojo")
        errorN.innerHTML=""
        
        /*errorN.style.border = "3px solid red"*/
        validate.nombre= true

 
    }else{
        nombre.classList.add("borderojo")
        nombre.classList.remove("bordeverde")
        errorN.innerHTML='Nombre invalido';
        
        /*fileerrorN.style.border = "3px solid red"
        fileerrorN.style.margin-top;*/
        validate.nombre=false
        e.preventDefault()

        

    }

    funcValidate(validate)
    
})

//apellido
apellido.addEventListener("input",e=>{
    const validate = /^[a-zA-Z\sñáéíóú]*$/

    if(validate.test(e.target.value)){
        console.log("apellido válido"); 
        apellido.classList.add("bordeverde")
        apellido.classList.remove("borderojo")
        errorA.innerHTML=""
        validate.apellido= true


 
    }else{
        apellido.classList.add("borderojo")
        apellido.classList.remove("bordeverde")
        errorA.innerHTML="apellido invalido"
        validate.apellido= false
        e.preventDefault()
    }

    funcValidate(validate)
    
})


//email
email.addEventListener("input",e=>{
    const validate = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if(validate.test(e.target.value)){
        console.log("email válido"); 
        email.classList.add("bordeverde")
        email.classList.remove("borderojo")
        errorE.innerHTML=""
        validate.email= true


 
    }else{
        email.classList.add("borderojo")
        email.classList.remove("bordeverde")
        errorE.innerHTML="email invalido"
        validate.email= false
        e.preventDefault()
        

    }

    funcValidate(validate)
})


//password
password.addEventListener("input",e=>{
    const validate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;

    if(validate.test(e.target.value)){
        console.log("contraseña valida"); 
        password.classList.add("bordeverde")
        password.classList.remove("borderojo")
        errorP.innerHTML=""
        validate.password= true


 
    }else{
         password.classList.add("borderojo")
         password.classList.remove("bordeverde")
         errorP.innerHTML="contraseña invalida"
         validate.password= false
         e.preventDefault()
        

    }

    funcValidate(validate)
    
})

formulario.addEventListener("submit", e =>{
    /*e.preventDefault()*/

})