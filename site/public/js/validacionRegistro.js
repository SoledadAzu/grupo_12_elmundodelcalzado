function qs (element){
    return document.querySelector(element)
}
window.addEventListener("load", function(){
    let $inputName = qs("#nombre")
    let $nameErrors = qs("#nombreErrors")
//     inputLastname = qs ("#apellido"),
//     $lastnameErrors =qs("#lastnameErrors"),
//     $email = qs("#email"),
//     $emailErrors = qs("#emailErrors"),
//     $pass = qp("#password"),
//     $pass = qp("#passErrors"),
//     $terms = qp("#terminos"),
   
// [regExAlpha = /[a-zA-Z\sñáéíóú]*$/,
// regExEmail = /[-\w.%+]{1,64}@(?:[A-ZO-9-]{1,63}\_){1,125},
// regExPass = /(?=,*\d)(?=,*[a-z])(?=.*[A-Z]).{6,12}$/;

console.log($inputName)
})
