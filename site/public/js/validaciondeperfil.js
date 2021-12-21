const d=document
const w=Window

Window.addEvenListener("load", function(){
    let formulario=document.querySelector("form.reservation");

    formulario.addEvenListener("submit",function(e){
        let errores = [];

        let campoNombre = document.querySelector("input.nombre");

        if (campoNombre.value== "") {
            errores.push("El campo tiene que estar completo");
        } else if (campoNombre.value.length < 3) {
            errores.push("El campo de nombre debe tener almenos 3 caracteres");
        }

        let campoApellido = document.querySelector("input.apellido");

        if (campoApellido.value== "") {
            errores.push("El campo tiene que estar completo");
        } else if (campoApellido.value.length < 6) {
            errores.push("El campo de nombre debe tener almenos 6 caracteres");
        }

        let campoEmail = document.querySelector("input.email");

        if (campoEmail.value== "") {
            errores.push("El campo tiene que estar completo");
        } else if (campoApellido.value.length < 6) {
            errores.push("El campo de nombre debe tener almenos 6 caracteres");
        }

        let campoPassword = document.querySelector("input.password");

        if (campoPassword.value== "") {
            errores.push("El campo tiene que estar completo");
        } else if (campoPassword.value.length < 3) {
            errores.push("El campo de nombre debe tener almenos 3 caracteres");
        }
      



        if(errores.length > 0){
            e.preventDefaul();

            let ulErrores = document.querySelector("div.errores ul");
            for (let i = 0; i < errores.length ; i++) {
                ulErrores.innerHTML +="<li>" + errores[i] + "</li>"
            }
        }
    })
})

pass.addEventListener("input", (e) => {
    const validatePass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,15}$/

    if (validatePass.test(e.target.value)) {
        pass.classList.remove("is-invalid")
        pass.classList.add("is-valid")
        smallPass.innerHTML = ""
        pass.title = true
        console.log("Contraseña válida");
        
    } else {
        pass.classList.add("is-invalid")
        pass.classList.remove("is-valid")
        smallPass.innerHTML = "La contraseña debe contener una mayúscula, una misnúscula, un número y entre 8 y 15 caracteres"
        
        pass.title = false
        console.log("Contraseña inválida");
        
    }



}
/*const nombre=document.querySelector("#nombre")
const apelido=document.querySelector("#apellido")
const email=document.querySelector("#email")
const password=document.querySelector("#password")
const form=document.querySelector("form");
const divErr=document.querySelector("#errores")

nombre.addEventListener("focus", (evento)=>{
    
    console.log("focus");
})

const expresiones = {
	nombre:  /^[a-zA-ZÀ-ÿ\s]{1,40}$/,   // [a-zA-Z0-9\_\-]{4,16}$/,  Letras, numeros, guion y guion_bajo
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,   //Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/,     // 4 a 12 digitos.
}


nombre.addEvenListener("change",(e) => {

    if(e.target.value === '' || e.target.vañue.length <3){
    errores.push("el campo debe estar completo y con 3 caaracteres almenos")
    }
})

form.addEvenListener("submit", (e)=>{
    e.preventDefault()

    let array=Object.values(e.target);
    for(let i=0; i < array.length -1; i ++) {
        console.log(array[i].value);
    }
    if(input.value===""){
        divErr.innerHTML +="<li>"+"nose"+"</li>"
    }
});

const validarFormulario =(e) => {
    e.preventDefault()
    switch (e.target.name){
        case "usuario":
            if(expresiones.usuario.test(e.target.value)){
                d.getElementById()
       }   }
    }*/

    //debo seguir trabajando