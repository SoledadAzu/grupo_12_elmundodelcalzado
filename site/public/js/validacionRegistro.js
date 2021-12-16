function qs (element){
    return document.querySelector(element)
}
window.addEventListener("load", function(){
    let $inputName = qs("#nombre")
    let $nameErrors = qs("#nombreErrors")
   let inputLastname = qs ("#apellido")
//    $lastnameErrors =qs("#lastnameErrors"),
   let $email = qs("#email")
//     $emailErrors = qs("#emailErrors"),
   let $pass = qs("#password")
//     $pass = qp("#passErrors"),
    let $terms = qs("#terminos")
   
//  [regExAlpha = /[a-zA-Z\sñáéíóú]*$/,
// regExEmail = /[-\w.%+]{1,64}@(?:[A-ZO-9-]{1,63}\_){1,125},
// regExPass = /(?=,*\d)(?=,*[a-z])(?=.*[A-Z]).{6,12}$/;

// console.log($inputName)
// console.log(inputLastname)
// console.log($email)
// console.log($pass)
// console.log($terms) 
$inputName.addEventListener("keypress",e =>{
    console.log(e.key)
})
})
