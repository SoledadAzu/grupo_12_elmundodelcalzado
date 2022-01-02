const d=document;
const w=window;

const $menu=d.querySelector("#menu")

w.addEventListener("scroll",e=>{

    // se fija el scroll de windows
    let scrollTop=d.documentElement.scrollTop;
   
    if(scrollTop > 0){
        $menu.checked=false
    }else{
        // $menu.checked=true
    }
})
    
 
    