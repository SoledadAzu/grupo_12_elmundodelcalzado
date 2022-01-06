function qs(element) {
    return document.querySelector(element)
}
window.addEventListener("load", function () {
    let $name = qs("#nombre")
    let errorname = qs("#errorname")
    let $lastname = qs("#apellido")
    let errorlastname = qs("#errorlastname")
    let $email = qs("#email")
    let erroremail = qs("#erroremail")
    let $pass = qs("#password")
    let errorpass = qs("#errorpass")
    let mostrar = qs("#mostrar")
    let $img = qs("#img")
    let $terms = qs("#terminos")
    let errorterm = qs("#errorterm")
    let btn = qs(".btn")

    btn.disabled = true


     // console.log($name)
    //  console.log(lastname)
    // console.log($email)
    // console.log($pass)
    // console.log($terms) 
   
    
    // btn.clasList.add("btn-invalid")

    const validate={
        nombre:false,
        apellido:false,
        email:false,
        password:false,
        terminos:false

    }

    //     const funcValidate =(obj)=>{
    //     let arrValidate=Object.values(obj)

    //     if (!arrValidate.includes(false)){
    //         btn.disabled=false
    //         // btn.classList.remove("btn-invalid")    
    //     }else{
    //         btn.disabled=true

    //     }

    // }
    


})

    $name.addEventListener("keyup", (e) => {
        const validateNombre = /^[a-zA-Z\sñáéíóú]*$/

        if (validateNombre.test(e.target.value)) {
            $name.classList.remove("is-invalid")
            $name.classList.add("is-valid")
            errorname.innerHTML = "Este campo no puede estar vacio"
            validate.nombre = true
            console.log("nombre válido");


    //     // }else if(e.target.value){
    //     //     $name.classList.add("")
    //     //     $name.classList.remove("")
            
         } else {
             $name.classList.add("is-invalid")
             $name.classList.remove("is-valid")
             errorname.innerHTML = "debe ingresar un nombre valido"

             validate.nombre = false
             console.log("nombre inválido");

         }
     }),


        $lastname.addEventListener("blur", (e) => {
            const validateApellido = /^[a-zA-Z\sñáéíóú]*$/

            if (validateApellido.test(e.target.value)) {
                $lastname.classList.remove("is-invalid")
                $lastname.classList.add("is-valid")
                errorlastname.innerHTML = "Este campo no puede estar vacio"
                validate.apellido = true
                console.log("apellido válido");

            } else {
                $lastname.classList.add("is-invalid")
                $lastname.classList.remove("is-valid")
                errorlastname.innerHTML = "debe ingresar un apellido valido"

                validate.apellido = false
                console.log("apellido inválido");

            }
        }),



        $email.addEventListener("input", (e) => {
            const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

            if (validateEmail.test(e.target.value)) {
                $email.classList.remove("is-invalid")
                $email.classList.add("is-valid")
                erroremail.innerHTML = "Este campo no puede estar vacio"
                validate.email = true
                console.log("email válido");

            } else {
                $email.classList.add("is-invalid")
                $email.classList.remove("is-valid")
                erroremail.innerHTML = "debe ingresar un email valido"

                validate.email = false
                console.log("email inválido");

            }
            funcValidate(validate)
        }),

        $pass.addEventListener("input", (e) => {
            const validatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,15}$/
            if (validatePassword.test(e.target.value)) {
                $pass.classList.remove("is-invalid")
                $pass.classList.add("is-valid")
                errorpass.innerHTML = "Este campo no puede estar vacio"
                validate.password = true
                console.log("Contraseña válida");

            } else {
                $pass.classList.add("is-invalid")
                $pass.classList.remove("is-valid")
                errorpass.innerHTML = "La contraseña debe contener un minimo de 6 caracteres"

                validate.password = false
                console.log("Contraseña inválida");

            }
            funcValidate(validate)

        }),
        $img.addEventListener("change", (e) => {
            const validateImg = /(.jpg|.jpeg|.png|.web)$/i   //Extensiones permitidas
            if (!validateImg.exec(img)) {     //el metodo exec() ejecuta una busqueda
                errorimg.innerHTML = "carga un archivo de imagen válido"
                validate.img = true
                return false;
                

            } else {

                errorimg.innerHTML = ""

                validate.img = false
                console.log("archivo de imagen inválida");

            }
            funcValidate(validate)
        }),

        mostrar.addEventListener("click", (e) => {

            if ($pass.getAttribute("type") == "password") {
                $pass.setAttribute("type", "text")
            } else {
                $pass.setAttribute("type", "password")
            }
            funcValidate(validate)
        }),

        $terms.addEventListener("click", (e) => {

            if (!$terms.checked) {
                $terms.classList.add("is-invalid")
                errorterm.innerHTML = "debes aceptar los terminos y condiciones"
                validate.terminos = true


            }
            if (!errorterm) {
                console.log("todo bien")
            }
        })



