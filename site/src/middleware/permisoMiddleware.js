function permiso(req,res,next){
    if(res.locals.user.rol==="admin"){
        next()
    }else{
        res.redirect("/../../informacion/denegado")
    }
      
}

module.exports= permiso