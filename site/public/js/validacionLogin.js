function qs (element){
    return document.querySelector(element)
}
window.addEventListener("load", function(){
    let $email = qs("#email")
    let errorsemail= qs("#errorsemail")
    let $pass = qs ("#password")
    let errorspass = qs ("#errorspass")
    let bttn = qs (".bttn")
    let mostrar=qs("#mostrar")
    let iconEyeLogin=qs(".iconEyeLogin")
// console.log("login")

// bttn.disabled= true 

const validate={
    email:false,
    password:false
}


const funcValidate =(obj)=>{
    let arrValidate=Object.values(obj)
    
    if(!arrValidate.includes(false)){
        bttn.disabled=false
        
    }else{
        bttn.disabled=true
        
    }
   
}


$email.addEventListener("input", (e) => {
    const validateEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

    if (validateEmail.test(e.target.value)) {
        $email.classList.remove("is-invalid")
        $email.classList.add("is-valid")
        errorsemail.innerHTML = ""
        validate.email = true
        console.log("email válido");
        
    } else {
        $email.classList.add("is-invalid")
        $email.classList.remove("is-valid")
        errorsemail.innerHTML = "debe ingresar un email valido"
        
        validate.email = false
        console.log("email inválido");
        
    }
    funcValidate(validate)

})

 $pass.addEventListener("input", (e) => {
   const validatePass= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{6,10}$/
    if (validatePass.test(e.target.value)) {
       $pass.classList.remove("is-invalid")
        $pass.classList.add("is-valid")
        errorspass.innerHTML = ""
        validate.password = true
        console.log("Contraseña válida");
        
    } else {
        $pass.classList.add("is-invalid")    
        $pass.classList.remove("is-valid")
       errorspass.innerHTML = "La contraseña debe contener un minimo de 6 caracteres"
     validate.password = false
       console.log("Contraseña inválida");
        
   }

   funcValidate(validate)

})
iconEyeLogin.addEventListener("click", function () {
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

mostrar.addEventListener("click", (e) => {
  
     if($pass.getAttribute("type")=="password"){
        $pass.setAttribute("type","text")
     }else{
        $pass.setAttribute("type","password")
     }

})

})

