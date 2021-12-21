const form = document.getElementById("formcreate")
const boton = document.getElementById("submit-btn")
const inputs = document.querySelectorAll("#formcreate .input1")
const selects = document.querySelectorAll("#formcreate select")
const smalltitle = document.querySelector(".error-title")
const smallprice = document.querySelector(".error-price")
const smallcolors = document.querySelector(".error-color")
const smalldetalles = document.querySelector(".error-detalle")
const smalldescription = document.querySelector(".error-description")
const smalltalles = document.querySelector(".errortalles")
let errors = {
title: true,
  price: true,
  colors1: true,
  colors2: true,
  colors3: true,
  detalles1: true,
  detalles2: true,
  detalles3: true,
  detalles4: true,
  description: true
};
const expresiones = {
  precio: /^\d{4,6}$/
}

/* ------------- validar input ------------- */

const validarInput = (e) => {
  switch (e.target.id) {
    case "title":
      if (e.target.value == "") {
        title.classList.remove('form-success');
        title.classList.add('form-error');
        smalltitle.innerHTML= "* Debe completar el campo "
        errors[e.target.id] = true;
        
      } else {
        title.classList.remove('form-error');
        title.classList.add('form-success');
        smalltitle.innerHTML= ""
        errors[e.target.id] = false;
      }
      break;
    case "price":
      if (expresiones.precio.test(e.target.value) && e.target.value !=="") {
        price.classList.remove('form-error');
        price.classList.add('form-success');
        smallprice.innerHTML= ""
        errors[e.target.id] = false;
      } else {
        price.classList.remove('form-success');
        price.classList.add('form-error');
        smallprice.innerHTML= "Debe ingresar un PRECIO de 4 a 6 digitos"
        errors[e.target.id] = true;
      }
      break;
    case "colors1":
      if (e.target.value == "") {
        colors1.classList.remove('form-success');
        colors1.classList.add('form-error');
        smallcolors.innerHTML= "Debe agregar colores"
        errors[e.target.id] = true;
      } else {
        colors1.classList.remove('form-error');
        colors1.classList.add('form-success');
        smallcolors.innerHTML= ""
        errors[e.target.id] = false;
      }
      break;
    case "colors2":
      if (e.target.value == "") {
        colors2.classList.remove('form-success');
        colors2.classList.add('form-error');
        smallcolors.innerHTML= "Debe agregar colores"
        errors[e.target.id] = true;
      } else {
        colors2.classList.remove('form-error');
        colors2.classList.add('form-success');
        smallcolors.innerHTML= ""
        errors[e.target.id] = false;
      }
      break;
    case "colors3":
      if (e.target.value == "") {
        colors3.classList.remove('form-success');
        colors3.classList.add('form-error');
        smallcolors.innerHTML= "Debe agregar colores"
        errors[e.target.id] = true;
      } else {
        colors3.classList.remove('form-error');
        colors3.classList.add('form-success');
        smallcolors.innerHTML= ""
        errors[e.target.id] = false;
      }
      break;
    case "detalles1":
      if (e.target.value == "") {
        detalles1.classList.remove('form-success');
        detalles1.classList.add('form-error');
        smalldetalles.innerHTML= "Destacar 4 detalles del Producto"
        errors[e.target.id] = true;
      } else {
        detalles1.classList.remove('form-error');
        detalles1.classList.add('form-success');
        smalldetalles.innerHTML= ""
        errors[e.target.id] = false;
      }
      break;
    case "detalles2":
      if (e.target.value == "") {
        detalles2.classList.remove('form-success');
        detalles2.classList.add('form-error');
        smalldetalles.innerHTML= "Destacar 4 detalles del Producto"
        errors[e.target.id] = true;
      } else {
        detalles2.classList.remove('form-error');
        detalles2.classList.add('form-success');
        smalldetalles.innerHTML= ""
        errors[e.target.id] = false;
      }
      break;
    case "detalles3":
      if (e.target.value == "") {
        detalles3.classList.remove('form-success');
        detalles3.classList.add('form-error');
        smalldetalles.innerHTML= "Destacar 4 detalles del Producto"
        errors[e.target.id] = true;
      } else {
        detalles3.classList.remove('form-error');
        detalles3.classList.add('form-success');
        smalldetalles.innerHTML= ""
        errors[e.target.id] = false;
      }
      break;
    case "detalles4":
      if (e.target.value == "") {
        detalles4.classList.remove('form-success');
        detalles4.classList.add('form-error');
        smalldetalles.innerHTML= "Destacar 4 detalles del Producto"
        errors[e.target.id] = true;
      } else {
        detalles4.classList.remove('form-error');
        detalles4.classList.add('form-success');
        smalldetalles.innerHTML= ""
        errors[e.target.id] = false;
      }
      break;
    case "description":
      if (e.target.value == "") {
        description.classList.remove('form-success');
        description.classList.add('form-error');
        smalldescription.innerHTML = "Agregar una descripcion del Producto"
        errors[e.target.id] = true;
      } else {
        description.classList.remove('form-error');
        description.classList.add('form-success');
        smalldescription.innerHTML= ""
        errors[e.target.id] = false;
      }
      break;
  }

  submitActivado()
}



