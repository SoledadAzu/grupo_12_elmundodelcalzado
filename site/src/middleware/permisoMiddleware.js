function permiso(req,res,next){
    if(res.locals.user.rol==="admin"){
        console.log(res.locals.user.rol)
        next()
    }else{
        res.render("extras/denegado")
        
    }
      
}

module.exports= permiso