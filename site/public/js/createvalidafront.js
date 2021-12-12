let form = document.querySelector("form");
let submitbutton = document.querySelector("btn");

let timeout = null

document.querySelectorAll(".labelForm").forEach((divInput) => {
    const boxInput = divInput.querySelector("input");

    boxInput.addEventListener("keydown",(e)=> {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            console.log(`Input ${boxInput.name} value:`, boxInput.value);

            validation(box)
        }, 300)
    });
});

validation = (box, boxInput) => {
    if (boxInput.value == '') {
      showError(true, box, boxInput);
    } else {
      showError(false, box, boxInput);
    }
};
showError = (check, box, boxInput) => {
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