inputs.forEach((input) => {
  input.addEventListener("keyup", validarInput)
  input.addEventListener("blur", validarInput)
})


var btn = document.getElementById("submit-btn");
btn.onclick = function () {
  /* ------------ validar select ------------- */
    const genero = document.getElementById("genero")
    const temporada = document.getElementById("temporada")
    const outlet = document.getElementById("outlet")
    const marca = document.getElementById("marca")
    if (genero.value == "") {
      genero.classList.remove('form-success');
      genero.classList.add('form-error');
      alert("SELECCIONE UN GENERO!!!")
    } else {
      genero.classList.remove('form-error');
      genero.classList.add('form-success');
    }
    if (temporada.value == "") {
      temporada.classList.remove('form-success');
      temporada.classList.add('form-error');
      alert("SELECCIONE SI ES DE TEMPORADA!!!")
    } else {
      temporada.classList.remove('form-error');
      temporada.classList.add('form-success');
    }
    if (outlet.value == "") {
      outlet.classList.remove('form-success');
      outlet.classList.add('form-error');
      alert("SELECCIONE SI ES OFERTA!!!")
    } else {
      outlet.classList.remove('form-error');
      outlet.classList.add('form-success');
    }
    if (marca.value == "") {
      marca.classList.remove('form-success');
      marca.classList.add('form-error');
      alert("SELECCIONE UNA MARCA!!!")  
    } else {
      marca.classList.remove('form-error');
      marca.classList.add('form-success');
    
    }
      /*------------  validar checkbox ------------ */
   /*    const checkdivs = document.querySelectorAll(".checkdiv");
      checkdivs.forEach((check) => {
        const checkinput = check.querySelector("input")
      
        var total_checked = 0

      for (i=0; i<checkinput; i++) {
          if ((checkinput[i].type == "checkbox")
            && (checkinput[i].checked)) {total_checked ++; }
        }
         if (total_checked == 0) {
          alert("seleccionar talles")
          smalltalles.innerHTML= "Seleccionar talles del Producto"
        } else {
           smalltalles.innerHTML= ""
        }
      }) */
    /* -------------  Validar Imagen -------------*/
      var imagen = document.getElementById("img").files;

      if (imagen.length == 0) {
        alert("DEBE SUBIR IMAGENES")
      } else {
        for (x = 0; x < imagen.length; x++) {
          if ((/\.(jpg|jpeg|png|gif|webp)$/).test(imagen.name)) {
            alert('El archivo no es una imagen'); 
          }
        }
      }
      /* if (imagen.width !== 320 && imagen.height !== 320) {
        alert('Las medidas deben ser hasta: 320 * 320'); */
    /*   }else */ if (imagen.size > 320000) {
        alert('El peso de la imagen no puede exceder los 320kb')
      }
      
    }

  submitActivado = () => {
    if (errors.title || errors.price || errors.colors1 || errors.colors2 || errors.colors3 || errors.detalles1 || errors.detalles2 || errors.detalles3 || errors.detalles4 || errors.description) {
      boton.toggleAttribute('disabled', true);
    } else {
      boton.toggleAttribute('disabled', false);
    }
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault()
  })