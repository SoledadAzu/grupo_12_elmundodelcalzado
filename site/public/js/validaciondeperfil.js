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
const iconEye=d.querySelector(".iconEye")

button.disabled=true

const validate ={
    nombre:false,
    apellido:false,
    email:false,
    password:false
}

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
nombre.addEventListener("keyup",e=>{
    const validate = /^[a-zA-Z\sñáéíóú]/

    if(validate.test(e.target.value)){
        
        nombre.classList.add("is-valid")
        nombre.classList.remove("is-invalid")
        errorN.innerHTML=""
        
        /*errorN.style.border = "3px solid red"*/
        validate.nombre= true

 
    }else if(e.target.value==""){
        nombre.classList.remove("is-valid")
        nombre.classList.add("is-invalid")
        errorN.innerHTML = "Este campo no puede estar vacio"
       

     }else{
        nombre.classList.add("is-invalid")
        nombre.classList.remove("is-valid")
        errorN.innerHTML='Nombre invalido';
        
        /*fileerrorN.style.border = "3px solid red"
        fileerrorN.style.margin-top;*/
        validate.nombre=false
        

        

    }

    funcValidate(validate)
    
})

//apellido
apellido.addEventListener("keyup",e=>{
    const validate = /^[a-zA-Z\sñáéíóú]/

    if(validate.test(e.target.value)){
        
        apellido.classList.add("is-valid")
        apellido.classList.remove("is-invalid")
        errorA.innerHTML=""
        validate.apellido= true


 
    }else if(e.target.value==""){
        apellido.classList.remove("is-valid")
        apellido.classList.add("is-invalid")
        errorA.innerHTML = "Este campo no puede estar vacio"
        

     }else{
        apellido.classList.add("is-invalid")
        apellido.classList.remove("is-valid")
        errorA.innerHTML="apellido invalido"
        validate.apellido= false
        
    }

    funcValidate(validate)
    
})


//email
email.addEventListener("keyup",e=>{
    const validate = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if(validate.test(e.target.value)){
        
        email.classList.add("is-valid")
        email.classList.remove("is-invalid")
        errorE.innerHTML=""
        validate.email= true


 
    }else if(e.target.value==""){
        email.classList.remove("is-valid")
        email.classList.add("is-invalid")
        errorE.innerHTML = "Este campo no puede estar vacio"
        

     }else{
        email.classList.add("is-invalid")
        email.classList.remove("is-valid")
        errorE.innerHTML="email invalido"
        validate.email= false
        
        

    }

    funcValidate(validate)
})


//password
password.addEventListener("keyup",e=>{
    const validate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;

    if(validate.test(e.target.value)){
         
        password.classList.add("is-valid")
        password.classList.remove("is-invalid")
        errorP.innerHTML=""
        validate.password= true


 
    }else if(e.target.value==""){
        password.classList.remove("is-valid")
        password.classList.add("is-invalid")
        errorP.innerHTML = "Este campo no puede estar vacio"
        

     }else{
         password.classList.add("is-invalid")
         password.classList.remove("is-valid")
         errorP.innerHTML="contraseña invalida"
         validate.password= false
         
        

    }

    funcValidate(validate)
    
})

formulario.addEventListener("submit", e =>{
    /*e.preventDefault()*/

})



iconEye.addEventListener("click", function () {
    const icon = this.querySelector("i");

    if(this.nextElementSibling.type === "password"){
        this.nextElementSibling.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        this.nextElementSibling.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    };
});