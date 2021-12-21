function permiso(req,res,next){
    if(res.locals.user.rol==="admin"){
        next()
    }else{
        res.render("extras/denegado")
        
    }
      
}

module.exports= permiso