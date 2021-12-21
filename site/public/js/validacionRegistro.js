function qs (element){
    return document.querySelector(element)
}
window.addEventListener("load", function(){
    let $inputName = qs("#nombre")
    let $inputLastname = qs ("#apellido")
    let $email = qs("#email")
    let $pass = qs("#password")
    let $terms = qs("#terminos")








// console.log($inputName)
// console.log(inputLastname)
// console.log($email)
// console.log($pass)
// console.log($terms) 
// $inputName.addEventListener("keypress",e =>{
//     console.log(e.key)


$inputName.addEventListener("blur", (e) => {
    const validate = /^[a-zA-Z\sñáéíóú]*$/

    if (validateName.test(e.target.value)) {
        $inputName.classList.remove("is-invalid")
        $inputName .classList.add("is-valid")
        smallName.innerHTML = "El campo nombre es obligatorio"
        $inputName .title = true
        console.log("nombre válido");
        
    } else {
        $inputName.classList.add("is-invalid")
        $inputName.classList.remove("is-valid")
        smallName.innerHTML = "debe ingresar un nombre valido"
        
        $inputName.title = false
        console.log("nombre inválido");
        
    }
})

    $inputLastname.addEventListener("blur", (e) => {
        const validate = /^[a-zA-Z\sñáéíóú]*$/
    
        if (validateName.test(e.target.value)) {
            $inputLastname.classList.remove("is-invalid")
            $inputLastname .classList.add("is-valid")
            smalllastname.innerHTML = "El campo nombre es obligatorio"
            $inputLastname .title = true
            console.log("apellido válido");
            
        } else {
            $inputLastname.classList.add("is-invalid")
            $inputLastname.classList.remove("is-valid")
            smallLastname.innerHTML = "debe ingresar un nombre valido"
            
            $inputLastname.title = false
            console.log("apellido inválido");
            
        }
    })



$email.addEventListener("input", (e) => {
    const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test

    if (validateEmail.test(e.target.value)) {
        $email.classList.remove("is-invalid")
        $email.classList.add("is-valid")
        smallEmail.innerHTML = ""
        $email.title = true
        console.log("email válido");
        
    } else {
        $email.classList.add("is-invalid")
        $email.classList.remove("is-valid")
        $smallEmail.innerHTML = "debe ingresar un email valido"
        
        $email.title = false
        console.log("email inválido");
        
    }
})

 $pass.addEventListener("input", (e) => {
   const validatePass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,15}$/
    if (validatePass.test(e.target.value)) {
       $pass.classList.remove("is-invalid")
        $pass.classList.add("is-valid")
        smallPass.innerHTML = ""
        $pass.title = true
        console.log("Contraseña válida");
        
    } else {
        $pass.classList.add("is-invalid")    
        $pass.classList.remove("is-valid")
       smallPass.innerHTML = "La contraseña debe contener una mayúscula, una misnúscula, un número y entre 8 y 15 caracteres"
        
        $pass.title = false
       console.log("Contraseña inválida");
        
   }
})

   $terms.addEventListener("input", (e) => {
    
     if (!$terms.checked) {
        $terms.classList.add("is-invalid")
         smallTerminos.innerHTML = "debes aceptar los terminos y condiciones"
         $terms .title = true
         
         
     }
     if(!error){
         console.log("todo bien")
    }
})

})


