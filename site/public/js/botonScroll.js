const d=document
const w=window

const $btnScroll=d.querySelector(".scroll")

w.addEventListener("scroll",e=>{
    let scrollTop=d.documentElement.scrollTop;
    
    if(scrollTop > 600){
        $btnScroll.classList.remove("btnOculto")
    }else{
        $btnScroll.classList.add("btnOculto")
    }
})
d.addEventListener("click",e=>{
    if(e.target.matches(".scroll")){
        w.scrollTo({
            behavior:"smooth",
            top:0
        })
    }
})
//la clase CSS del boton esta en general.css