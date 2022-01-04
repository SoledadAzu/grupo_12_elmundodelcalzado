const d=document;
const w=window;

// input de menu
const $menu=d.querySelector("#menu")
// input del search
const $search=d.querySelector("#search")

w.addEventListener("scroll",e=>{

    // se fija el scroll de windows
    let scrollTop=d.documentElement.scrollTop;
   
    if(scrollTop > 0){
        $menu.checked=false
        $search.checked=false
    }else{
        // $menu.checked=true
    }
})
    
 
    