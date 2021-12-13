
let form = document.getElementById("formcreate");
let submitbutton = document.getElementById("submit-btn");

let timeout = null

let errors = {
  title: true,
  price: true,
  colors: true,
  detalles: true,
};

document.querySelectorAll("#inputbox").forEach((box) => {
    const boxInput = box.querySelector("input");

    boxInput.addEventListener("keydown", (event) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
             console.log(`Input ${boxInput.name} value:`, boxInput.value); 

            validation(box,boxInput)
        }, 300);
    });
});


validation = (box,boxInput) => {
  if (boxInput.name == 'title') {  
    if (boxInput.value ==='') {
      showError(true,box,boxInput);
    } else {
      showError(false,box,boxInput);
    }
  }
  if (boxInput.name == 'colors') {  
    if (boxInput.value ==='') {
      showError(true,box,boxInput);
    } else {
      showError(false,box,boxInput);
    }
  }
  if (boxInput.name == 'detalles') {  
    if (boxInput.value ==='') {
      showError(true,box,boxInput);
    } else {
      showError(false,box,boxInput);
    }
  }
    if (boxInput.name =='price') {
      if (boxInput.value ==='') {
        showError(true,box,boxInput);
      } else {
        showError(false,box,boxInput);
      }
            
      if (boxInput.value.length <= 3) {
        showError(true,box,boxInput);
      } else {
        showError(false,box,boxInput);
      }
    }
  

    submitActivado();
  };
let checkboxresul=document.querySelectorAll(".checkdiv").forEach(() => {
submitbutton.addEventListener("clic", (event)=>{  
      var elementosTotales = checkdiv.elements.length;
      var total_checked = 0;
      for(i=0;i<elementosTotales;i++)
         {
     if((checkdiv.elements[i].type=="checkbox")
               &&(checkdiv.elements[i].checked))
               { total_checked++; }
         }
      alert("hay "+total_checked+" checkboxs marcados")
        })
});
console.log(checkboxresul)
showError = (check,box,boxInput) => {
    if (check) {
      box.classList.remove('form-success');
      box.classList.add('form-error');
      errors[boxInput.name] = true;
    } else {
      box.classList.remove('form-error');
      box.classList.add('form-success');
      errors[boxInput.name] = false;
    }
};
submitActivado = () => {
  if (errors.title || errors.price || errors.colors || errors.detalles ){
    submitbutton.toggleAttribute('disabled', true);
  } else {
    submitbutton.toggleAttribute('disabled', false);
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log([...formData]);
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
});

